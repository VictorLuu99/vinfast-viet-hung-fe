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
          className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
            activeCategory === category.id
              ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
              : 'bg-gray-200 text-gray-700 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white hover:shadow-md'
          }`}
        >
          {category.displayName} ({category.count})
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter