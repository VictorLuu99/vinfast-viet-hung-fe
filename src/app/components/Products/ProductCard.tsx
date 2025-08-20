import Image from 'next/image';
import { Product } from '@/types/product';
import { Zap, MapPin, Shield, Battery } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
              {product.badge}
            </span>
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <button className="w-full bg-white text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6">
        {/* Title and Price */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
            {product.name}
          </h3>
          
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            {product.priceFormatted}
          </div>
        </div>
        
        {/* Specs */}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {product.specs}
        </p>
        
        {/* Features */}
        <div className="space-y-2 mb-6">
          {product.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-600">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
              {feature}
            </div>
          ))}
        </div>
        
        {/* Technical Specs Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Zap className="w-4 h-4 text-blue-500" />
            <span className="font-medium">{product.range}km</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <MapPin className="w-4 h-4 text-green-500" />
            <span className="font-medium">{product.maxSpeed}km/h</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Battery className="w-4 h-4 text-purple-500" />
            <span className="font-medium">{product.battery}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Shield className="w-4 h-4 text-orange-500" />
            <span className="font-medium">{product.warranty}</span>
          </div>
        </div>
        
        {/* CTA Button */}
        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
          Liên hệ tư vấn
        </button>
      </div>
    </div>
  );
};
