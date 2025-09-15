import type { Metadata } from 'next';
import JobDetailClient from './JobDetailClient';
import { apiClient } from '@/lib/api';

// Generate static params for static export
export async function generateStaticParams() {
  try {
    // Fetch all active job postings from the API
    const response = await apiClient.getJobs({ limit: 100 });

    if (response.success && response.data) {
      // Extract slugs from the API response
      return response.data.map(job => ({
        slug: job.slug
      }));
    }

    // Fallback to sample slugs if API fails
    console.warn('API request failed, using fallback slugs for jobs');
    return [
      { slug: 'nhan-vien-ban-hang-xe-dien' },
      { slug: 'ky-thuat-vien-sua-chua-xe-dien' },
      { slug: 'tu-van-dich-vu-khach-hang' },
      { slug: 'truong-phong-kinh-doanh' },
      { slug: 'nhan-vien-marketing-digital' },
    ];
  } catch (error) {
    console.error('Error generating static params for jobs:', error);
    // Return fallback slugs in case of error
    return [
      { slug: 'nhan-vien-ban-hang-xe-dien' },
      { slug: 'ky-thuat-vien-sua-chua-xe-dien' },
      { slug: 'tu-van-dich-vu-khach-hang' },
    ];
  }
}

// Generate metadata for each job
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug: jobSlug } = await params;

  try {
    // Fetch actual job data from the API for metadata
    const response = await apiClient.getJob(jobSlug);

    if (response.success && response.data) {
      const job = response.data;
      const title = `${job.title} | VinFast Việt Hùng`;
      const description = job.description?.substring(0, 160) || 'Cơ hội nghề nghiệp tại VinFast Việt Hùng - Đại lý xe điện VinFast chính hãng';

      // Format salary range if available
      const salaryInfo = job.salary_min && job.salary_max
        ? ` - Mức lương: ${job.salary_min.toLocaleString()} - ${job.salary_max.toLocaleString()} ${job.salary_currency}`
        : '';

      return {
        title,
        description: description + salaryInfo,
        openGraph: {
          title: job.title,
          description,
          type: 'article',
          locale: 'vi_VN',
          publishedTime: job.created_at,
        },
        alternates: {
          canonical: `/recruitment/${jobSlug}`,
        },
        keywords: [
          'VinFast',
          'tuyển dụng',
          'việc làm',
          'xe điện',
          job.department,
          job.location,
          job.employment_type,
          job.experience_level
        ].filter(Boolean).join(', '),
      };
    }

    // Fallback metadata if API call fails
    return {
      title: `Tuyển dụng VinFast - ${jobSlug.replace(/-/g, ' ')} | VinFast Việt Hùng`,
      description: 'Cơ hội nghề nghiệp tại VinFast Việt Hùng - Đại lý xe điện VinFast chính hãng',
      openGraph: {
        title: `Tuyển dụng VinFast - ${jobSlug.replace(/-/g, ' ')}`,
        description: 'Cơ hội nghề nghiệp tại VinFast Việt Hùng - Đại lý xe điện VinFast chính hãng',
        type: 'article',
        locale: 'vi_VN',
      },
      alternates: {
        canonical: `/recruitment/${jobSlug}`,
      },
    };
  } catch (error) {
    console.error('Error generating metadata for job:', error);
    return {
      title: 'Tuyển dụng VinFast | VinFast Việt Hùng',
      description: 'Cơ hội nghề nghiệp tại VinFast Việt Hùng - Đại lý xe điện VinFast chính hãng',
    };
  }
}

export default function JobDetailPage() {
  return <JobDetailClient />;
}