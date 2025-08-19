'use client'

interface CategoryFilterProps {
  categories: Array<{
    id: string
    displayName: string
    count: number
  }>
  activeCategory: string
  onCategoryChange: (categoryId: string) => void
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="category-tabs flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium text-sm md:text-base transition-all duration-300 ${
            activeCategory === category.id
              ? 'bg-primary-blue text-white shadow-lg transform scale-105'
              : 'bg-white text-text-dark border border-gray-300 hover:border-primary-blue hover:text-primary-blue hover:bg-primary-blue/5'
          }`}
        >
          {category.displayName} ({category.count})
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter