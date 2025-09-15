import type { Metadata } from 'next';
import { Suspense } from 'react';
import ProductsPageClient from './ProductsPageClient';
import { LoadingSpinner } from '../components/shared/LoadingSpinner';

export const metadata: Metadata = {
  title: 'Sản phẩm VinFast - VinFast Việt Hùng | Xe máy điện chính hãng',
  description: 'Khám phá bộ sưu tập xe máy điện VinFast chính hãng tại Việt Hùng. Evo Neo, Motio, Evo Grand với công nghệ tiên tiến, giá ưu đãi và dịch vụ tốt nhất.',
  keywords: 'xe máy điện VinFast, VinFast Evo Neo, VinFast Motio, VinFast Evo Grand, xe máy điện, VinFast Việt Hùng',
  openGraph: {
    title: 'Sản phẩm VinFast - VinFast Việt Hùng',
    description: 'Khám phá bộ sưu tập xe máy điện VinFast chính hãng với công nghệ tiên tiến và giá cả hợp lý',
    type: 'website',
    locale: 'vi_VN',
  },
  alternates: {
    canonical: '/products',
  },
};

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    }>
      <ProductsPageClient />
    </Suspense>
  );
}