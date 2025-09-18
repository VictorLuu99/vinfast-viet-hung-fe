"use client";

import { Phone, AlertTriangle, Clock, MapPin } from 'lucide-react';
import { contactInfo } from '@/lib/data/stores';

export const EmergencyContactSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-red-500 via-red-600 to-red-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 border border-white/30">
            <AlertTriangle className="w-4 h-4" />
            Hỗ trợ khẩn cấp 24/7
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            🚨 Cần hỗ trợ gấp?
          </h2>

          <p className="text-lg sm:text-xl text-red-100 mb-6 max-w-2xl mx-auto leading-relaxed">
            Đội ngũ kỹ thuật VinFast Việt Hùng sẵn sàng hỗ trợ bạn 24/7
            khi gặp sự cố khẩn cấp với xe điện VinFast
          </p>
        </div>

        {/* Emergency Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
          {/* Hotline Emergency */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Hotline Khẩn Cấp
              </h3>

              <p className="text-gray-600 mb-6">
                Gọi ngay khi cần hỗ trợ kỹ thuật khẩn cấp
              </p>

              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white text-lg sm:text-xl font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg w-full"
              >
                <Phone className="w-6 h-6" />
                {contactInfo.phone}
              </a>

              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                Hỗ trợ 24/7
              </div>
            </div>
          </div>

          {/* Store Emergency */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="text-center mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Đến Cửa Hàng Gần Nhất
              </h3>

              <p className="text-gray-600 mb-4">
                4 cơ sở tại Vĩnh Phúc và Phú Thọ
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-semibold text-gray-900">CS1 - Yên Lạc</div>
                  <div className="text-sm text-gray-600">086.266.9588</div>
                </div>
                <a
                  href="tel:0862669588"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                >
                  Gọi
                </a>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-semibold text-gray-900">CS2 - Phúc Yên</div>
                  <div className="text-sm text-gray-600">0961.456.515</div>
                </div>
                <a
                  href="tel:0961456515"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                >
                  Gọi
                </a>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-semibold text-gray-900">CS3 - Việt Trì</div>
                  <div className="text-sm text-gray-600">0829.912.555</div>
                </div>
                <a
                  href="tel:0829912555"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                >
                  Gọi
                </a>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-semibold text-gray-900">CS4 - Việt Trì</div>
                  <div className="text-sm text-gray-600">036.3822.638</div>
                </div>
                <a
                  href="tel:0363822638"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                >
                  Gọi
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Services */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
            Các dịch vụ hỗ trợ khẩn cấp
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center text-white">
              <div className="text-3xl mb-2">🔧</div>
              <div className="font-semibold">Sửa chữa tại chỗ</div>
              <div className="text-sm text-red-100">Kỹ thuật viên đến ngay</div>
            </div>

            <div className="text-center text-white">
              <div className="text-3xl mb-2">🚗</div>
              <div className="font-semibold">Cứu hộ xe</div>
              <div className="text-sm text-red-100">Kéo xe về cửa hàng</div>
            </div>

            <div className="text-center text-white">
              <div className="text-3xl mb-2">🔋</div>
              <div className="font-semibold">Sạc pin khẩn cấp</div>
              <div className="text-sm text-red-100">Hỗ trợ sạc pin tại chỗ</div>
            </div>

            <div className="text-center text-white">
              <div className="text-3xl mb-2">📞</div>
              <div className="font-semibold">Tư vấn từ xa</div>
              <div className="text-sm text-red-100">Hướng dẫn qua điện thoại</div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-8">
          <p className="text-red-100 text-sm sm:text-base">
            💡 <strong>Lưu ý:</strong> Với các trường hợp khẩn cấp nghiêm trọng,
            vui lòng gọi ngay hotline để được hỗ trợ nhanh nhất
          </p>
        </div>
      </div>
    </section>
  );
};