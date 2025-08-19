'use client'

import Image from 'next/image'
import { Product } from '@/types/product'
import { formatPrice } from '@/lib/data/products'

interface ProductCardProps {
  product: Product
  className?: string
}

const getBadgeStyles = (badge: string): string => {
  if (badge.includes('Cao cấp')) {
    return 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
  } else if (badge.includes('Trung cấp')) {
    return 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
  } else if (badge.includes('Thông minh')) {
    return 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
  } else if (badge.includes('Bán chạy')) {
    return 'bg-gradient-to-r from-orange-600 to-red-600 text-white'
  } else if (badge.includes('Kinh tế')) {
    return 'bg-gradient-to-r from-teal-600 to-blue-600 text-white'
  } else if (badge.includes('Học sinh')) {
    return 'bg-gradient-to-r from-pink-600 to-purple-600 text-white'
  }
  return 'bg-gradient-to-r from-gray-600 to-gray-700 text-white'
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  return (
    <div 
      className={`product-card bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group ${className}`}
      data-category={product.category}
    >
      {/* Badge */}
      <div className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg ${getBadgeStyles(product.badge)}`}>
        {product.badge}
      </div>

      {/* Product Image */}
      <div className="relative h-48 md:h-56 overflow-hidden rounded-t-lg">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Overlay Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <button className="btn btn-white px-6 py-2 text-sm font-medium">
            Xem chi tiết
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-text-dark mb-3 group-hover:text-primary-blue transition-colors">
          {product.name}
        </h3>
        
        <p className="text-text-light text-sm mb-4 line-clamp-2">
          {product.specs}
        </p>
        
        <div className="text-2xl font-bold text-primary-blue mb-4">
          {formatPrice(product.price)}
        </div>
        
        {/* Features */}
        <div className="space-y-2">
          {product.features.map((feature, index) => (
            <span
              key={index}
              className="inline-block bg-bg-light text-text-dark text-xs px-3 py-1 rounded-full mr-2 mb-2"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductCard