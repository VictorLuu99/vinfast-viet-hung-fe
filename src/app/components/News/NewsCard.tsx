import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';
import { NewsArticle, formatDateShort, vietnameseNewsCategories } from '@/lib/api';
import { CategoryBadge } from '../shared/CategoryBadge';

interface NewsCardProps {
  article: NewsArticle;
}

export const NewsCard = ({ article }: NewsCardProps) => {
  const getCategoryLabel = (slug: string) => {
    return vietnameseNewsCategories.find(cat => cat.value === slug)?.label || slug;
  };

  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Featured Image */}
      <div className="relative aspect-video bg-gray-200">
        {article.featured_image ? (
          <Image
            src={article.featured_image}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-100 to-green-100">
            <div className="text-center text-gray-500">
              <div className="text-4xl mb-2">📰</div>
              <p className="text-sm">VinFast Việt Hùng</p>
            </div>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <CategoryBadge category={getCategoryLabel(article.category)} size="sm" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Date */}
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar className="h-4 w-4 mr-2" />
          {formatDateShort(article.created_at)}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
          <Link href={`/news/${article.id}`}>
            {article.title}
          </Link>
        </h3>

        {/* Excerpt */}
        {article.excerpt && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {article.excerpt}
          </p>
        )}

        {/* Read More Link */}
        <Link
          href={`/news/${article.id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
        >
          Đọc thêm
          <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
};