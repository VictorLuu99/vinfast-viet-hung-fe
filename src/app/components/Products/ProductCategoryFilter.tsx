import { vietnameseProductCategories } from '@/lib/api';

interface ProductCategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const ProductCategoryFilter = ({
  selectedCategory,
  onCategoryChange,
}: ProductCategoryFilterProps) => {
  const categories = [
    { value: 'all', label: 'Tất cả sản phẩm' },
    ...vietnameseProductCategories,
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Danh mục sản phẩm
      </h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => onCategoryChange(category.value)}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
              selectedCategory === category.value
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
};