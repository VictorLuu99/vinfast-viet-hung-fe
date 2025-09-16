'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BannerImage {
  src: string;
  alt: string;
  title?: string;
}

const bannerImages: BannerImage[] = [
  {
    src: '/images/home/home1.png',
    alt: 'VinFast Feliz - Ra mắt phiên bản 02 pin với giá 25.900.000 VND, quãng đường lên đến 262km/lần sạc',
    // title: 'VinFast Feliz - Xe máy điện thông minh'
  },
  {
    src: '/images/home/hom2.jpeg',
    alt: 'VinFast Feliz - Sản phẩm xe máy điện cao cấp với thiết kế hiện đại và công nghệ tiên tiến',
    // title: 'VinFast Feliz - Công nghệ vượt trội'
  },
];

export const EventBannerCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const totalSlides = bannerImages.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <section
      className="relative w-full mt-16 sm:mt-18 md:mt-20 lg:mt-22 h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] overflow-hidden bg-gray-100"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Sự kiện và khuyến mại VinFast"
    >
      {/* Main carousel container */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {bannerImages.map((banner, index) => (
          <div
            key={index}
            className="relative w-full h-full flex-shrink-0"
          >
            <Image
              src={banner.src}
              alt={banner.alt}
              fill
              priority={index === 0}
              className="object-cover object-center"
              sizes="100vw"
            />

            {/* Optional overlay for better text readability */}
            <div className="absolute inset-0 bg-black/10"></div>

            {/* Optional title overlay */}
            {banner.title && (
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-lg">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 line-clamp-1">
                    {banner.title}
                  </h3>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Ảnh trước"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Ảnh tiếp theo"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/20 ${
              index === currentSlide
                ? 'bg-white scale-125 shadow-lg'
                : 'bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Đi đến ảnh ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress indicator (optional) */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        />
      </div>
    </section>
  );
};