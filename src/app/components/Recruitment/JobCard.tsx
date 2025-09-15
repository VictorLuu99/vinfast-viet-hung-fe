import Link from 'next/link';
import { MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import { JobPosting, formatDateShort, vietnameseJobCategories } from '@/lib/api';
import { CategoryBadge } from '../shared/CategoryBadge';

interface JobCardProps {
  job: JobPosting;
}

export const JobCard = ({ job }: JobCardProps) => {
  const getCategoryLabel = (slug: string) => {
    return vietnameseJobCategories.find(cat => cat.value === slug)?.label || slug;
  };

  const getJobTypeLabel = (type: string) => {
    const types: Record<string, string> = {
      'full-time': 'Toàn thời gian',
      'part-time': 'Bán thời gian',
      'contract': 'Hợp đồng',
      'freelance': 'Tự do',
      'internship': 'Thực tập'
    };
    return types[type] || type;
  };

  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        {/* Category Badge */}
        <div className="mb-4">
          <CategoryBadge category={getCategoryLabel(job.department)} size="sm" />
        </div>

        {/* Job Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
          <Link href={`/recruitment/${job.id}`}>
            {job.title}
          </Link>
        </h3>

        {/* Job Details */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            {job.location}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {getJobTypeLabel(job.job_type)}
          </div>
          {job.experience_level && (
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              {job.experience_level}
            </div>
          )}
        </div>

        {/* Salary Range */}
        {job.salary_range && (
          <div className="mb-4">
            <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              💰 {job.salary_range}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Job Description */}
        {job.description && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {job.description.replace(/<[^>]*>/g, '')} {/* Strip HTML tags */}
          </p>
        )}

        {/* Requirements Preview */}
        {job.requirements && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Yêu cầu:</h4>
            <p className="text-sm text-gray-600 line-clamp-2">
              {job.requirements.replace(/<[^>]*>/g, '')} {/* Strip HTML tags */}
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between">
          {/* Posted Date */}
          <div className="text-sm text-gray-500">
            Đăng ngày: {formatDateShort(job.created_at)}
          </div>

          {/* Apply Button */}
          <Link
            href={`/recruitment/${job.id}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
          >
            Xem chi tiết
            <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Status Indicator */}
      {job.status === 'active' && (
        <div className="px-6 py-3 bg-gradient-to-r from-green-50 to-blue-50 border-t border-gray-100">
          <div className="flex items-center text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span className="text-green-700 font-medium">Đang tuyển</span>
          </div>
        </div>
      )}
    </article>
  );
};