import { notFound } from 'next/navigation';
import { getProductById, getProductsByCategory, products } from '@/lib/data/products';
import { contactInfo } from '@/lib/data/stores';
import { Zap, MapPin, Shield, Battery, Clock, ArrowLeft, Home, ChevronRight, CheckCircle, Phone } from 'lucide-react';
import Link from 'next/link';
import { ProductCard } from '@/app/components/Products/ProductCard';
import ProductDetailClient from './ProductDetailClient';

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.id);

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
          {/* Interactive Product Images Gallery - Client Component */}
          <ProductDetailClient product={product} />

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
              {product.tagline && (
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  {product.tagline}
                </p>
              )}
              <p className="text-lg text-gray-600 leading-relaxed">
                {product.specs}
              </p>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
              <div className="flex items-center gap-4 mb-3">
                {/* {product.originalPrice && product.originalPriceFormatted && (
                  <div className="text-xl text-gray-400 line-through">
                    {product.originalPriceFormatted}
                  </div>
                )}
                {product.discount && (
                  <div className="text-lg text-red-500 font-semibold">
                    (-{product.discount}%)
                  </div>
                )} */}
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
                {product.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Specifications Cards */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Thông số chính</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-blue-700 font-medium">Tầm hoạt động</span>
                  </div>
                  <div className="text-xl font-bold text-blue-900">{product.range} km</div>
                  <div className="text-xs text-blue-600 mt-1">1 lần sạc</div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-green-700 font-medium">Tốc độ tối đa</span>
                  </div>
                  <div className="text-xl font-bold text-green-900">{product.maxSpeed} km/h</div>
                  <div className="text-xs text-green-600 mt-1">Vận hành êm ái</div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Battery className="w-5 h-5 text-purple-600" />
                    <span className="text-sm text-purple-700 font-medium">Pin</span>
                  </div>
                  <div className="text-lg font-bold text-purple-900">{product.battery}</div>
                  <div className="text-xs text-purple-600 mt-1">Công nghệ tiên tiến</div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl border border-orange-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-orange-600" />
                    <span className="text-sm text-orange-700 font-medium">Thời gian sạc</span>
                  </div>
                  <div className="text-lg font-bold text-orange-900">{product.chargingTime}</div>
                  <div className="text-xs text-orange-600 mt-1">Sạc nhanh</div>
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

        {/* Interactive tabs are now handled by ProductDetailClient component */}

        {/* Additional Information */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Tại sao chọn {product.name}?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Công nghệ tiên tiến</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {product.name} được trang bị công nghệ pin LFP mới nhất, hệ thống quản lý năng lượng thông minh và động cơ điện hiệu suất cao.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Pin LFP bền bỉ, an toàn
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Động cơ không chổi than
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Hệ thống BMS thông minh
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">An toàn vượt trội</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Thiết kế khung xe chắc chắn, hệ thống phanh thông minh và các tính năng an toàn chủ động đảm bảo hành trình an toàn.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Hệ thống phanh ABS
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Đèn LED chiếu sáng toàn bộ
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Khung xe cứng cáp, ổn định
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Dịch vụ chuyên nghiệp</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Mạng lưới đại lý toàn quốc, dịch vụ bảo hành-bảo trì chuyên nghiệp và đội ngũ hỗ trợ kỹ thuật 24/7.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Bảo hành {product.warranty}
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Hỗ trợ 24/7
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Bảo trì định kỳ miễn phí
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Sẵn sàng sở hữu {product.name}?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Đăng ký lái thử ngay hôm nay hoặc liên hệ để nhận tư vấn chi tiết
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              {contactInfo.socialMedia?.facebook ? (
                <a 
                  href={contactInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Liên hệ ngay
                </a>
              ) : (
                <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Liên hệ ngay
                </button>
              )}
              <button className="bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                Tìm đại lý
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Sản phẩm tương tự
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct: any) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
        
        {/* SEO Content */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Đánh giá chi tiết {product.name}
          </h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              <strong>{product.name}</strong> là một trong những mẫu xe máy điện {product.category === 'cao-cap' ? 'cao cấp' : product.category === 'trung-cap' ? 'trung cấp' : 'phổ thông'} 
              được ưa chuộng nhất của VinFast. Với thiết kế hiện đại, công nghệ tiên tiến và hiệu suất vượt trội, 
              {product.name} hứa hẹn mang đến trải nghiệm di chuyển tuyệt vời cho người dùng.
            </p>
            <p className="mb-4">
              Điểm nổi bật của {product.name} chính là khả năng di chuyển {product.range}km với một lần sạc, 
              tốc độ tối đa {product.maxSpeed}km/h và thời gian sạc chỉ {product.chargingTime}. 
              Đây là những thông số ấn tượng trong phân khúc xe máy điện hiện tại.
            </p>
            <p>
              Với mức giá {product.priceFormatted}, {product.name} được đánh giá có tỷ lệ giá/chất lượng tốt, 
              phù hợp với nhu cầu di chuyển hàng ngày của người dùng Việt Nam. 
              Sản phẩm được bảo hành chính hãng {product.warranty} cùng dịch vụ hỗ trợ 24/7.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}