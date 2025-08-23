import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import { contactInfo } from '@/lib/data/stores';
import { Zap, MapPin, Shield, Battery } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1 sm:hover:-translate-y-2">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-40 sm:h-48 md:h-52 object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        />
        
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-semibold shadow-lg">
              {product.badge}
            </span>
          </div>
        )}
        
        {/* Discount Badge */}
        {/* {product.discount && (
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
            <span className="bg-red-500 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-semibold shadow-lg">
              -{product.discount}%
            </span>
          </div>
        )} */}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-3 sm:p-4 w-full">
            <Link 
              href={`/products/${product.id}`}
              className="w-full bg-white text-gray-900 font-semibold py-2 px-3 sm:px-4 text-sm sm:text-base rounded-lg hover:bg-gray-50 transition-colors duration-200 block text-center"
            >
              Xem chi tiết
            </Link>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-4 sm:p-6">
        {/* Title and Price */}
        <div className="mb-3 sm:mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
            {product.name}
          </h3>
          
          {/* <div className="flex items-center gap-2 mb-1">
            {product.originalPrice && product.originalPriceFormatted && (
              <div className="text-sm sm:text-base text-gray-400 line-through">
                {product.originalPriceFormatted}
              </div>
            )}
            {product.discount && (
              <div className="text-xs sm:text-sm text-red-500 font-semibold">
                (-{product.discount}%)
              </div>
            )}
          </div> */}
          
          <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            {product.priceFormatted}
          </div>
        </div>
        
        {/* Specs */}
        <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-2">
          {product.specs}
        </p>
        
        {/* Features */}
        <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
          {product.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center text-xs sm:text-sm text-gray-600">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
              <span className="line-clamp-1">{feature}</span>
            </div>
          ))}
        </div>
        
        {/* Technical Specs Grid */}
        <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" />
            <span className="font-medium truncate">{product.range}km</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
            <span className="font-medium truncate">{product.maxSpeed}km/h</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500">
            <Battery className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500 flex-shrink-0" />
            <span className="font-medium truncate">{product.battery}</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 flex-shrink-0" />
            <span className="font-medium truncate">{product.warranty}</span>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="space-y-3">
          <Link 
            href={`/products/${product.id}`}
            className="w-full bg-white text-gray-900 font-semibold py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base rounded-lg sm:rounded-xl border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 text-center block"
          >
            Xem chi tiết
          </Link>
          
          {contactInfo.socialMedia?.facebook ? (
            <a 
              href={contactInfo.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base rounded-lg sm:rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl text-center block"
            >
              Liên hệ tư vấn
            </a>
          ) : (
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base rounded-lg sm:rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              Liên hệ tư vấn
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
