import { contactInfo } from '@/lib/data/stores';
import {
  FacebookIcon,
  ZaloIcon,
  YouTubeIcon,
  PhoneIcon,
  EmailIcon,
  LocationIcon,
  ClockIcon
} from '../Icons';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Liên hệ với chúng tôi
          </h2>
          <p className="text-gray-600">
            Luôn sẵn sàng hỗ trợ và tư vấn mọi thắc mắc của bạn
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone */}
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-3">
                <PhoneIcon size={20} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Hotline</h3>
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-primary-blue hover:text-primary-blue/80 font-medium"
              >
                {contactInfo.phone}
              </a>
              <p className="text-xs text-gray-500 mt-1">24/7 hỗ trợ</p>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-3">
                <EmailIcon size={20} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-primary-blue hover:text-primary-blue/80 font-medium text-sm"
              >
                {contactInfo.email}
              </a>
              <p className="text-xs text-gray-500 mt-1">Phản hồi trong 24h</p>
            </div>

            {/* Address */}
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-3">
                <LocationIcon size={20} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Địa chỉ</h3>
              <p className="text-gray-700 text-xs leading-relaxed">
                {contactInfo.address}
              </p>
            </div>

            {/* Working Hours */}
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-3">
                <ClockIcon size={20} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Giờ làm việc</h3>
              <p className="text-gray-700 text-xs leading-relaxed">
                {contactInfo.workingHours}
              </p>
            </div>
          </div>
        </div>

        {/* Combined Social Media and CTA */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Media */}
            {contactInfo.socialMedia && (
              <div className="flex items-center gap-4">
                <span className="font-medium text-gray-700">Kết nối:</span>
                <div className="flex gap-3">
                  {contactInfo.socialMedia.facebook && (
                    <a
                      href={contactInfo.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                      aria-label="Facebook"
                    >
                      <FacebookIcon size={20} />
                    </a>
                  )}
                  {contactInfo.socialMedia.facebook2 && (
                    <a
                      href={contactInfo.socialMedia.facebook2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                      aria-label="Facebook"
                    >
                      <FacebookIcon size={20} />
                    </a>
                  )}
                  {contactInfo.socialMedia.zalo && (
                    <a
                      href={contactInfo.socialMedia.zalo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                      aria-label="Zalo"
                    >
                      <ZaloIcon size={20} />
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${contactInfo.phone}`}
                className="px-6 py-2 bg-primary-blue text-white rounded-lg hover:bg-primary-blue/90 transition-colors font-medium text-sm"
              >
                Gọi hotline
              </a>
              {contactInfo.socialMedia?.facebook && (
                <a
                  href={contactInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                >
                  Tư vấn Facebook
                </a>
              )}
              <a
                href={`mailto:${contactInfo.email}`}
                className="px-6 py-2 border border-primary-blue text-primary-blue rounded-lg hover:bg-primary-blue hover:text-white transition-colors font-medium text-sm"
              >
                Gửi email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
