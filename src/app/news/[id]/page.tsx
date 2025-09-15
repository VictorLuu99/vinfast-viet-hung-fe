import type { Metadata } from 'next';
import NewsArticleClient from './NewsArticleClient';
import { apiClient } from '@/lib/api';

// Generate static params for static export
export async function generateStaticParams() {
  try {
    // For static export, we'll generate a few sample IDs
    // In a real scenario, you might fetch from a static data source
    // or provide a list of known article IDs
    return [
      { id: '1' },
      { id: '2' },
      { id: '3' },
      { id: '4' },
      { id: '5' },
    ];
  } catch (error) {
    console.error('Error generating static params for news:', error);
    return [];
  }
}

// Generate metadata for each article
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id: articleId } = await params;

  try {
    // For static export, provide default metadata
    // In production, you might fetch this from a static data source
    return {
      title: `Tin tức VinFast - Bài viết ${articleId} | VinFast Việt Hùng`,
      description: 'Tin tức mới nhất về VinFast và thị trường xe điện từ VinFast Việt Hùng',
      openGraph: {
        title: `Tin tức VinFast - Bài viết ${articleId}`,
        description: 'Tin tức mới nhất về VinFast và thị trường xe điện từ VinFast Việt Hùng',
        type: 'article',
        locale: 'vi_VN',
      },
      alternates: {
        canonical: `/news/${articleId}`,
      },
    };
  } catch (error) {
    console.error('Error generating metadata for news article:', error);
    return {
      title: 'Tin tức VinFast | VinFast Việt Hùng',
      description: 'Tin tức mới nhất về VinFast và thị trường xe điện từ VinFast Việt Hùng',
    };
  }
}

export default function NewsArticlePage() {
  return <NewsArticleClient />;
}