import { contactInfo } from '@/lib/data/stores';
import Image from 'next/image';
import Link from 'next/link';
import { FacebookIcon, ZaloIcon, YouTubeIcon } from '../Icons';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="relative bg-white rounded-lg p-4 mr-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Image
                  src="/images/logo/vinfast-logo.png"
                  alt="VinFast Việt Hùng Logo"
                  width={80}
                  height={80}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">VinFast Việt Hùng</h3>
                <p className="text-blue-300 text-sm font-medium">Đại lý chính hãng</p>
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
                  className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label="Facebook"
                >
                  <FacebookIcon size={20} />
                </a>
              )}
              {contactInfo.socialMedia?.zalo && (
                <a 
                  href={contactInfo.socialMedia.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label="Zalo"
                >
                  <ZaloIcon size={20} />
                </a>
              )}
              {contactInfo.socialMedia?.youtube && (
                <a 
                  href={contactInfo.socialMedia.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label="YouTube"
                >
                  <YouTubeIcon size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/#products" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link href="/#stores" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Cửa hàng
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/policy" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Chính sách
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Liên hệ
                </Link>
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
              <Link href="/policy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Chính sách bảo mật
              </Link>
              <Link href="/policy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Điều khoản sử dụng
              </Link>
              <Link href="/policy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Chính sách đổi trả
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
