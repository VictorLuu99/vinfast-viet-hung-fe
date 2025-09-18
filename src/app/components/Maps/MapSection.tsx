"use client";

import { GoogleMapsEmbed } from './GoogleMapsEmbed';
import { MapPin, Navigation, Clock, Building2 } from 'lucide-react';

export const MapSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 border border-white/30">
            <MapPin className="w-4 h-4" />
            Vị trí cửa hàng
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            🗺️ Tìm đường đến VinFast Việt Hùng
          </h2>

          <p className="text-lg sm:text-xl text-blue-100 mb-6 max-w-2xl mx-auto leading-relaxed">
            4 cơ sở hiện đại tại Vĩnh Phúc và Phú Thọ với bản đồ tương tác,
            zoom in/out và xem toàn màn hình
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="text-center text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-white/30">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="font-semibold mb-1">Bản đồ tương tác</div>
            <div className="text-sm text-blue-100">Zoom in/out dễ dàng</div>
          </div>

          <div className="text-center text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-white/30">
              <Navigation className="w-6 h-6" />
            </div>
            <div className="font-semibold mb-1">Chỉ đường GPS</div>
            <div className="text-sm text-blue-100">Liên kết Google Maps</div>
          </div>

          <div className="text-center text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-white/30">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="font-semibold mb-1">4 cơ sở</div>
            <div className="text-sm text-blue-100">Vĩnh Phúc & Phú Thọ</div>
          </div>

          <div className="text-center text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-white/30">
              <Clock className="w-6 h-6" />
            </div>
            <div className="font-semibold mb-1">Mở cửa</div>
            <div className="text-sm text-blue-100">7:30 - 17:30 hàng ngày</div>
          </div>
        </div>

        {/* Maps Container */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
          <GoogleMapsEmbed />
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8">
          <p className="text-blue-100 text-sm sm:text-base mb-4">
            💡 <strong>Tip:</strong> Click vào nút zoom để phóng to/thu nhỏ,
            hoặc click nút mở rộng để xem toàn màn hình
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:0862669588"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg"
            >
              <MapPin className="w-4 h-4" />
              Gọi để hỏi đường
            </a>

            <a
              href="https://maps.google.com/maps?q=VinFast+Việt+Hùng&t=&z=13&ie=UTF8&iwloc=&output=embed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-300 shadow-lg border border-blue-600"
            >
              <Navigation className="w-4 h-4" />
              Mở Google Maps
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};