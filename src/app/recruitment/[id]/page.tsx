import type { Metadata } from 'next';
import JobDetailClient from './JobDetailClient';
import { apiClient } from '@/lib/api';

// Generate static params for static export
export async function generateStaticParams() {
  try {
    // For static export, we'll generate a few sample IDs
    // In a real scenario, you might fetch from a static data source
    // or provide a list of known job IDs
    return [
      { id: '1' },
      { id: '2' },
      { id: '3' },
      { id: '4' },
      { id: '5' },
    ];
  } catch (error) {
    console.error('Error generating static params for jobs:', error);
    return [];
  }
}

// Generate metadata for each job
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id: jobId } = await params;

  try {
    // For static export, provide default metadata
    // In production, you might fetch this from a static data source
    return {
      title: `Tuyển dụng VinFast - Vị trí ${jobId} | VinFast Việt Hùng`,
      description: 'Cơ hội nghề nghiệp tại VinFast Việt Hùng - Đại lý xe điện VinFast chính hãng',
      openGraph: {
        title: `Tuyển dụng VinFast - Vị trí ${jobId}`,
        description: 'Cơ hội nghề nghiệp tại VinFast Việt Hùng - Đại lý xe điện VinFast chính hãng',
        type: 'article',
        locale: 'vi_VN',
      },
      alternates: {
        canonical: `/recruitment/${jobId}`,
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