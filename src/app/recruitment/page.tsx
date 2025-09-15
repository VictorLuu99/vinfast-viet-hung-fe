import type { Metadata } from 'next';
import { Suspense } from 'react';
import RecruitmentPageClient from './RecruitmentPageClient';
import { LoadingSpinner } from '../components/shared/LoadingSpinner';

export const metadata: Metadata = {
  title: 'Tuyển dụng VinFast - VinFast Việt Hùng | Cơ hội nghề nghiệp xe điện',
  description: 'Tham gia đội ngũ VinFast Việt Hùng - Cơ hội nghề nghiệp trong ngành ô tô điện. Tuyển dụng nhân viên bán hàng, kỹ thuật, dịch vụ khách hàng tại Vĩnh Phúc và Phú Thọ.',
  keywords: 'tuyển dụng VinFast, việc làm VinFast, VinFast Việt Hùng, nghề nghiệp xe điện, tuyển dụng bán hàng, tuyển dụng kỹ thuật',
  openGraph: {
    title: 'Tuyển dụng VinFast - VinFast Việt Hùng',
    description: 'Cơ hội nghề nghiệp trong ngành ô tô điện tại VinFast Việt Hùng',
    type: 'website',
    locale: 'vi_VN',
  },
  alternates: {
    canonical: '/recruitment',
  },
};

export default function RecruitmentPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    }>
      <RecruitmentPageClient />
    </Suspense>
  );
}