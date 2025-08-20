'use client';

import { useState } from 'react';
import { products, productCategories } from '@/lib/data/products';
import { ProductCard } from './ProductCard';
import { CategoryFilter } from './CategoryFilter';
import { Sparkles, Zap, Star } from 'lucide-react';

export const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-200">
            <Sparkles className="w-4 h-4" />
            Bộ sưu tập xe máy điện
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Dòng xe máy điện VinFast
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              chính hãng
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            13 mẫu xe đầy đủ 3 phân khúc với công nghệ tiên tiến, thiết kế hiện đại và 
            hiệu suất vượt trội. Trải nghiệm sự tiện nghi và bảo vệ môi trường.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">3</div>
              <div className="text-sm text-gray-600">Cao cấp</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">4</div>
              <div className="text-sm text-gray-600">Trung cấp</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">6</div>
              <div className="text-sm text-gray-600">Phổ thông</div>
            </div>
          </div>
          
          {/* Category Filter */}
          <CategoryFilter 
            categories={productCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Bạn cần tư vấn về sản phẩm?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Đội ngũ chuyên viên của chúng tôi luôn sẵn sàng hỗ trợ và tư vấn 
              để bạn chọn được sản phẩm phù hợp nhất.
            </p>
            <a 
              href="tel:0862669588"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              <Zap className="w-5 h-5" />
              Gọi tư vấn ngay
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
