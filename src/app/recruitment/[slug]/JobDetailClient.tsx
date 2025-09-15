"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { LoadingSpinner } from "../../components/shared/LoadingSpinner";
import { CategoryBadge } from "../../components/shared/CategoryBadge";
import {
  apiClient,
  JobPosting,
  formatDate,
  vietnameseJobCategories,
} from "@/lib/api";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  ArrowLeft,
  Send,
  Building,
  DollarSign,
  CheckCircle,
  Briefcase,
} from "lucide-react";
import { contactInfo } from "@/lib/data/stores";

export default function JobDetailClient() {
  const params = useParams();
  const router = useRouter();
  const jobSlug = params.slug as string;

  const [job, setJob] = useState<JobPosting | null>(null);
  const [relatedJobs, setRelatedJobs] = useState<JobPosting[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  // Application form state
  const [applicationForm, setApplicationForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    coverLetter: "",
    resumeFile: null as File | null,
  });

  useEffect(() => {
    if (jobSlug) {
      fetchJob();
    }
  }, [jobSlug]);

  const fetchJob = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await apiClient.getJob(jobSlug);

      if (response.success && response.data) {
        setJob(response.data);
        // Fetch related jobs
        fetchRelatedJobs(response.data.department);
      } else {
        setError(response.error || "Không tìm thấy vị trí việc làm");
      }
    } catch (err) {
      setError("Lỗi kết nối. Vui lòng thử lại sau.");
      console.error("Error fetching job:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchRelatedJobs = async (department: string) => {
    try {
      const response = await apiClient.getJobs({
        department,
        limit: 3,
      });

      if (response.success && response.data) {
        // Filter out current job
        const filtered = response.data.filter((j) => j.slug !== jobSlug);
        setRelatedJobs(filtered.slice(0, 3));
      }
    } catch (err) {
      console.error("Error fetching related jobs:", err);
    }
  };

  const getCategoryLabel = (slug: string) => {
    return (
      vietnameseJobCategories.find((cat) => cat.value === slug)?.label || slug
    );
  };

  const getJobTypeLabel = (type: string) => {
    const types: Record<string, string> = {
      "full-time": "Toàn thời gian",
      "part-time": "Bán thời gian",
      contract: "Hợp đồng",
      freelance: "Tự do",
      internship: "Thực tập",
    };
    return types[type] || type;
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setApplicationForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setApplicationForm((prev) => ({ ...prev, resumeFile: file }));
  };

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create form data for file upload
      const formData = new FormData();
      formData.append("jobSlug", jobSlug);
      formData.append("fullName", applicationForm.fullName);
      formData.append("email", applicationForm.email);
      formData.append("phone", applicationForm.phone);
      formData.append("experience", applicationForm.experience);
      formData.append("coverLetter", applicationForm.coverLetter);

      if (applicationForm.resumeFile) {
        formData.append("resume", applicationForm.resumeFile);
      }

      const response = await apiClient.submitJobApplication(formData);

      if (response.success) {
        setApplicationSubmitted(true);
        // Reset form
        setApplicationForm({
          fullName: "",
          email: "",
          phone: "",
          experience: "",
          coverLetter: "",
          resumeFile: null,
        });
      } else {
        setError(response.error || "Không thể gửi đơn ứng tuyển");
      }
    } catch (err) {
      setError("Lỗi kết nối. Vui lòng thử lại sau.");
      console.error("Error submitting application:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <main>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <LoadingSpinner size="lg" className="mx-auto mb-4" />
            <p className="text-gray-600">Đang tải thông tin việc làm...</p>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  if (error || !job) {
    return (
      <main>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">💼</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {error || "Không tìm thấy vị trí việc làm"}
            </h1>
            <p className="text-gray-600 mb-6">
              Vị trí có thể đã bị xóa hoặc không tồn tại.
            </p>
            <div className="flex gap-4 justify-center">
              <button onClick={() => router.back()} className="btn btn-outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Quay lại
              </button>
              <Link href="/recruitment" className="btn btn-primary">
                Xem việc làm khác
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
        {/* Job Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between">
                <Link
                  href="/recruitment"
                  className="inline-flex items-center px-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-white rounded-lg transition-colors group"
                >
                  <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  <Briefcase className="h-4 w-4 mr-2" />
                  Về Tuyển dụng
                </Link>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  {/* Job Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-6">
                      <Link
                        href={`/recruitment?department=${job.department}`}
                        className="inline-block transition-transform hover:scale-105"
                      >
                        <CategoryBadge
                          category={getCategoryLabel(job.department)}
                        />
                      </Link>
                      <div className="flex items-center text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        Đăng ngày: {formatDate(job.created_at)}
                      </div>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                      {job.title}
                    </h1>

                    {/* Job Meta Info */}
                    <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 mr-2" />
                        {getJobTypeLabel(job.job_type || job.employment_type)}
                      </div>
                      {job.experience_level && (
                        <div className="flex items-center">
                          <Users className="h-5 w-5 mr-2" />
                          {job.experience_level}
                        </div>
                      )}
                      {job.salary_range && (
                        <div className="flex items-center">
                          <DollarSign className="h-5 w-5 mr-2" />
                          {job.salary_range}
                        </div>
                      )}
                    </div>

                    {job.status === "active" && (
                      <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        Đang tuyển
                      </div>
                    )}
                  </div>

                  {/* Job Description */}
                  <div className="prose prose-lg max-w-none mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Mô tả công việc
                    </h2>
                    <div
                      className="text-gray-800 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: job.description }}
                    />
                  </div>

                  {/* Requirements */}
                  {job.requirements && (
                    <div className="prose prose-lg max-w-none mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Yêu cầu ứng viên
                      </h2>
                      <div
                        className="text-gray-800 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: job.requirements }}
                      />
                    </div>
                  )}

                  {/* Benefits */}
                  {job.benefits && (
                    <div className="prose prose-lg max-w-none mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Quyền lợi
                      </h2>
                      <div
                        className="text-gray-800 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: job.benefits }}
                      />
                    </div>
                  )}
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-6 space-y-6">
                    {/* Application Form */}
                    {!applicationSubmitted ? (
                      <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          Ứng tuyển ngay
                        </h3>
                        <form
                          onSubmit={handleSubmitApplication}
                          className="space-y-4"
                        >
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Họ và tên *
                            </label>
                            <input
                              type="text"
                              name="fullName"
                              value={applicationForm.fullName}
                              onChange={handleFormChange}
                              required
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Email *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={applicationForm.email}
                              onChange={handleFormChange}
                              required
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Số điện thoại *
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={applicationForm.phone}
                              onChange={handleFormChange}
                              required
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Kinh nghiệm làm việc
                            </label>
                            <input
                              type="text"
                              name="experience"
                              value={applicationForm.experience}
                              onChange={handleFormChange}
                              placeholder="Ví dụ: 2 năm kinh nghiệm bán hàng"
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Thư xin việc
                            </label>
                            <textarea
                              name="coverLetter"
                              value={applicationForm.coverLetter}
                              onChange={handleFormChange}
                              rows={4}
                              placeholder="Giới thiệu bản thân và lý do ứng tuyển..."
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              CV đính kèm
                            </label>
                            <input
                              type="file"
                              name="resume"
                              onChange={handleFileChange}
                              accept=".pdf,.doc,.docx"
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                              Chỉ chấp nhận file PDF, DOC, DOCX
                            </p>
                          </div>

                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full btn btn-primary disabled:opacity-50"
                          >
                            {isSubmitting ? (
                              <>
                                <LoadingSpinner size="sm" className="mr-2" />
                                Đang gửi...
                              </>
                            ) : (
                              <>
                                <Send className="h-4 w-4 mr-2" />
                                Gửi đơn ứng tuyển
                              </>
                            )}
                          </button>
                        </form>
                      </div>
                    ) : (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                        <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-green-800 mb-2">
                          Ứng tuyển thành công!
                        </h3>
                        <p className="text-green-700">
                          Chúng tôi đã nhận được đơn ứng tuyển của bạn và sẽ
                          liên hệ sớm nhất.
                        </p>
                      </div>
                    )}

                    {/* Company Contact */}
                    <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg p-6">
                      <h3 className="text-lg font-bold mb-4">
                        <Building className="h-5 w-5 inline mr-2" />
                        Liên hệ tư vấn
                      </h3>
                      <p className="mb-4 opacity-90">
                        Cần hỗ trợ thêm thông tin về vị trí này?
                      </p>
                      <div className="space-y-3">
                        <a
                          href={`tel:${contactInfo.phone}`}
                          className="block bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
                        >
                          📞 {contactInfo.phone}
                        </a>
                        {contactInfo.socialMedia?.facebook && (
                          <a
                            href={contactInfo.socialMedia.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
                          >
                            💬 Tư vấn qua Facebook
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Jobs */}
              {relatedJobs.length > 0 && (
                <div className="mt-16">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Vị trí liên quan
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedJobs.map((relatedJob) => (
                      <Link
                        key={relatedJob.id}
                        href={`/recruitment/${relatedJob.slug}`}
                        className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <div className="p-6">
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                            {relatedJob.title}
                          </h3>
                          <div className="text-sm text-gray-500 mb-2">
                            {relatedJob.location} •{" "}
                            {getJobTypeLabel(
                              relatedJob.job_type || relatedJob.employment_type
                            )}
                          </div>
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {relatedJob.description.replace(/<[^>]*>/g, "")}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
