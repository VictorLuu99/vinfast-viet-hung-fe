"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { HeroSection } from "../components/shared/HeroSection";
import { JobCard } from "../components/Recruitment/JobCard";
import { JobCategoryFilter } from "../components/Recruitment/JobCategoryFilter";
import { SearchInput } from "../components/shared/SearchInput";
import { Pagination } from "../components/shared/Pagination";
import { LoadingSpinner } from "../components/shared/LoadingSpinner";
import { apiClient, JobPosting, ApiResponse } from "@/lib/api";
import { Briefcase, Filter } from "lucide-react";

const ITEMS_PER_PAGE = 9;

export default function RecruitmentPageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [jobs, setJobs] = useState<JobPosting[]>([]);
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
    const department = searchParams.get('department') || 'all';
    const page = parseInt(searchParams.get('page') || '1');

    setSelectedCategory(department);
    setCurrentPage(page);
  }, [searchParams]);

  // Fetch jobs when filters change
  useEffect(() => {
    fetchJobs();
  }, [selectedCategory, currentPage]);

  const fetchJobs = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const params: any = {
        page: currentPage,
        limit: ITEMS_PER_PAGE,
      };

      if (selectedCategory !== "all") {
        params.department = selectedCategory;
      }

      const response: ApiResponse<JobPosting[]> = await apiClient.getJobs(
        params
      );

      if (response.success && response.data) {
        setJobs(response.data);
        if (response.pagination) {
          setTotalPages(response.pagination.pages);
          setTotalItems(response.pagination.total);
        }
      } else {
        setError(response.error || "Không thể tải danh sách việc làm");
      }
    } catch (err) {
      setError("Lỗi kết nối. Vui lòng thử lại sau.");
      console.error("Error fetching jobs:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Filter jobs by search term (client-side)
  const filteredJobs = jobs.filter(
    (job) =>
      searchTerm === "" ||
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (job.requirements &&
        job.requirements.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleCategoryChange = (category: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    if (category === 'all') {
      newSearchParams.delete('department');
    } else {
      newSearchParams.set('department', category);
    }

    // Reset to page 1 when changing category
    newSearchParams.delete('page');

    const queryString = newSearchParams.toString();
    const newPath = queryString ? `/recruitment?${queryString}` : '/recruitment';

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
    const newPath = queryString ? `/recruitment?${queryString}` : '/recruitment';

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
          title="Tuyển dụng VinFast"
          description="Gia nhập đội ngũ VinFast Việt Hùng - Cùng phát triển sự nghiệp trong ngành ô tô điện tương lai"
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
                    placeholder="Tìm kiếm vị trí việc làm..."
                  />
                </div>

                {/* Mobile Filter Toggle */}
                <div className="lg:hidden">
                  <button
                    onClick={() => setShowMobileFilters(!showMobileFilters)}
                    className="w-full btn btn-outline flex items-center justify-center"
                  >
                    <Filter className="h-5 w-5 mr-2" />
                    Lọc theo bộ phận
                  </button>
                </div>

                {/* Results Count */}
                <div className="text-gray-600">
                  <span className="flex items-center">
                    <Briefcase className="h-5 w-5 mr-2" />
                    {isLoading
                      ? "Đang tải..."
                      : `${totalItems} vị trí việc làm`}
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
                  <JobCategoryFilter
                    selectedCategory={selectedCategory}
                    onCategoryChange={handleCategoryChange}
                  />
                </div>
              </div>

              {/* Main Content - Jobs */}
              <div className="lg:col-span-3">
                {/* Loading State */}
                {isLoading && (
                  <div className="text-center py-12">
                    <LoadingSpinner size="lg" className="mx-auto mb-4" />
                    <p className="text-gray-600">
                      Đang tải danh sách việc làm...
                    </p>
                  </div>
                )}

                {/* Error State */}
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                    <div className="text-red-600 mb-2">⚠️ Có lỗi xảy ra</div>
                    <p className="text-red-700 mb-4">{error}</p>
                    <button onClick={fetchJobs} className="btn btn-primary">
                      Thử lại
                    </button>
                  </div>
                )}

                {/* Jobs Grid */}
                {!isLoading && !error && (
                  <>
                    {filteredJobs.length > 0 ? (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 mb-8">
                          {filteredJobs.map((job) => (
                            <JobCard key={job.id} job={job} />
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
                        <div className="text-gray-400 text-6xl mb-4">💼</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {searchTerm
                            ? "Không tìm thấy kết quả"
                            : "Chưa có vị trí tuyển dụng"}
                        </h3>
                        <p className="text-gray-600 mb-6">
                          {searchTerm
                            ? `Không có vị trí việc làm nào khớp với "${searchTerm}"`
                            : "Chưa có vị trí tuyển dụng nào trong bộ phận này."}
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

        {/* Career Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tại sao chọn VinFast Việt Hùng?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Chúng tôi cam kết tạo ra môi trường làm việc tốt nhất cho nhân
                viên
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Công nghệ tiên tiến
                </h3>
                <p className="text-gray-600">
                  Làm việc với công nghệ xe điện hàng đầu
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Phát triển sự nghiệp
                </h3>
                <p className="text-gray-600">
                  Cơ hội thăng tiến và học hỏi không ngừng
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Thu nhập hấp dẫn
                </h3>
                <p className="text-gray-600">
                  Mức lương cạnh tranh và thưởng hiệu suất
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Phúc lợi tốt
                </h3>
                <p className="text-gray-600">
                  Bảo hiểm đầy đủ và các chế độ đãi ngộ
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
