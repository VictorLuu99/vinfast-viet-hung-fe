'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/lib/api';
import { contactInfo } from '@/lib/data/stores';
import { Zap, MapPin, Shield, Battery, Clock, Star, Eye, Camera, Truck, CheckCircle, Phone } from 'lucide-react';

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('specifications');
  const [selectedColor, setSelectedColor] = useState<string | null>(
    product.colors && product.colors.length > 0 ? product.colors[0] : product.default_color || null
  );

  // Get color variant images from the API structure
  const getColorVariantImages = (color: string): string[] => {
    if (product.color_variants && product.color_variants[color]) {
      return product.color_variants[color];
    }
    // Fallback to default image if no color-specific images
    return ['/api/placeholder/800/600'];
  };

  // Get the current images based on selected color
  const getCurrentImages = (): string[] => {
    if (selectedColor && product.color_variants && product.color_variants[selectedColor]) {
      return product.color_variants[selectedColor];
    }
    // Fallback to main product image
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
      'Hồng': 'bg-pink-400',
      'Đen': 'bg-gray-900',
      'Trắng': 'bg-gray-100 border-gray-300',
      'Đỏ': 'bg-red-500',
      'Vàng': 'bg-yellow-400',
      'Đỏ Tươi': 'bg-red-500',
      'Đen Nhám': 'bg-gray-800',
      'Xanh Tím Than': 'bg-indigo-600',
      'Trắng Ngọc Trai': 'bg-gray-50 border-gray-300',
      'Xanh Rêu': 'bg-green-600',
      'Xanh Dương': 'bg-blue-500',
      'Xám': 'bg-gray-500',
      'Bạc': 'bg-gray-300',
    };
    return colorMap[colorName] || 'bg-gray-400';
  };

  return (
    <>
      {/* Enhanced Product Images Gallery */}
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

        {/* Color Selection - Enhanced for color-image management */}
        {product.colors && product.colors.length > 0 && (
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Tùy chọn màu sắc</h4>
            <div className="flex flex-wrap gap-4">
              {product.colors.map((color: string, index: number) => {
                const isSelected = selectedColor === color;
                const hasColorImages = product.color_variants && product.color_variants[color] && product.color_variants[color].length > 0;

                return (
                  <div key={index} className="text-center group cursor-pointer" onClick={() => handleColorSelect(color)}>
                    <div className={`w-16 h-16 mx-auto mb-2 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 border-4 ${
                      isSelected
                        ? 'border-blue-500 ring-4 ring-blue-200 scale-110'
                        : 'border-gray-200 hover:border-gray-300 hover:scale-105'
                    } ${
                      getColorClass(color)
                    } ${color.includes('Trắng') ? 'border' : ''}`}>
                      {color.includes('Trắng') && (
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
                {product.color_variants && product.color_variants[selectedColor] && (
                  <span className="ml-2">• {product.color_variants[selectedColor].length} hình ảnh</span>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Interactive Tabs */}
      <div className="mt-16">
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

                  {(product.length_mm || product.width_mm || product.height_mm) && (
                    <div className="md:col-span-2 space-y-4">
                      <h4 className="font-semibold text-gray-900 border-b pb-2">Kích thước & Khác</h4>
                      <div className="grid grid-cols-3 gap-6">
                        {product.length_mm && (
                          <div className="text-center py-2 px-4 bg-gray-50 rounded-lg">
                            <span className="block text-gray-600 text-sm mb-1">Dài</span>
                            <span className="block font-semibold text-lg">{product.length_mm}mm</span>
                          </div>
                        )}
                        {product.width_mm && (
                          <div className="text-center py-2 px-4 bg-gray-50 rounded-lg">
                            <span className="block text-gray-600 text-sm mb-1">Rộng</span>
                            <span className="block font-semibold text-lg">{product.width_mm}mm</span>
                          </div>
                        )}
                        {product.height_mm && (
                          <div className="text-center py-2 px-4 bg-gray-50 rounded-lg">
                            <span className="block text-gray-600 text-sm mb-1">Cao</span>
                            <span className="block font-semibold text-lg">{product.height_mm}mm</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Tính năng nổi bật</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.features.map((feature: string, index: number) => (
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
    </>
  );
}