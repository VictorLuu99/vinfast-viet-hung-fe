import { contactInfo } from '@/lib/data/stores';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo/vinfast-logo.png"
                alt="VinFast Việt Hùng Logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <div>
                <h3 className="text-xl font-bold">VinFast Việt Hùng</h3>
                <p className="text-gray-400 text-sm">Đại lý chính hãng</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Hệ thống đại lý xe máy điện VinFast chính hãng tại Vĩnh Phúc và Phú Thọ. 
              Chúng tôi cam kết mang đến những sản phẩm chất lượng cao với dịch vụ tốt nhất.
            </p>
            <div className="flex space-x-4">
              {contactInfo.socialMedia?.facebook && (
                <a 
                  href={contactInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  📘 Facebook
                </a>
              )}
              {contactInfo.socialMedia?.zalo && (
                <a 
                  href={contactInfo.socialMedia.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  💬 Zalo
                </a>
              )}
              {contactInfo.socialMedia?.youtube && (
                <a 
                  href={contactInfo.socialMedia.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  📺 YouTube
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Sản phẩm
                </a>
              </li>
              <li>
                <a href="#stores" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Cửa hàng
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Thông tin liên hệ</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {contactInfo.phone}
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-2">✉️</span>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {contactInfo.email}
                </a>
              </p>
              <p className="flex items-start">
                <span className="mr-2 mt-1">📍</span>
                <span className="text-sm leading-relaxed">
                  {contactInfo.address}
                </span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">🕒</span>
                <span className="text-sm">{contactInfo.workingHours}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 VinFast Việt Hùng. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Chính sách bảo mật
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Điều khoản sử dụng
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
