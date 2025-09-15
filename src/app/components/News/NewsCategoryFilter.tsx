import { vietnameseNewsCategories } from '@/lib/api';

interface NewsCategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  className?: string;
}

export const NewsCategoryFilter = ({
  selectedCategory,
  onCategoryChange,
  className = ''
}: NewsCategoryFilterProps) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900">Danh mục tin tức</h3>
      <div className="space-y-2">
        {/* All Categories */}
        <button
          onClick={() => onCategoryChange('all')}
          className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
            selectedCategory === 'all'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
          }`}
        >
          <div className="flex items-center justify-between">
            <span>Tất cả tin tức</span>
            {selectedCategory === 'all' && (
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">✓</span>
            )}
          </div>
        </button>

        {/* Category Buttons */}
        {vietnameseNewsCategories.map((category) => (
          <button
            key={category.value}
            onClick={() => onCategoryChange(category.value)}
            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
              selectedCategory === category.value
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span>{category.label}</span>
              {selectedCategory === category.value && (
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">✓</span>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};