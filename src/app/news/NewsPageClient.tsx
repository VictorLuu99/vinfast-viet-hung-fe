"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { HeroSection } from "../components/shared/HeroSection";
import { NewsCard } from "../components/News/NewsCard";
import { NewsCategoryFilter } from "../components/News/NewsCategoryFilter";
import { SearchInput } from "../components/shared/SearchInput";
import { Pagination } from "../components/shared/Pagination";
import { LoadingSpinner } from "../components/shared/LoadingSpinner";
import { apiClient, NewsArticle, ApiResponse } from "@/lib/api";
import { Newspaper, Filter } from "lucide-react";

const ITEMS_PER_PAGE = 9;

export default function NewsPageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Sync with URL parameters
  useEffect(() => {
    const category = searchParams.get('category') || 'all';
    const page = parseInt(searchParams.get('page') || '1');

    setSelectedCategory(category);
    setCurrentPage(page);
  }, [searchParams]);

  // Fetch articles when filters change
  useEffect(() => {
    fetchArticles();
  }, [selectedCategory, currentPage]);

  const fetchArticles = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const params: any = {
        page: currentPage,
        limit: ITEMS_PER_PAGE,
      };

      if (selectedCategory !== "all") {
        params.category = selectedCategory;
      }

      const response: ApiResponse<NewsArticle[]> = await apiClient.getNews(
        params
      );

      if (response.success && response.data) {
        setArticles(response.data);
        if (response.pagination) {
          setTotalPages(response.pagination.pages);
          setTotalItems(response.pagination.total);
        }
      } else {
        setError(response.error || "Không thể tải tin tức");
      }
    } catch (err) {
      setError("Lỗi kết nối. Vui lòng thử lại sau.");
      console.error("Error fetching news:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Filter articles by search term (client-side)
  const filteredArticles = articles.filter(
    (article) =>
      searchTerm === "" ||
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (article.excerpt &&
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleCategoryChange = (category: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    if (category === 'all') {
      newSearchParams.delete('category');
    } else {
      newSearchParams.set('category', category);
    }

    // Reset to page 1 when changing category
    newSearchParams.delete('page');

    const queryString = newSearchParams.toString();
    const newPath = queryString ? `/news?${queryString}` : '/news';

    router.push(newPath);
    setShowMobileFilters(false);
  };

  const handlePageChange = (page: number) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    if (page === 1) {
      newSearchParams.delete('page');
    } else {
      newSearchParams.set('page', page.toString());
    }

    const queryString = newSearchParams.toString();
    const newPath = queryString ? `/news?${queryString}` : '/news';

    router.push(newPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <HeroSection
          title="Tin tức VinFast"
          description="Cập nhật tin tức mới nhất về VinFast và thị trường xe điện tại Việt Nam"
        />

        {/* Main Content */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            {/* Search & Filter Header */}
            <div className="mb-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                {/* Search */}
                <div className="lg:w-1/2">
                  <SearchInput
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Tìm kiếm tin tức..."
                  />
                </div>

                {/* Mobile Filter Toggle */}
                <div className="lg:hidden">
                  <button
                    onClick={() => setShowMobileFilters(!showMobileFilters)}
                    className="w-full btn btn-outline flex items-center justify-center"
                  >
                    <Filter className="h-5 w-5 mr-2" />
                    Lọc danh mục
                  </button>
                </div>

                {/* Results Count */}
                <div className="text-gray-600">
                  <span className="flex items-center">
                    <Newspaper className="h-5 w-5 mr-2" />
                    {isLoading ? "Đang tải..." : `${totalItems} bài viết`}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar - Categories */}
              <div
                className={`lg:col-span-1 ${
                  showMobileFilters ? "block" : "hidden lg:block"
                }`}
              >
                <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
                  <NewsCategoryFilter
                    selectedCategory={selectedCategory}
                    onCategoryChange={handleCategoryChange}
                  />
                </div>
              </div>

              {/* Main Content - Articles */}
              <div className="lg:col-span-3">
                {/* Loading State */}
                {isLoading && (
                  <div className="text-center py-12">
                    <LoadingSpinner size="lg" className="mx-auto mb-4" />
                    <p className="text-gray-600">Đang tải tin tức...</p>
                  </div>
                )}

                {/* Error State */}
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                    <div className="text-red-600 mb-2">⚠️ Có lỗi xảy ra</div>
                    <p className="text-red-700 mb-4">{error}</p>
                    <button onClick={fetchArticles} className="btn btn-primary">
                      Thử lại
                    </button>
                  </div>
                )}

                {/* Articles Grid */}
                {!isLoading && !error && (
                  <>
                    {filteredArticles.length > 0 ? (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                          {filteredArticles.map((article) => (
                            <NewsCard key={article.id} article={article} />
                          ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && !searchTerm && (
                          <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                            className="mt-12"
                          />
                        )}
                      </>
                    ) : (
                      <div className="text-center py-12">
                        <div className="text-gray-400 text-6xl mb-4">📰</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {searchTerm
                            ? "Không tìm thấy kết quả"
                            : "Chưa có tin tức"}
                        </h3>
                        <p className="text-gray-600 mb-6">
                          {searchTerm
                            ? `Không có tin tức nào khớp với "${searchTerm}"`
                            : "Chưa có tin tức nào trong danh mục này."}
                        </p>
                        {searchTerm && (
                          <button
                            onClick={() => setSearchTerm("")}
                            className="btn btn-primary"
                          >
                            Xóa bộ lọc
                          </button>
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
