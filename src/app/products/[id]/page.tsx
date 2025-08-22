import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import { getProductById, getProductsByCategory } from '@/lib/data/products';
import { contactInfo } from '@/lib/data/stores';
import { Zap, MapPin, Shield, Battery, Clock, Weight, ArrowLeft, Home, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { ProductCard } from '@/app/components/Products/ProductCard';

export async function generateStaticParams() {
  const { products } = await import('@/lib/data/products');
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  
  if (!product) {
    return {
      title: 'Không tìm thấy sản phẩm - VinFast Việt Hùng',
    };
  }

  return {
    title: `${product.name} - VinFast Việt Hùng`,
    description: `${product.specs}. Giá: ${product.priceFormatted}. ${product.features.join(', ')}`,
    keywords: `VinFast, ${product.name}, xe máy điện, ${product.category}, ${product.priceFormatted}`,
    openGraph: {
      title: `${product.name} - VinFast Việt Hùng`,
      description: `${product.specs}. Giá: ${product.priceFormatted}`,
      type: 'website',
      images: [product.image],
    },
  };
}

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  // Get related products from the same category
  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại trang chủ
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="flex items-center hover:text-blue-600 transition-colors duration-200">
            <Home className="w-4 h-4 mr-1" />
            Trang chủ
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/#products" className="hover:text-blue-600 transition-colors duration-200">
            Sản phẩm
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={400}
                className="w-full h-80 lg:h-96 object-cover"
                priority
              />
              
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                    {product.badge}
                  </span>
                </div>
              )}
              
              {/* Discount Badge */}
              {product.discount && (
                <div className="absolute top-4 right-4">
                  <span className="bg-red-500 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                    -{product.discount}%
                  </span>
                </div>
              )}
            </div>

            {/* Gallery Images */}
            {product.gallery && product.gallery.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {product.gallery.slice(0, 4).map((imageUrl, index) => (
                  <div key={index} className="relative overflow-hidden rounded-xl shadow-md">
                    <Image
                      src={imageUrl}
                      alt={`${product.name} - Chi tiết ${index + 1}`}
                      width={300}
                      height={200}
                      className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Title and Category */}
            <div>
              <div className="text-sm text-blue-600 font-medium mb-2">
                {product.category === 'cao-cap' && 'Cao cấp'}
                {product.category === 'trung-cap' && 'Trung cấp'}
                {product.category === 'pho-thong' && 'Phổ thông'}
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {product.specs}
              </p>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
              <div className="flex items-center gap-4 mb-3">
                {product.originalPrice && product.originalPriceFormatted && (
                  <div className="text-xl text-gray-400 line-through">
                    {product.originalPriceFormatted}
                  </div>
                )}
                {product.discount && (
                  <div className="text-lg text-red-500 font-semibold">
                    (-{product.discount}%)
                  </div>
                )}
              </div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {product.priceFormatted}
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Giá đã bao gồm VAT, 1 pin và 1 bộ sạc
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tính năng nổi bật</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Thông số kỹ thuật</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-5 h-5 text-blue-500" />
                    <span className="text-sm text-gray-600">Tầm hoạt động</span>
                  </div>
                  <div className="text-xl font-bold text-gray-900">{product.range} km</div>
                </div>
                
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-600">Tốc độ tối đa</span>
                  </div>
                  <div className="text-xl font-bold text-gray-900">{product.maxSpeed} km/h</div>
                </div>
                
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Battery className="w-5 h-5 text-purple-500" />
                    <span className="text-sm text-gray-600">Pin</span>
                  </div>
                  <div className="text-xl font-bold text-gray-900">{product.battery}</div>
                </div>
                
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="w-5 h-5 text-orange-500" />
                    <span className="text-sm text-gray-600">Bảo hành</span>
                  </div>
                  <div className="text-xl font-bold text-gray-900">{product.warranty}</div>
                </div>
                
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-indigo-500" />
                    <span className="text-sm text-gray-600">Thời gian sạc</span>
                  </div>
                  <div className="text-xl font-bold text-gray-900">{product.chargingTime}</div>
                </div>
                
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Weight className="w-5 h-5 text-gray-500" />
                    <span className="text-sm text-gray-600">Trọng lượng</span>
                  </div>
                  <div className="text-xl font-bold text-gray-900">{product.weight} kg</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              {contactInfo.socialMedia?.facebook ? (
                <a 
                  href={contactInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 text-lg rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl text-center block"
                >
                  Liên hệ tư vấn ngay
                </a>
              ) : (
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 text-lg rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Liên hệ tư vấn ngay
                </button>
              )}
              
              <button className="w-full bg-white text-gray-900 font-semibold py-4 px-6 text-lg rounded-xl border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                Đặt lịch lái thử
              </button>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Thông tin chi tiết</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Công nghệ</h3>
              <p className="text-gray-600 leading-relaxed">
                VinFast {product.name} được trang bị công nghệ tiên tiến nhất, đảm bảo hiệu suất vượt trội và trải nghiệm lái xe tuyệt vời.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">An toàn</h3>
              <p className="text-gray-600 leading-relaxed">
                Hệ thống phanh thông minh, đèn LED chiếu sáng mạnh mẽ và thiết kế khung xe chắc chắn đảm bảo an toàn tối đa.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Dịch vụ</h3>
              <p className="text-gray-600 leading-relaxed">
                Bảo hành chính hãng, dịch vụ hậu mãi 24/7 và đội ngũ kỹ thuật viên chuyên nghiệp luôn sẵn sàng hỗ trợ.
              </p>
            </div>
          </div>

          {/* Technical Details */}
          {product.motorType || product.brakeSystem || product.lighting ? (
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Thông số kỹ thuật chi tiết</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.motorType && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Động cơ</h4>
                    <p className="text-gray-600">{product.motorType}</p>
                  </div>
                )}
                {product.brakeSystem && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Hệ thống phanh</h4>
                    <p className="text-gray-600">{product.brakeSystem}</p>
                  </div>
                )}
                {product.lighting && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Hệ thống chiếu sáng</h4>
                    <p className="text-gray-600">{product.lighting}</p>
                  </div>
                )}
                {product.dimensions && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Kích thước</h4>
                    <p className="text-gray-600">
                      Dài: {product.dimensions.length}mm × Rộng: {product.dimensions.width}mm × Cao: {product.dimensions.height}mm
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : null}

          {/* Color Options */}
          {product.colors && product.colors.length > 0 && (
            <div className="mt-8 bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Tùy chọn màu sắc</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {product.colors.map((color, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <span className="text-xs text-gray-600 font-medium">{color}</span>
                    </div>
                    <span className="text-sm text-gray-700">{color}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Sản phẩm tương tự
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
