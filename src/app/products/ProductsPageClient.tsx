"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { HeroSection } from "../components/shared/HeroSection";
import { ProductCard } from "../components/Products/ProductCard";
import { ProductCategoryFilter } from "../components/Products/ProductCategoryFilter";
import { SearchInput } from "../components/shared/SearchInput";
import { Pagination } from "../components/shared/Pagination";
import { LoadingSpinner } from "../components/shared/LoadingSpinner";
import { apiClient, Product, ApiResponse } from "@/lib/api";
import { Zap, Filter, Grid3X3, List } from "lucide-react";

const ITEMS_PER_PAGE = 12;

export default function ProductsPageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('created_at');
  const [sortOrder, setSortOrder] = useState('desc');

  // Sync with URL parameters
  useEffect(() => {
    const category = searchParams.get('category') || 'all';
    const page = parseInt(searchParams.get('page') || '1');
    const search = searchParams.get('search') || '';
    const sort = searchParams.get('sort') || 'created_at';
    const order = searchParams.get('order') || 'desc';

    setSelectedCategory(category);
    setCurrentPage(page);
    setSearchTerm(search);
    setSortBy(sort);
    setSortOrder(order);
  }, [searchParams]);

  // Fetch products when filters change
  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, currentPage, sortBy, sortOrder]);

  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const params: any = {
        page: currentPage,
        limit: ITEMS_PER_PAGE,
        sort: sortBy,
        order: sortOrder,
      };

      if (selectedCategory !== "all") {
        params.category = selectedCategory;
      }

      if (searchTerm.trim()) {
        params.search = searchTerm.trim();
      }

      const response: ApiResponse<Product[]> = await apiClient.getProducts(params);

      if (response.success && response.data) {
        setProducts(response.data);
        if (response.pagination) {
          setTotalPages(response.pagination.pages);
          setTotalItems(response.pagination.total);
        }
      } else {
        setError(response.error || "Không thể tải sản phẩm");
      }
    } catch (err) {
      setError("Lỗi kết nối. Vui lòng thử lại sau.");
      console.error("Error fetching products:", err);
    } finally {
      setIsLoading(false);
    }
  };

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
    const newPath = queryString ? `/products?${queryString}` : '/products';

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
    const newPath = queryString ? `/products?${queryString}` : '/products';

    router.push(newPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleSearchSubmit = () => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    if (searchTerm.trim()) {
      newSearchParams.set('search', searchTerm.trim());
    } else {
      newSearchParams.delete('search');
    }

    // Reset to page 1 when searching
    newSearchParams.delete('page');

    const queryString = newSearchParams.toString();
    const newPath = queryString ? `/products?${queryString}` : '/products';

    router.push(newPath);
  };

  const handleSortChange = (sort: string, order: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    if (sort === 'created_at' && order === 'desc') {
      newSearchParams.delete('sort');
      newSearchParams.delete('order');
    } else {
      newSearchParams.set('sort', sort);
      newSearchParams.set('order', order);
    }

    // Reset to page 1 when sorting
    newSearchParams.delete('page');

    const queryString = newSearchParams.toString();
    const newPath = queryString ? `/products?${queryString}` : '/products';

    router.push(newPath);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <HeroSection
          title="Sản phẩm VinFast"
          description="Khám phá bộ sưu tập xe máy điện VinFast chính hãng - Công nghệ tiên tiến, thiết kế hiện đại, trải nghiệm tuyệt vời"
        />

        {/* Main Content */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            {/* Search & Filter Header */}
            <div className="mb-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                {/* Search */}
                <div className="lg:w-1/3">
                  <SearchInput
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onSubmit={handleSearchSubmit}
                    placeholder="Tìm kiếm xe máy điện..."
                  />
                </div>

                {/* View Controls */}
                <div className="flex items-center gap-4">
                  {/* Sort */}
                  <select
                    value={`${sortBy}-${sortOrder}`}
                    onChange={(e) => {
                      const [sort, order] = e.target.value.split('-');
                      handleSortChange(sort, order);
                    }}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="created_at-desc">Mới nhất</option>
                    <option value="created_at-asc">Cũ nhất</option>
                    <option value="price-asc">Giá tăng dần</option>
                    <option value="price-desc">Giá giảm dần</option>
                    <option value="name-asc">Tên A-Z</option>
                    <option value="name-desc">Tên Z-A</option>
                    <option value="range_km-desc">Quãng đường xa nhất</option>
                    <option value="max_speed_kmh-desc">Tốc độ cao nhất</option>
                  </select>

                  {/* View Mode Toggle */}
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                    >
                      <Grid3X3 className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                    >
                      <List className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Mobile Filter Toggle */}
                  <div className="lg:hidden">
                    <button
                      onClick={() => setShowMobileFilters(!showMobileFilters)}
                      className="btn btn-outline flex items-center"
                    >
                      <Filter className="h-5 w-5 mr-2" />
                      Lọc
                    </button>
                  </div>
                </div>

                {/* Results Count */}
                <div className="text-gray-600">
                  <span className="flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-green-600" />
                    {isLoading
                      ? "Đang tải..."
                      : `${totalItems} xe máy điện`}
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
                  <ProductCategoryFilter
                    selectedCategory={selectedCategory}
                    onCategoryChange={handleCategoryChange}
                  />
                </div>
              </div>

              {/* Main Content - Products */}
              <div className="lg:col-span-3">
                {/* Loading State */}
                {isLoading && (
                  <div className="text-center py-12">
                    <LoadingSpinner size="lg" className="mx-auto mb-4" />
                    <p className="text-gray-600">
                      Đang tải sản phẩm...
                    </p>
                  </div>
                )}

                {/* Error State */}
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                    <div className="text-red-600 mb-2">⚠️ Có lỗi xảy ra</div>
                    <p className="text-red-700 mb-4">{error}</p>
                    <button onClick={fetchProducts} className="btn btn-primary">
                      Thử lại
                    </button>
                  </div>
                )}

                {/* Products Grid */}
                {!isLoading && !error && (
                  <>
                    {products.length > 0 ? (
                      <>
                        <div className={`${
                          viewMode === 'grid'
                            ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                            : 'space-y-6'
                        } mb-8`}>
                          {products.map((product) => (
                            <ProductCard
                              key={product.id}
                              product={product}
                              viewMode={viewMode}
                            />
                          ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
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
                        <div className="text-gray-400 text-6xl mb-4">⚡</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {searchTerm
                            ? "Không tìm thấy kết quả"
                            : "Chưa có sản phẩm"}
                        </h3>
                        <p className="text-gray-600 mb-6">
                          {searchTerm
                            ? `Không có xe máy điện nào khớp với "${searchTerm}"`
                            : "Chưa có xe máy điện nào trong danh mục này."}
                        </p>
                        {searchTerm && (
                          <button
                            onClick={() => {
                              setSearchTerm("");
                              handleSearchSubmit();
                            }}
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

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tại sao chọn xe máy điện VinFast?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Công nghệ tiên tiến, thiết kế hiện đại và trải nghiệm vượt trội
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Công nghệ Pin LFP
                </h3>
                <p className="text-gray-600">
                  Pin an toàn, bền bỉ với tuổi thọ cao
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Chống nước IP67
                </h3>
                <p className="text-gray-600">
                  An toàn khi đi trong mưa và ngập nước
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Hiệu suất vượt trội
                </h3>
                <p className="text-gray-600">
                  Tốc độ cao, quãng đường xa, sạc nhanh
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Thiết kế hiện đại
                </h3>
                <p className="text-gray-600">
                  Đa dạng màu sắc, phong cách trẻ trung
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}