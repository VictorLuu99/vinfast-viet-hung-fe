'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { FacebookIcon, ZaloIcon, YouTubeIcon } from '../Icons';
import { contactInfo } from '@/lib/data/stores';

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

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-white'
    }`}>
      <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 lg:h-22">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <div className="relative">
                <Image
                  src="/images/logo/vinfast-logo.png"
                  alt="VinFast Việt Hùng Logo"
                  width={64}
                  height={64}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mt-1 whitespace-nowrap">
                  VinFast Việt Hùng
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 -mt-1">
                  Đại lý chính hãng
                </p>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4 xl:space-x-5">
            <Link 
              href="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group text-sm lg:text-base"
            >
              Trang chủ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <Link 
              href="/#products"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group text-sm lg:text-base"
            >
              Sản phẩm
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <Link
              href="/#stores"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group text-sm lg:text-base"
            >
              Cửa hàng
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link 
              href="/about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group text-sm lg:text-base"
            >
              Giới thiệu
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <Link 
              href="/policy"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group text-sm lg:text-base"
            >
              Chính sách
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="/news"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group text-sm lg:text-base"
            >
              Tin tức
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="/recruitment"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group text-sm lg:text-base"
            >
              Tuyển dụng
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group text-sm lg:text-base"
            >
              Liên hệ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
          
          {/* CTA Button and Social Media */}
          <div className="hidden md:flex items-center gap-3">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-2">
              {contactInfo.socialMedia?.facebook && (
                <a 
                  href={contactInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label="Facebook"
                >
                  <FacebookIcon size={16} />
                </a>
              )}
              {contactInfo.socialMedia?.zalo && (
                <a 
                  href={contactInfo.socialMedia.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-8 h-8 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label="Zalo"
                >
                  <ZaloIcon size={16} />
                </a>
              )}
              {contactInfo.socialMedia?.youtube && (
                <a 
                  href={contactInfo.socialMedia.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-8 h-8 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label="YouTube"
                >
                  <YouTubeIcon size={16} />
                </a>
              )}
            </div>
            
            <a 
              href="tel:0862669588"
              className="inline-flex items-center gap-2 px-3 md:px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
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
              <Link 
                href="/"
                onClick={closeMobileMenu}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium"
              >
                Trang chủ
              </Link>
              
              <Link 
                href="/#products"
                onClick={closeMobileMenu}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium"
              >
                Sản phẩm
              </Link>
              
              <Link
                href="/#stores"
                onClick={closeMobileMenu}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium"
              >
                Cửa hàng
              </Link>

              <Link 
                href="/about"
                onClick={closeMobileMenu}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium"
              >
                Giới thiệu
              </Link>
              
              <Link 
                href="/policy"
                onClick={closeMobileMenu}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium"
              >
                Chính sách
              </Link>

              <Link
                href="/news"
                onClick={closeMobileMenu}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium"
              >
                Tin tức
              </Link>

              <Link
                href="/recruitment"
                onClick={closeMobileMenu}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium"
              >
                Tuyển dụng
              </Link>

              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium"
              >
                Liên hệ
              </Link>
              
              <div className="pt-3 sm:pt-4 border-t border-gray-200">
                <a 
                  href="tel:0862669588"
                  className="inline-flex items-center gap-2 w-full justify-center px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg sm:rounded-xl shadow-lg"
                >
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  Hotline: 086.266.9588
                </a>
                
                {/* Mobile Social Media Icons */}
                <div className="flex justify-center space-x-4 mt-4">
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
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
