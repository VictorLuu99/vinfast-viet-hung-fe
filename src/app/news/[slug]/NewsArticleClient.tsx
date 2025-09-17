"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { LoadingSpinner } from "../../components/shared/LoadingSpinner";
import { CategoryBadge } from "../../components/shared/CategoryBadge";
import {
  apiClient,
  NewsArticle,
  formatDate,
  vietnameseNewsCategories,
} from "@/lib/api";
import {
  Calendar,
  ArrowLeft,
  Facebook,
  Twitter,
  Copy,
  Check,
  Newspaper,
} from "lucide-react";
import { contactInfo } from "@/lib/data/stores";

export default function NewsArticleClient() {
  const params = useParams();
  const router = useRouter();
  const articleSlug = params.slug as string;

  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const fetchArticle = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await apiClient.getNewsArticle(articleSlug);

      if (response.success && response.data) {
        setArticle(response.data);
        // Fetch related articles
        fetchRelatedArticles(response.data.category);
      } else {
        setError(response.error || "Không tìm thấy bài viết");
      }
    } catch (err) {
      setError("Lỗi kết nối. Vui lòng thử lại sau.");
      console.error("Error fetching article:", err);
    } finally {
      setIsLoading(false);
    }
  }, [articleSlug]);

  useEffect(() => {
    if (articleSlug) {
      fetchArticle();
    }
  }, [articleSlug, fetchArticle]);

  const fetchRelatedArticles = useCallback(async (category: string) => {
    try {
      const response = await apiClient.getNews({
        category,
        limit: 3,
      });

      if (response.success && response.data) {
        // Filter out current article
        const filtered = response.data.filter((a) => a.slug !== articleSlug);
        setRelatedArticles(filtered.slice(0, 3));
      }
    } catch (err) {
      console.error("Error fetching related articles:", err);
    }
  }, [articleSlug]);

  const getCategoryLabel = (slug: string) => {
    return (
      vietnameseNewsCategories.find((cat) => cat.value === slug)?.label || slug
    );
  };

  const handleShare = async (platform?: "facebook" | "twitter") => {
    const url = window.location.href;
    const title = article?.title || "VinFast Việt Hùng";

    if (platform === "facebook") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`,
        "_blank"
      );
    } else if (platform === "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(title)}`,
        "_blank"
      );
    } else {
      // Copy to clipboard
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }
  };

  if (isLoading) {
    return (
      <main>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <LoadingSpinner size="lg" className="mx-auto mb-4" />
            <p className="text-gray-600">Đang tải bài viết...</p>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  if (error || !article) {
    return (
      <main>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {error || "Không tìm thấy bài viết"}
            </h1>
            <p className="text-gray-600 mb-6">
              Bài viết có thể đã bị xóa hoặc không tồn tại.
            </p>
            <div className="flex gap-4 justify-center">
              <button onClick={() => router.back()} className="btn btn-outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Quay lại
              </button>
              <Link href="/news" className="btn btn-primary">
                Xem tin tức khác
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <div className="min-h-screen bg-gray-50 pt-20">
        <Header />
        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-2">
                <Link
                  href="/news"
                  className="inline-flex items-center px-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-white rounded-lg transition-colors group"
                >
                  <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  <Newspaper className="h-4 w-4 mr-2" />
                  Về Tin tức
                </Link>
              </div>
              {/* Article Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <Link
                    href={`/news?category=${article.category}`}
                    className="inline-block transition-transform hover:scale-105"
                  >
                    <CategoryBadge
                      category={getCategoryLabel(article.category)}
                    />
                  </Link>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    {formatDate(article.created_at)}
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {article.title}
                </h1>

                {article.excerpt && (
                  <p className="text-xl text-gray-600 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                )}

                {/* Share Buttons */}
                <div className="flex items-center gap-4 py-6 border-y border-gray-200">
                  <span className="text-gray-600 font-medium">Chia sẻ:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleShare("facebook")}
                      className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Facebook className="h-4 w-4" />
                      Facebook
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="flex items-center gap-2 px-3 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                      Twitter
                    </button>
                    <button
                      onClick={() => handleShare()}
                      className="flex items-center gap-2 px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      {copied ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                      {copied ? "Đã sao chép" : "Sao chép link"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              {article.featured_image && (
                <div className="mb-8">
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={article.featured_image}
                      alt={article.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              )}

              {/* Article Content */}
              <div className="prose prose-lg max-w-none mb-12">
                <div
                  className="rich-content text-gray-800 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-white text-center mb-12">
                <h3 className="text-2xl font-bold mb-4">
                  Quan tâm đến xe điện VinFast?
                </h3>
                <p className="text-lg opacity-90 mb-6">
                  Liên hệ với VinFast Việt Hùng để được tư vấn chi tiết và trải
                  nghiệm xe
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="btn bg-white text-blue-600 hover:bg-gray-100"
                  >
                    📞 Gọi ngay: {contactInfo.phone}
                  </a>
                  {contactInfo.socialMedia?.facebook && (
                    <a
                      href={contactInfo.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn bg-white/10 text-white border-white hover:bg-white/20"
                    >
                      Tư vấn qua Facebook
                    </a>
                  )}
                </div>
              </div>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Tin tức liên quan
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedArticles.map((relatedArticle) => (
                      <Link
                        key={relatedArticle.id}
                        href={`/news/${relatedArticle.slug}`}
                        className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <div className="relative aspect-video bg-gray-200">
                          {relatedArticle.featured_image ? (
                            <Image
                              src={relatedArticle.featured_image}
                              alt={relatedArticle.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-100 to-green-100">
                              <span className="text-2xl">📰</span>
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {relatedArticle.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-2">
                            {formatDate(relatedArticle.created_at)}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </main>
  );
}
