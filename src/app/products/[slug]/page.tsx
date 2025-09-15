import type { Metadata } from 'next';
import ProductDetailClient from './ProductDetailClient';
import { apiClient } from '@/lib/api';

// Generate static params for static export
export async function generateStaticParams() {
  try {
    const response = await apiClient.getProducts({ limit: 100 });
    if (response.success && response.data) {
      return response.data.map((product) => ({
        slug: product.slug,
      }));
    }
  } catch (error) {
    console.error('Error generating static params for products:', error);
  }
  return [];
}

// Generate metadata for each product
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug: productSlug } = await params;

  try {
    // Fetch actual product data from the API for metadata
    const response = await apiClient.getProduct(productSlug);

    if (response.success && response.data) {
      const product = response.data;
      const title = `${product.name} | VinFast Việt Hùng`;
      const description = product.description || `${product.name} - Xe máy điện VinFast chất lượng cao với công nghệ tiên tiến. Giá ${product.price_formatted}, quãng đường ${product.range_km}km.`;

      return {
        title,
        description,
        openGraph: {
          title: product.name,
          description,
          type: 'website',
          locale: 'vi_VN',
          images: product.color_variants && product.default_color && product.color_variants[product.default_color]
            ? [{ url: product.color_variants[product.default_color][0] }]
            : undefined,
        },
        alternates: {
          canonical: `/products/${productSlug}`,
        },
      };
    }

    // Fallback metadata if API call fails
    return {
      title: `Sản phẩm VinFast - ${productSlug.replace(/-/g, ' ')} | VinFast Việt Hùng`,
      description: 'Xe máy điện VinFast chất lượng cao với công nghệ tiên tiến từ VinFast Việt Hùng',
      openGraph: {
        title: `Sản phẩm VinFast - ${productSlug.replace(/-/g, ' ')}`,
        description: 'Xe máy điện VinFast chất lượng cao với công nghệ tiên tiến từ VinFast Việt Hùng',
        type: 'website',
        locale: 'vi_VN',
      },
      alternates: {
        canonical: `/products/${productSlug}`,
      },
    };
  } catch (error) {
    console.error('Error generating metadata for product:', error);
    return {
      title: 'Sản phẩm VinFast | VinFast Việt Hùng',
      description: 'Xe máy điện VinFast chất lượng cao với công nghệ tiên tiến từ VinFast Việt Hùng',
    };
  }
}

export default function ProductDetailPage() {
  return <ProductDetailClient />;
}