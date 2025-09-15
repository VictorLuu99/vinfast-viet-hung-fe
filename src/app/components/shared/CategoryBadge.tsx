import { Tag } from 'lucide-react';

interface CategoryBadgeProps {
  category: string;
  variant?: 'default' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    'tin-cong-ty': 'bg-blue-100 text-blue-800',
    'san-pham-dich-vu': 'bg-green-100 text-green-800',
    'su-kien': 'bg-purple-100 text-purple-800',
    'khuyen-mai': 'bg-red-100 text-red-800',
    'tin-tuc-nganh': 'bg-gray-100 text-gray-800',
    'ban-hang': 'bg-blue-100 text-blue-800',
    'ky-thuat': 'bg-green-100 text-green-800',
    'dich-vu-khach-hang': 'bg-purple-100 text-purple-800',
    'van-hanh': 'bg-orange-100 text-orange-800',
    'quan-ly': 'bg-red-100 text-red-800',
  };

  return colors[category] || 'bg-gray-100 text-gray-800';
};

export const CategoryBadge = ({
  category,
  variant = 'default',
  size = 'md',
  className = ''
}: CategoryBadgeProps) => {
  const colorClass = variant === 'outline'
    ? 'border border-gray-300 text-gray-700 bg-white'
    : getCategoryColor(category);

  const sizeClass = size === 'sm'
    ? 'px-2 py-1 text-xs'
    : 'px-3 py-1 text-sm';

  return (
    <span className={`inline-flex items-center rounded-full font-medium ${colorClass} ${sizeClass} ${className}`}>
      <Tag className="h-3 w-3 mr-1" />
      {category}
    </span>
  );
};