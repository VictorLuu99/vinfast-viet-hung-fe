'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 60;
      const targetPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      closeMobileMenu();
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-white'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative">
              <Image
                src="/images/logo/vinfast-logo.png"
                alt="VinFast Việt Hùng Logo"
                width={48}
                height={48}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                VinFast Việt Hùng
              </h1>
              <p className="text-xs sm:text-sm text-gray-600">
                Đại lý chính hãng
              </p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
            >
              Trang chủ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            
            <button 
              onClick={() => scrollToSection('products')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
            >
              Sản phẩm
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            
            <button 
              onClick={() => scrollToSection('stores')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
            >
              Cửa hàng
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
            >
              Liên hệ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:0862669588"
              className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <Phone className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden lg:inline">Hotline:</span> 086.266.9588
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-3 sm:space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium"
              >
                Trang chủ
              </button>
              
              <button 
                onClick={() => scrollToSection('products')}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium"
              >
                Sản phẩm
              </button>
              
              <button 
                onClick={() => scrollToSection('stores')}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium"
              >
                Cửa hàng
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium"
              >
                Liên hệ
              </button>
              
              <div className="pt-3 sm:pt-4 border-t border-gray-200">
                <a 
                  href="tel:0862669588"
                  className="inline-flex items-center gap-2 w-full justify-center px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg sm:rounded-xl shadow-lg"
                >
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  Hotline: 086.266.9588
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
