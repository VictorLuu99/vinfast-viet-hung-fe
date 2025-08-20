import { ProductCategory } from '@/types/product';

interface CategoryFilterProps {
  categories: ProductCategory[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`
            group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:-translate-y-1
            ${activeCategory === category.id
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 scale-105'
              : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300 hover:shadow-md hover:bg-blue-50'
            }
          `}
        >
          <span className="relative z-10">
            {category.displayName}
          </span>
          <span className={`
            ml-2 px-2 py-1 rounded-full text-xs font-medium
            ${activeCategory === category.id
              ? 'bg-white/20 text-white'
              : 'bg-gray-100 text-gray-600'
            }
          `}>
            {category.count}
          </span>
          
          {/* Hover effect */}
          {activeCategory !== category.id && (
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          )}
        </button>
      ))}
    </div>
  );
};
