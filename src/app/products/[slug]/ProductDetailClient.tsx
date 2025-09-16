"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { LoadingSpinner } from "../../components/shared/LoadingSpinner";
import {
  apiClient,
  Product,
  normalizeProductData,
} from "@/lib/api";
import {
  ArrowLeft,
  Facebook,
  Twitter,
  Copy,
  Check,
  Zap,
  MapPin,
  Shield,
  Battery,
  CheckCircle,
  Phone,
  Car,
  Camera,
  Truck,
} from "lucide-react";
import { contactInfo } from "@/lib/data/stores";

export default function ProductDetailClient() {
  const params = useParams();
  const router = useRouter();
  const productSlug = params.slug as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('specifications');
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const fetchProduct = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await apiClient.getProduct(productSlug);

      if (response.success && response.data) {
        const productData = normalizeProductData(response.data);
        setProduct(productData);
        // Set initial color selection
        setSelectedColor(
          productData.colors && productData.colors.length > 0
            ? productData.colors[0]
            : productData.default_color || null
        );
        // Fetch related products
        fetchRelatedProducts(productData.category);
      } else {
        setError(response.error || "Không tìm thấy sản phẩm");
      }
    } catch (err) {
      setError("Lỗi kết nối. Vui lòng thử lại sau.");
      console.error("Error fetching product:", err);
    } finally {
      setIsLoading(false);
    }
  }, [productSlug]);

  useEffect(() => {
    if (productSlug) {
      fetchProduct();
    }
  }, [productSlug, fetchProduct]);

  const fetchRelatedProducts = useCallback(async (category: string) => {
    try {
      const response = await apiClient.getProducts({
        category: category,
        limit: 3,
      });

      if (response.success && response.data) {
        // Filter out current product
        const filtered = response.data.filter((p) => p.slug !== productSlug);
        setRelatedProducts(filtered.slice(0, 3));
      }
    } catch (err) {
      console.error("Error fetching related products:", err);
    }
  }, [productSlug]);

  const handleShare = async (platform?: "facebook" | "twitter") => {
    const url = window.location.href;
    const title = product?.name || "VinFast Việt Hùng";

    if (platform === "facebook") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`,
        "_blank"
      );
    } else if (platform === "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(title)}`,
        "_blank"
      );
    } else {
      // Copy to clipboard
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }
  };

  // Get the current images based on selected color
  const getCurrentImages = (): string[] => {
    if (!product) return ['/api/placeholder/800/600'];

    if (selectedColor &&
        product.color_variants &&
        typeof product.color_variants === 'object' &&
        product.color_variants[selectedColor] &&
        Array.isArray(product.color_variants[selectedColor])) {
      return product.color_variants[selectedColor];
    }
    // Fallback to main product image or placeholder
    return ['/api/placeholder/800/600'];
  };

  const allImages = getCurrentImages();

  // Handle color selection
  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    setSelectedImageIndex(0); // Reset to first image when color changes
  };

  // Get color CSS classes for visual representation
  const getColorClass = (colorName: string) => {
    const colorMap: Record<string, string> = {
      'hồng': 'bg-pink-400',
      'đen': 'bg-gray-900',
      'trắng': 'bg-gray-100 border-gray-300',
      'đỏ': 'bg-red-500',
      'vàng': 'bg-yellow-400',
      'đỏ tươi': 'bg-red-500',
      'đen nhám': 'bg-gray-800',
      'xanh tím than': 'bg-indigo-600',
      'trắng ngọc trai': 'bg-gray-50 border-gray-300',
      'xanh rêu': 'bg-green-600',
      'xanh dương': 'bg-blue-500',
      'xám': 'bg-gray-500',
      'bạc': 'bg-gray-300',
    };
    return colorMap[colorName] || 'bg-gray-400';
  };

  if (isLoading) {
    return (
      <main>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <LoadingSpinner size="lg" className="mx-auto mb-4" />
            <p className="text-gray-600">Đang tải sản phẩm...</p>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  if (error || !product) {
    return (
      <main>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {error || "Không tìm thấy sản phẩm"}
            </h1>
            <p className="text-gray-600 mb-6">
              Sản phẩm có thể đã bị xóa hoặc không tồn tại.
            </p>
            <div className="flex gap-4 justify-center">
              <button onClick={() => router.back()} className="btn btn-outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Quay lại
              </button>
              <Link href="/products" className="btn btn-primary">
                Xem sản phẩm khác
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <div className="min-h-screen bg-gray-50 pt-20">
        <Header />
        {/* Product Content */}
        <article className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-2">
                <Link
                  href="/products"
                  className="inline-flex items-center px-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-white rounded-lg transition-colors group"
                >
                  <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  <Car className="h-4 w-4 mr-2" />
                  Về Sản phẩm
                </Link>
              </div>

              {/* Product Header */}
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {product.name}
                </h1>
                <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
                  {product.price_formatted}
                </div>

                {product.description && (
                  <p className="text-xl text-gray-600 leading-relaxed mb-6">
                    {product.description}
                  </p>
                )}

                {/* Share Buttons */}
                <div className="flex items-center gap-4 py-6 border-y border-gray-200">
                  <span className="text-gray-600 font-medium">Chia sẻ:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleShare("facebook")}
                      className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Facebook className="h-4 w-4" />
                      Facebook
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="flex items-center gap-2 px-3 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                      Twitter
                    </button>
                    <button
                      onClick={() => handleShare()}
                      className="flex items-center gap-2 px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      {copied ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                      {copied ? "Đã sao chép" : "Sao chép link"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Images Gallery */}
              <div className="mb-12">
                <div className="space-y-4">
                  {/* Main Image Display */}
                  <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white">
                    <div className="aspect-w-16 aspect-h-12 bg-gray-100">
                      <Image
                        src={allImages[selectedImageIndex] || '/api/placeholder/800/600'}
                        alt={`${product.name}${selectedColor ? ` - ${selectedColor}` : ''}`}
                        width={800}
                        height={600}
                        className="w-full h-80 lg:h-96 object-cover"
                        priority
                      />
                    </div>

                    {/* Image Navigation */}
                    {allImages.length > 1 && (
                      <>
                        <button
                          onClick={() => setSelectedImageIndex(prev => prev > 0 ? prev - 1 : allImages.length - 1)}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                          aria-label="Ảnh trước"
                        >
                          ‹
                        </button>
                        <button
                          onClick={() => setSelectedImageIndex(prev => prev < allImages.length - 1 ? prev + 1 : 0)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                          aria-label="Ảnh sau"
                        >
                          ›
                        </button>
                      </>
                    )}

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.badge && (
                        <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                          {product.badge}
                        </span>
                      )}
                      {product.discount && product.discount > 0 && (
                        <span className="bg-red-500 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                          -{product.discount}%
                        </span>
                      )}
                    </div>

                    {/* Image Counter */}
                    {allImages.length > 1 && (
                      <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                        {selectedImageIndex + 1} / {allImages.length}
                      </div>
                    )}
                  </div>

                  {/* Thumbnail Gallery */}
                  {allImages.length > 1 && (
                    <div className="flex gap-3 overflow-x-auto pb-2">
                      {allImages.map((imageUrl: string, index: number) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImageIndex(index)}
                          className={`relative flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                            selectedImageIndex === index ? 'border-blue-500 scale-105' : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <Image
                            src={imageUrl || '/api/placeholder/80/64'}
                            alt={`${product.name} - Ảnh ${index + 1}`}
                            width={80}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Color Selection */}
                  {Array.isArray(product.colors) && product.colors.length > 0 && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900">Tùy chọn màu sắc</h4>
                      <div className="flex flex-wrap gap-4">
                        {product.colors.map((color: string, index: number) => {
                          const isSelected = selectedColor === color;
                          const hasColorImages = product.color_variants &&
                            typeof product.color_variants === 'object' &&
                            product.color_variants[color] &&
                            Array.isArray(product.color_variants[color]) &&
                            product.color_variants[color].length > 0;

                          return (
                            <div key={index} className="text-center group cursor-pointer" onClick={() => handleColorSelect(color)}>
                              <div className={`w-16 h-16 mx-auto mb-2 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 border-4 ${
                                isSelected
                                  ? 'border-blue-500 ring-4 ring-blue-200 scale-110'
                                  : 'border-gray-200 hover:border-gray-300 hover:scale-105'
                              } ${
                                getColorClass(color.toLocaleLowerCase())
                              } ${color.includes('trắng') ? 'border' : ''}`}>
                                {color.includes('trắng') && (
                                  <div className="w-full h-full rounded-full bg-white opacity-90"></div>
                                )}
                                {/* Indicator for colors with specific images */}
                                {hasColorImages && (
                                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full flex items-center justify-center">
                                    <Camera className="w-2 h-2 text-white" />
                                  </div>
                                )}
                              </div>
                              <span className={`text-xs font-medium transition-colors block ${
                                isSelected ? 'text-blue-600' : 'text-gray-900'
                              }`}>{color}</span>
                              <p className={`text-xs mt-1 transition-colors ${
                                isSelected ? 'text-blue-500' : 'text-gray-500'
                              }`}>
                                {isSelected ? 'Đã chọn' : hasColorImages ? 'Có ảnh' : 'Có sẵn'}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                      {selectedColor && (
                        <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                          <span className="font-medium">Màu đã chọn:</span> {selectedColor}
                          {product.color_variants &&
                            typeof product.color_variants === 'object' &&
                            product.color_variants[selectedColor] &&
                            Array.isArray(product.color_variants[selectedColor]) && (
                            <span className="ml-2">• {product.color_variants[selectedColor].length} hình ảnh</span>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Quick Specs */}
              <div className="mb-12">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Thông số nhanh</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <Zap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-lg font-semibold text-gray-900">{product.range_km}km</div>
                      <div className="text-sm text-gray-600">Quãng đường</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <MapPin className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <div className="text-lg font-semibold text-gray-900">{product.max_speed_kmh}km/h</div>
                      <div className="text-sm text-gray-600">Tốc độ tối đa</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <Battery className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <div className="text-lg font-semibold text-gray-900">{product.power_w}W</div>
                      <div className="text-sm text-gray-600">Công suất</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <Shield className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                      <div className="text-lg font-semibold text-gray-900">{product.warranty}</div>
                      <div className="text-sm text-gray-600">Bảo hành</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Tabs */}
              <div className="mb-12">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* Tab Navigation */}
                  <div className="border-b border-gray-200 overflow-x-auto">
                    <nav className="flex space-x-2 sm:space-x-4 lg:space-x-8 px-3 sm:px-6 min-w-max" aria-label="Tabs">
                      {[
                        { id: 'specifications', name: 'Thông số kỹ thuật', icon: Battery },
                        { id: 'features', name: 'Tính năng', icon: CheckCircle },
                        { id: 'warranty', name: 'Bảo hành & Dịch vụ', icon: Shield },
                      ].map((tab) => {
                        const Icon = tab.icon;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`${
                              activeTab === tab.id
                                ? 'border-blue-500 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            } whitespace-nowrap py-3 sm:py-4 px-1 sm:px-2 border-b-2 font-medium text-xs sm:text-sm flex items-center gap-1 sm:gap-2 flex-shrink-0`}
                          >
                            <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="hidden sm:inline">{tab.name}</span>
                            <span className="sm:hidden text-xs">
                              {tab.id === 'specifications' && 'Thông số'}
                              {tab.id === 'features' && 'Tính năng'}
                              {tab.id === 'warranty' && 'Bảo hành'}
                            </span>
                          </button>
                        );
                      })}
                    </nav>
                  </div>

                  {/* Tab Content */}
                  <div className="p-6">
                    {activeTab === 'specifications' && (
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-gray-900">Thông số kỹ thuật chi tiết</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <h4 className="font-semibold text-gray-900 border-b pb-2">Hiệu suất</h4>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                <span className="text-gray-600">Tốc độ tối đa</span>
                                <span className="font-semibold">{product.max_speed_kmh} km/h</span>
                              </div>
                              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                <span className="text-gray-600">Quãng đường</span>
                                <span className="font-semibold">{product.range_km} km</span>
                              </div>
                              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                <span className="text-gray-600">Công suất động cơ</span>
                                <span className="font-semibold">{product.power_w}W</span>
                              </div>
                              {product.motor_type && (
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                  <span className="text-gray-600">Loại động cơ</span>
                                  <span className="font-semibold">{product.motor_type}</span>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h4 className="font-semibold text-gray-900 border-b pb-2">Pin & Sạc</h4>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                <span className="text-gray-600">Loại pin</span>
                                <span className="font-semibold">{product.battery_type || 'Pin LFP'}</span>
                              </div>
                              {product.battery_capacity && (
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                  <span className="text-gray-600">Dung lượng pin</span>
                                  <span className="font-semibold">{product.battery_capacity}</span>
                                </div>
                              )}
                              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                <span className="text-gray-600">Thời gian sạc</span>
                                <span className="font-semibold">{product.charging_time || '4-6 giờ'}</span>
                              </div>
                              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                <span className="text-gray-600">Trọng lượng</span>
                                <span className="font-semibold">{product.weight_kg} kg</span>
                              </div>
                              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                <span className="text-gray-600">Bảo hành</span>
                                <span className="font-semibold">{product.warranty || '2 năm'}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'features' && (
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-gray-900">Tính năng nổi bật</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {Array.isArray(product.features) && product.features.map((feature: string, index: number) => (
                            <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                              <div>
                                <p className="text-gray-900 font-medium">{feature}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === 'warranty' && (
                      <div className="space-y-4 sm:space-y-6">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Bảo hành & Dịch vụ hậu mãi</h3>
                        <div className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
                          <div className="space-y-4">
                            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-200">
                              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-1 flex-shrink-0" />
                              <div className="min-w-0 flex-1">
                                <h4 className="font-semibold text-blue-900 mb-1 sm:mb-2 text-sm sm:text-base">Bảo hành chính hãng</h4>
                                <p className="text-blue-800 text-sm sm:text-base leading-relaxed">{product.warranty || '2 năm'} bảo hành toàn diện từ VinFast</p>
                              </div>
                            </div>

                            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-green-50 rounded-lg border border-green-200">
                              <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-1 flex-shrink-0" />
                              <div className="min-w-0 flex-1">
                                <h4 className="font-semibold text-green-900 mb-1 sm:mb-2 text-sm sm:text-base">Giao hàng tận nơi</h4>
                                <p className="text-green-800 text-sm sm:text-base leading-relaxed">Miễn phí giao hàng và lắp đặt trong khu vực nội thành</p>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-purple-50 rounded-lg border border-purple-200">
                              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 mt-1 flex-shrink-0" />
                              <div className="min-w-0 flex-1">
                                <h4 className="font-semibold text-purple-900 mb-1 sm:mb-2 text-sm sm:text-base">Hỗ trợ 24/7</h4>
                                <p className="text-purple-800 text-sm sm:text-base leading-relaxed">Đội ngũ kỹ thuật viên sẵn sàng hỗ trợ mọi lúc</p>
                              </div>
                            </div>

                            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-orange-50 rounded-lg border border-orange-200">
                              <Battery className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 mt-1 flex-shrink-0" />
                              <div className="min-w-0 flex-1">
                                <h4 className="font-semibold text-orange-900 mb-1 sm:mb-2 text-sm sm:text-base">Bảo trì định kỳ</h4>
                                <p className="text-orange-800 text-sm sm:text-base leading-relaxed">Dịch vụ bảo trì chuyên nghiệp, đảm bảo hiệu suất tối ưu</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-white text-center mb-12">
                <h3 className="text-2xl font-bold mb-4">
                  Quan tâm đến xe điện VinFast?
                </h3>
                <p className="text-lg opacity-90 mb-6">
                  Liên hệ với VinFast Việt Hùng để được tư vấn chi tiết và trải
                  nghiệm xe
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="btn bg-white text-blue-600 hover:bg-gray-100"
                  >
                    📞 Gọi ngay: {contactInfo.phone}
                  </a>
                  {contactInfo.socialMedia?.facebook && (
                    <a
                      href={contactInfo.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn bg-white/10 text-white border-white hover:bg-white/20"
                    >
                      Tư vấn qua Facebook
                    </a>
                  )}
                </div>
              </div>

              {/* Related Products */}
              {relatedProducts.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Sản phẩm liên quan
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedProducts.map((relatedProduct) => (
                      <Link
                        key={relatedProduct.id}
                        href={`/products/${relatedProduct.slug}`}
                        className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <div className="relative aspect-video bg-gray-200">
                          <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-100 to-green-100">
                            <span className="text-4xl">🚗</span>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {relatedProduct.name}
                          </h3>
                          <p className="text-lg font-bold text-blue-600 mt-2">
                            {relatedProduct.price_formatted}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </main>
  );
}