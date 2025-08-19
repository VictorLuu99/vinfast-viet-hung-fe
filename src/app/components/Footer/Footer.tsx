'use client'

import Image from 'next/image'
import Link from 'next/link'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    
    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      const headerHeight = 60
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="footer bg-text-dark text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-12 h-12">
                  <Image
                    src="/images/logo/vinfast-logo.png"
                    alt="VinFast Việt Hùng"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">VinFast Việt Hùng</h3>
                  <p className="text-gray-400 text-sm">Đại lý chính hãng</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 max-w-lg">
                Đại lý xe máy điện VinFast chính hãng tại Vĩnh Phúc và Phú Thọ. 
                Cam kết chất lượng và dịch vụ tốt nhất cho khách hàng với đội ngũ 
                chuyên nghiệp và kinh nghiệm.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:0862669588" className="text-white hover:text-accent-pink transition-colors">
                    086.266.9588 (Hotline chính)
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@vinfastviethung.vn" className="text-white hover:text-accent-pink transition-colors">
                    info@vinfastviethung.vn
                  </a>
                </div>
              </div>
            </div>

            {/* Products Column */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Sản phẩm</h4>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="#products" 
                    onClick={(e) => handleNavClick(e, '#products')}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Cao cấp: 33-40 triệu (3 mẫu)
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#products" 
                    onClick={(e) => handleNavClick(e, '#products')}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Trung cấp: 26-29 triệu (4 mẫu)
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#products" 
                    onClick={(e) => handleNavClick(e, '#products')}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Phổ thông: 12-22 triệu (6 mẫu)
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#products" 
                    onClick={(e) => handleNavClick(e, '#products')}
                    className="text-accent-pink hover:text-white transition-colors font-semibold"
                  >
                    <strong>Tổng: 13 mẫu xe đa dạng</strong>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services & Contact Column */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Dịch vụ & Liên hệ</h4>
              <ul className="space-y-3">
                <li>
                  <span className="text-gray-300">Bảo hành chính hãng 24 tháng</span>
                </li>
                <li>
                  <span className="text-gray-300">Sửa chữa & bảo trì</span>
                </li>
                <li>
                  <span className="text-gray-300">Phụ tung chính hãng</span>
                </li>
                <li>
                  <span className="text-gray-300">Hỗ trợ kỹ thuật 24/7</span>
                </li>
                <li className="pt-2 border-t border-gray-600">
                  <Link 
                    href="#stores" 
                    onClick={(e) => handleNavClick(e, '#stores')}
                    className="text-primary-blue hover:text-accent-pink transition-colors font-medium"
                  >
                    4 cửa hàng tại Vĩnh Phúc & Phú Thọ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>
                © {currentYear} VinFast Việt Hùng. Đại lý chính hãng xe máy điện VinFast.
              </p>
              <p className="mt-1">
                Tất cả quyền được bảo lưu. | Thiết kế tối ưu cho trải nghiệm tốt nhất.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link 
                href="#home" 
                onClick={(e) => handleNavClick(e, '#home')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Trang chủ
              </Link>
              <Link 
                href="#products" 
                onClick={(e) => handleNavClick(e, '#products')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Sản phẩm
              </Link>
              <Link 
                href="#stores" 
                onClick={(e) => handleNavClick(e, '#stores')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cửa hàng
              </Link>
              <Link 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Liên hệ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer