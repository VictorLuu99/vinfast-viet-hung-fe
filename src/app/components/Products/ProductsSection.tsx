'use client'

import { useState, useMemo } from 'react'
import { categories, getProductsByCategory } from '@/lib/data/products'
import CategoryFilter from './CategoryFilter'
import ProductCard from './ProductCard'

const ProductsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProducts = useMemo(() => {
    return getProductsByCategory(activeCategory)
  }, [activeCategory])

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
  }

  return (
    <section className="products py-16 md:py-20 bg-bg-light" id="products">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Dòng xe máy điện VinFast chính hãng
          </h2>
          <p className="text-lg text-text-light mb-8">
            13 mẫu xe đầy đủ 3 phân khúc - Cao cấp (3) | Trung cấp (4) | Phổ thông (6)
          </p>
          
          {/* Category Filter */}
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
          
          {/* Price Range */}
          <div className="flex items-center justify-center space-x-4 text-lg font-bold">
            <span className="text-accent-pink">Từ 12.000.000đ</span>
            <span className="text-text-light">-</span>
            <span className="text-primary-blue">40.000.000đ</span>
          </div>
        </div>

        {/* Products Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
          id="products-grid"
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{
                animationDelay: `${Math.random() * 0.3}s`
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* No Products Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-text-light">
              Không có sản phẩm nào trong danh mục này.
            </p>
          </div>
        )}

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-text-light mb-4">
            Tất cả sản phẩm đều có bảo hành chính hãng và hỗ trợ kỹ thuật 24/7
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white px-4 py-2 rounded-lg shadow">
              <span className="font-semibold text-primary-blue">Bảo hành:</span>
              <span className="text-text-dark ml-1">24 tháng</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow">
              <span className="font-semibold text-primary-blue">Hỗ trợ:</span>
              <span className="text-text-dark ml-1">24/7</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow">
              <span className="font-semibold text-primary-blue">Giao hàng:</span>
              <span className="text-text-dark ml-1">Miễn phí</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection