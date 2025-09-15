import { vietnameseJobCategories } from '@/lib/api';

interface JobCategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  className?: string;
}

export const JobCategoryFilter = ({
  selectedCategory,
  onCategoryChange,
  className = ''
}: JobCategoryFilterProps) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900">Bộ phận tuyển dụng</h3>
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
            <span>Tất cả vị trí</span>
            {selectedCategory === 'all' && (
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">✓</span>
            )}
          </div>
        </button>

        {/* Category Buttons */}
        {vietnameseJobCategories.map((category) => (
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