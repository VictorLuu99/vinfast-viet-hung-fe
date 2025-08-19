'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface HeaderProps {
  className?: string
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }

    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    closeMenu()
    
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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white'
      } ${className}`}
      id="header"
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <Image
                src="/images/logo/vinfast-logo.png"
                alt="VinFast Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-text-dark mb-0">
                VinFast Việt Hùng
              </h1>
              <p className="text-sm text-text-light mb-0 -mt-1">
                Đại lý chính hãng
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="text-text-dark hover:text-primary-blue font-medium transition-colors"
            >
              Trang chủ
            </Link>
            <Link 
              href="#products" 
              onClick={(e) => handleNavClick(e, '#products')}
              className="text-text-dark hover:text-primary-blue font-medium transition-colors"
            >
              Sản phẩm
            </Link>
            <Link 
              href="#stores" 
              onClick={(e) => handleNavClick(e, '#stores')}
              className="text-text-dark hover:text-primary-blue font-medium transition-colors"
            >
              Cửa hàng
            </Link>
            <Link 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-text-dark hover:text-primary-blue font-medium transition-colors"
            >
              Liên hệ
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a 
              href="tel:0862669588" 
              className="btn btn-primary"
            >
              Hotline: 086.266.9588
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 transition-all ${
              isMenuOpen ? 'space-y-0' : 'space-y-1'
            }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-text-dark transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-0.5' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-text-dark transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-text-dark transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-0.5' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="#home"
                onClick={(e) => handleNavClick(e, '#home')}
                className="text-text-dark hover:text-primary-blue font-medium transition-colors py-2"
              >
                Trang chủ
              </Link>
              <Link
                href="#products"
                onClick={(e) => handleNavClick(e, '#products')}
                className="text-text-dark hover:text-primary-blue font-medium transition-colors py-2"
              >
                Sản phẩm
              </Link>
              <Link
                href="#stores"
                onClick={(e) => handleNavClick(e, '#stores')}
                className="text-text-dark hover:text-primary-blue font-medium transition-colors py-2"
              >
                Cửa hàng
              </Link>
              <Link
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="text-text-dark hover:text-primary-blue font-medium transition-colors py-2"
              >
                Liên hệ
              </Link>
              <a
                href="tel:0862669588"
                className="btn btn-primary w-fit"
              >
                Hotline: 086.266.9588
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header