import type { Metadata } from 'next';
import NewsPageClient from './NewsPageClient';

export const metadata: Metadata = {
  title: 'Tin tức VinFast - VinFast Việt Hùng | Tin tức xe điện mới nhất',
  description: 'Cập nhật tin tức mới nhất về VinFast và thị trường xe điện tại Việt Nam. Tin công ty, sản phẩm, sự kiện và khuyến mại từ VinFast Việt Hùng.',
  keywords: 'tin tức VinFast, xe điện VinFast, VinFast Việt Hùng, tin công ty, sự kiện VinFast, khuyến mại xe điện',
  openGraph: {
    title: 'Tin tức VinFast - VinFast Việt Hùng',
    description: 'Cập nhật tin tức mới nhất về VinFast và thị trường xe điện tại Việt Nam',
    type: 'website',
    locale: 'vi_VN',
  },
  alternates: {
    canonical: '/news',
  },
};

export default function NewsPage() {
  return <NewsPageClient />;
}