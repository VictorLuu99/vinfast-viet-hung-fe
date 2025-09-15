import type { Metadata } from 'next';
import NewsArticleClient from './NewsArticleClient';
import { apiClient } from '@/lib/api';

// Generate static params for static export
export async function generateStaticParams() {
  try {
    // Fetch all published news articles from the API
    const response = await apiClient.getNews({ limit: 100 });

    if (response.success && response.data) {
      // Extract slugs from the API response
      return response.data.map(article => ({
        slug: article.slug
      }));
    }

    // Fallback to sample slugs if API fails
    console.warn('API request failed, using fallback slugs for news');
    return [
      { slug: 'vinfast-ra-mat-xe-dien-moi-nhat' },
      { slug: 'cong-nghe-pin-xe-dien-tien-tien' },
      { slug: 'he-thong-sac-nhanh-toan-quoc' },
      { slug: 'chuong-trinh-khuyen-mai-thang-12' },
      { slug: 'vinfast-mo-rong-thi-truong-chau-eu' },
    ];
  } catch (error) {
    console.error('Error generating static params for news:', error);
    // Return fallback slugs in case of error
    return [
      { slug: 'vinfast-ra-mat-xe-dien-moi-nhat' },
      { slug: 'cong-nghe-pin-xe-dien-tien-tien' },
      { slug: 'he-thong-sac-nhanh-toan-quoc' },
    ];
  }
}

// Generate metadata for each article
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug: articleSlug } = await params;

  try {
    // Fetch actual article data from the API for metadata
    const response = await apiClient.getNewsArticle(articleSlug);

    if (response.success && response.data) {
      const article = response.data;
      const title = `${article.title} | VinFast Việt Hùng`;
      const description = article.excerpt || article.content?.substring(0, 160) || 'Tin tức mới nhất về VinFast và thị trường xe điện từ VinFast Việt Hùng';

      return {
        title,
        description,
        openGraph: {
          title: article.title,
          description,
          type: 'article',
          locale: 'vi_VN',
          images: article.featured_image ? [{ url: article.featured_image }] : undefined,
          publishedTime: article.created_at,
          modifiedTime: article.updated_at,
        },
        alternates: {
          canonical: `/news/${articleSlug}`,
        },
      };
    }

    // Fallback metadata if API call fails
    return {
      title: `Tin tức VinFast - ${articleSlug.replace(/-/g, ' ')} | VinFast Việt Hùng`,
      description: 'Tin tức mới nhất về VinFast và thị trường xe điện từ VinFast Việt Hùng',
      openGraph: {
        title: `Tin tức VinFast - ${articleSlug.replace(/-/g, ' ')}`,
        description: 'Tin tức mới nhất về VinFast và thị trường xe điện từ VinFast Việt Hùng',
        type: 'article',
        locale: 'vi_VN',
      },
      alternates: {
        canonical: `/news/${articleSlug}`,
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