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
    <section className="hero pt-20 pb-16 md:pt-24 md:pb-20" id="home">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Hero Content */}
          <div className="hero-content animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark mb-4 lg:mb-6">
              Xe Máy Điện VinFast
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary-blue mb-6">
              Công nghệ hiện đại - Chất lượng Việt Nam
            </h2>
            <p className="text-lg text-text-light mb-8 max-w-2xl leading-relaxed">
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
                className="btn btn-outline btn-large inline-flex items-center justify-center"
              >
                Tìm cửa hàng
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hero-image animate-fade-in">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
              <Image
                src="/images/bikes/vinfast-hero-official.webp"
                alt="Xe máy điện VinFast"
                fill
                className="object-contain object-center"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-bg-light/30 via-transparent to-primary-blue/5"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-accent-pink/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary-blue/10 rounded-full blur-2xl"></div>
      </div>
    </section>
  )
}

export default Hero