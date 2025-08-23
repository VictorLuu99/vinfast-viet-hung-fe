import { stores, contactInfo } from '@/lib/data/stores';
import { StoreCard } from './StoreCard';
import { MapPin, Building2, Users, Star, MessageCircle } from 'lucide-react';

export const StoresSection = () => {
  return (
    <section id="stores" className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-blue-400/30">
            <Building2 className="w-3 h-3 sm:w-4 sm:h-4" />
            Hệ thống cửa hàng
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            <span className="block">Hệ thống cửa hàng</span>
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mt-2">
              VinFast Việt Hùng
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
            4 cơ sở phục vụ tại Vĩnh Phúc và Phú Thọ - Luôn sẵn sàng hỗ trợ bạn 
            với đội ngũ chuyên nghiệp và dịch vụ chất lượng cao.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 border border-blue-400/30">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              </div>
              <div className="text-lg sm:text-2xl font-bold text-white">4</div>
              <div className="text-xs sm:text-sm text-gray-300">Cửa hàng</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 border border-purple-400/30">
                <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
              </div>
              <div className="text-lg sm:text-2xl font-bold text-white">2</div>
              <div className="text-xs sm:text-sm text-gray-300">Tỉnh thành</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 border border-green-400/30">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
              </div>
              <div className="text-lg sm:text-2xl font-bold text-white">50+</div>
              <div className="text-xs sm:text-sm text-gray-300">Nhân viên</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 border border-yellow-400/30">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
              </div>
              <div className="text-lg sm:text-2xl font-bold text-white">5.0</div>
              <div className="text-xs sm:text-sm text-gray-300">Đánh giá</div>
            </div>
          </div>
        </div>

        {/* Stores Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {stores.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Bạn muốn ghé thăm cửa hàng?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Hãy liên hệ với chúng tôi để được hướng dẫn đường đi và 
              đặt lịch hẹn tư vấn tại cửa hàng gần nhất.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0862669588"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                <MapPin className="w-5 h-5" />
                Liên hệ ngay
              </a>
              {contactInfo.socialMedia?.facebook && (
                <a 
                  href={contactInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transform hover:-translate-y-1 transition-all duration-300 shadow-lg border border-blue-600"
                >
                  <MessageCircle className="w-5 h-5" />
                  Tư vấn qua Facebook
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
