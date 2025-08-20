'use client';

import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 60;
      const targetPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-20 pb-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 min-h-screen flex items-center" id="home">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-100 to-transparent opacity-60"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-pink-100 to-transparent opacity-60"></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-32 w-2 h-2 bg-purple-400 rounded-sm transform rotate-45"></div>
        <div className="absolute top-40 right-16 w-1 h-6 bg-purple-500"></div>
        <div className="absolute top-48 right-24 w-4 h-1 bg-yellow-400"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-20 xl:gap-24 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-200">
              <Sparkles className="w-4 h-4" />
              Đại lý chính hãng VinFast
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              <span className="block">Xe Máy Điện</span>
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                VinFast
              </span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-blue-600 mb-4 sm:mb-6">
              Công nghệ hiện đại - Chất lượng Việt Nam
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-xl md:max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Khám phá bộ sưu tập xe máy điện VinFast với thiết kế tinh tế, 
              công nghệ thông minh và hiệu suất vượt trội. Trải nghiệm sự 
              tiện nghi và bảo vệ môi trường.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('products')}
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Xem sản phẩm
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button 
                onClick={() => scrollToSection('stores')}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
              >
                Tìm cửa hàng
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
              <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">Được tin tưởng bởi:</p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 opacity-60">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded"></div>
                  <span className="text-sm sm:text-base text-gray-600 font-medium">VinFast</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-600 rounded"></div>
                  <span className="text-sm sm:text-base text-gray-600 font-medium">Việt Nam</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-600 rounded"></div>
                  <span className="text-sm sm:text-base text-gray-600 font-medium">Chất lượng</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transform rotate-1 sm:rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/bikes/vinfast-hero-official.webp"
                alt="Xe máy điện VinFast"
                width={600}
                height={500}
                className="w-full h-auto rounded-xl sm:rounded-2xl shadow-lg"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
              
              {/* Floating elements - responsive */}
              <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-purple-400 rounded-lg transform rotate-45"></div>
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-yellow-400 rounded-full"></div>
              <div className="absolute top-1/2 -right-4 sm:-right-6 md:-right-8 w-2 h-6 sm:w-3 sm:h-8 md:w-4 md:h-12 bg-purple-500"></div>
            </div>

            {/* Scattered decorative elements - responsive */}
            <div className="absolute top-4 sm:top-8 right-4 sm:right-8 w-1 h-1 sm:w-2 sm:h-2 bg-purple-400"></div>
            <div className="absolute bottom-6 sm:bottom-12 left-4 sm:left-8 w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
            <div className="absolute top-8 sm:top-16 left-6 sm:left-12 w-1 h-3 sm:w-2 sm:h-6 bg-blue-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
