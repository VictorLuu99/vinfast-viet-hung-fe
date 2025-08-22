import { contactInfo } from '@/lib/data/stores';
import { FacebookIcon, ZaloIcon, YouTubeIcon } from '../Icons';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Liên hệ với chúng tôi
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Luôn sẵn sàng hỗ trợ và tư vấn mọi thắc mắc của bạn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Phone */}
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">📞</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Hotline</h3>
            <a 
              href={`tel:${contactInfo.phone}`}
              className="text-primary-blue hover:text-primary-blue/80 font-medium text-lg"
            >
              {contactInfo.phone}
            </a>
            <p className="text-sm text-gray-600 mt-1">24/7 hỗ trợ</p>
          </div>

          {/* Email */}
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">✉️</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
            <a 
              href={`mailto:${contactInfo.email}`}
              className="text-primary-blue hover:text-primary-blue/80 font-medium"
            >
              {contactInfo.email}
            </a>
            <p className="text-sm text-gray-600 mt-1">Phản hồi trong 24h</p>
          </div>

          {/* Address */}
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">📍</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Địa chỉ</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {contactInfo.address}
            </p>
          </div>

          {/* Working Hours */}
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">🕒</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Giờ làm việc</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {contactInfo.workingHours}
            </p>
          </div>
        </div>

        {/* Social Media */}
        {contactInfo.socialMedia && (
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Kết nối với chúng tôi
            </h3>
            <div className="flex justify-center gap-6">
              {contactInfo.socialMedia.facebook && (
                <a 
                  href={contactInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-200 transform hover:scale-110 hover:shadow-lg"
                  aria-label="Facebook"
                >
                  <FacebookIcon size={24} />
                </a>
              )}
              
              {contactInfo.socialMedia.zalo && (
                <a 
                  href={contactInfo.socialMedia.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors duration-200 transform hover:scale-110 hover:shadow-lg"
                  aria-label="Zalo"
                >
                  <ZaloIcon size={24} />
                </a>
              )}
              
              {contactInfo.socialMedia.youtube && (
                <a 
                  href={contactInfo.socialMedia.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors duration-200 transform hover:scale-110 hover:shadow-lg"
                  aria-label="YouTube"
                >
                  <YouTubeIcon size={24} />
                </a>
              )}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Bạn cần tư vấn?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Hãy để lại thông tin, chúng tôi sẽ liên hệ lại ngay!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${contactInfo.phone}`}
              className="btn btn-primary btn-large"
            >
              Gọi hotline ngay
            </a>
            {contactInfo.socialMedia?.facebook && (
              <a 
                href={contactInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-large bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:border-blue-700"
              >
                Tư vấn qua Facebook
              </a>
            )}
            <a 
              href={`mailto:${contactInfo.email}`}
              className="btn btn-outline btn-large"
            >
              Gửi email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
