'use client'

import Image from 'next/image'
import Link from 'next/link'

const Hero: React.FC = () => {
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
    <section className="hero relative pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-br from-orange-400 via-red-400 to-pink-500" id="home">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">
          {/* Hero Content */}
          <div className="hero-content animate-slide-up text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 text-primary-blue">
              Xe Máy Điện VinFast
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-accent-pink">
              Công nghệ hiện đại - Chất lượng Việt Nam
            </h2>
            <p className="text-lg mb-8 max-w-2xl leading-relaxed text-gray-800">
              Khám phá bộ sưu tập xe máy điện VinFast với thiết kế tinh tế, 
              công nghệ thông minh và hiệu suất vượt trội.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#products"
                onClick={(e) => handleNavClick(e, '#products')}
                className="btn btn-primary btn-large inline-flex items-center justify-center"
              >
                Xem sản phẩm
              </Link>
              <Link
                href="#stores"
                onClick={(e) => handleNavClick(e, '#stores')}
                className="btn btn-outline btn-large inline-flex items-center justify-center border-white text-white hover:bg-white hover:text-primary-blue"
              >
                Tìm cửa hàng
              </Link>
            </div>
          </div>

          {/* Hero Promotional Image - VinFast EVO Style */}
          <div className="hero-image animate-fade-in relative">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              {/* VinFast Logo */}
              <div className="absolute top-4 left-4 text-white font-bold text-lg">
                🏆 VINFAST
              </div>
              
              {/* EVO Branding */}
              <div className="absolute top-4 right-4 text-white text-right">
                <div className="text-3xl font-bold">EVO</div>
                <div className="text-sm">VẬN HÀNH BỀN BỈ</div>
                <div className="text-sm">CHINH PHỤC</div>
                <div className="text-sm font-bold">MỌI HÀNH TRÌNH</div>
              </div>
              
              {/* Price Badge */}
              <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg p-3 text-white">
                <div className="text-sm">Chỉ từ mức giá</div>
                <div className="text-2xl font-bold text-yellow-300">21 triệu</div>
                <div className="text-xs">Giá đã bao gồm VAT, 1 pin vết 1 bộ sạc</div>
              </div>
              
              {/* Hero Bikes Image */}
              <div className="absolute right-0 bottom-0 w-3/4 h-3/4">
                <Image
                  src="/images/bikes/vinfast-hero-official.webp"
                  alt="VinFast EVO - Xe máy điện"
                  fill
                  className="object-contain object-right-bottom"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
              </div>
              
              {/* Contact Info */}
              <div className="absolute bottom-4 right-4 text-white text-right text-xs">
                <div>Hotline: 1900 23 23 89</div>
                <div>Website: vinfastauto.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-yellow-300/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/5 rounded-full blur-xl"></div>
      </div>
    </section>
  )
}

export default Hero