import { stores, contactInfo } from '@/lib/data/stores';
import { StoreCard } from './StoreCard';
import { MapPin, Building2, Users, Star, MessageCircle } from 'lucide-react';

export const StoresSection = () => {
  return (
    <section id="stores" className="py-12 sm:py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-3 py-1.5 rounded-full text-xs font-medium mb-3 sm:mb-4 border border-blue-400/30">
            <Building2 className="w-3 h-3" />
            Hệ thống cửa hàng
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
            <span className="block">Hệ thống cửa hàng</span>
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mt-1">
              VinFast Việt Hùng
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 max-w-xl mx-auto leading-relaxed">
            4 cơ sở phục vụ tại Vĩnh Phúc và Phú Thọ - Luôn sẵn sàng hỗ trợ bạn
            với đội ngũ chuyên nghiệp và dịch vụ chất lượng cao.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2 border border-blue-400/30">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              </div>
              <div className="text-base sm:text-lg font-bold text-white">4</div>
              <div className="text-xs text-gray-300">Cửa hàng</div>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2 border border-purple-400/30">
                <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
              </div>
              <div className="text-base sm:text-lg font-bold text-white">2</div>
              <div className="text-xs text-gray-300">Tỉnh thành</div>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2 border border-green-400/30">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
              </div>
              <div className="text-base sm:text-lg font-bold text-white">50+</div>
              <div className="text-xs text-gray-300">Nhân viên</div>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2 border border-yellow-400/30">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
              </div>
              <div className="text-base sm:text-lg font-bold text-white">5.0</div>
              <div className="text-xs text-gray-300">Đánh giá</div>
            </div>
          </div>
        </div>

        {/* Stores Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {stores.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
            <h3 className="text-lg sm:text-xl font-bold mb-3">
              Bạn muốn ghé thăm cửa hàng?
            </h3>
            <p className="text-blue-100 mb-4 max-w-xl mx-auto text-sm sm:text-base">
              Hãy liên hệ với chúng tôi để được hướng dẫn đường đi và
              đặt lịch hẹn tư vấn tại cửa hàng gần nhất.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:0862669588"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300 shadow-lg text-sm sm:text-base"
              >
                <MapPin className="w-4 h-4" />
                Liên hệ ngay
              </a>
              {contactInfo.socialMedia?.facebook && (
                <a
                  href={contactInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transform hover:-translate-y-1 transition-all duration-300 shadow-lg border border-blue-600 text-sm sm:text-base"
                >
                  <MessageCircle className="w-4 h-4" />
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
