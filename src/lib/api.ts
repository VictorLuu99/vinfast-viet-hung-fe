// API client for VinFast VietHung frontend
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://vinfast-viethung-api.xox-labs-server.workers.dev';

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

// News Types
export interface NewsArticle {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  featured_image?: string;
  category: string;
  published: number;
  created_at: string;
  updated_at: string;
}

export interface NewsCategory {
  id: number;
  name: string;
  slug: string;
  description?: string;
}

// Job Types
export interface Job {
  id: number;
  title: string;
  slug: string;
  description: string;
  requirements?: string;
  location: string;
  department: string;
  employment_type: string;
  experience_level: string;
  salary_min?: number;
  salary_max?: number;
  salary_currency: string;
  benefits?: string;
  application_deadline?: string;
  contact_email?: string;
  contact_phone?: string;
  created_at: string;
}

// Alias for Job interface to match component expectations
export interface JobPosting extends Job {
  job_type: string;
  salary_range?: string;
  status: string;
}

export interface JobCategory {
  id: number;
  name: string;
  slug: string;
  description?: string;
}

export interface JobApplication {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  date_of_birth?: string;
  gender?: string;
  education_level?: string;
  years_experience?: number;
  current_position?: string;
  current_company?: string;
  expected_salary?: number;
  available_date?: string;
  cv_file_url: string;
  cv_file_name: string;
  cv_file_size?: number;
  cover_letter?: string;
  portfolio_url?: string;
  linkedin_url?: string;
  skills?: string;
  languages?: string;
}

// Contact Types
export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

// Product Types - Electric Motorbikes
export interface Product {
  id: number;
  name: string;
  slug: string;
  category: 'cao-cap' | 'trung-cap' | 'pho-thong';
  price: number;
  original_price?: number;
  price_formatted: string;
  original_price_formatted?: string;
  discount: number;
  description?: string;
  tagline?: string;
  features: string[];
  specs?: Record<string, string | number>;
  color_variants: Record<string, string[]>; // Color name -> array of image URLs
  colors: string[];
  default_color?: string;
  range_km: number;
  power_w: number;
  battery_type?: string;
  battery_capacity?: string;
  weight_kg: number;
  max_speed_kmh: number;
  charging_time?: string;
  motor_type?: string;
  brake_system?: string;
  lighting?: string;
  display?: string;
  water_resistance?: string;
  suspension?: string;
  wheel_size?: string;
  storage_liters: number;
  warranty?: string;
  length_mm?: number;
  width_mm?: number;
  height_mm?: number;
  available: boolean;
  status: string;
  priority: number;
  badge?: string;
  meta_title?: string;
  meta_description?: string;
  keywords?: string;
  created_at: string;
  updated_at: string;
}

export interface ProductCategory {
  id: number;
  name: string;
  slug: string;
  display_name: string;
  description?: string;
  sort_order: number;
}

// API Client Class
class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;

    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `HTTP error! status: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // News API methods
  async getNews(params: {
    page?: number;
    limit?: number;
    category?: string;
  } = {}): Promise<ApiResponse<NewsArticle[]>> {
    const searchParams = new URLSearchParams();
    if (params.page) searchParams.append('page', params.page.toString());
    if (params.limit) searchParams.append('limit', params.limit.toString());
    if (params.category) searchParams.append('category', params.category);

    return this.request(`/api/news?${searchParams}`);
  }

  async getNewsArticle(slug: string): Promise<ApiResponse<NewsArticle>> {
    return this.request(`/api/news/by-slug/${slug}`);
  }

  // Fallback method for ID-based lookup (if needed)
  async getNewsArticleById(id: string): Promise<ApiResponse<NewsArticle>> {
    return this.request(`/api/news/${id}`);
  }

  async getNewsCategories(): Promise<ApiResponse<NewsCategory[]>> {
    return this.request('/api/news/categories');
  }

  // Jobs API methods
  async getJobs(params: {
    page?: number;
    limit?: number;
    department?: string;
    location?: string;
  } = {}): Promise<ApiResponse<JobPosting[]>> {
    const searchParams = new URLSearchParams();
    if (params.page) searchParams.append('page', params.page.toString());
    if (params.limit) searchParams.append('limit', params.limit.toString());
    if (params.department) searchParams.append('department', params.department);
    if (params.location) searchParams.append('location', params.location);

    return this.request(`/api/recruitment/jobs?${searchParams}`);
  }

  async getJob(slug: string): Promise<ApiResponse<JobPosting>> {
    return this.request(`/api/recruitment/jobs/by-slug/${slug}`);
  }

  // Fallback method for ID-based lookup (if needed)
  async getJobById(id: string): Promise<ApiResponse<JobPosting>> {
    return this.request(`/api/recruitment/jobs/${id}`);
  }

  async getJobCategories(): Promise<ApiResponse<JobCategory[]>> {
    return this.request('/api/recruitment/categories');
  }

  async submitJobApplication(
    formData: FormData
  ): Promise<ApiResponse<{ application_id: number; message: string }>> {
    const jobId = formData.get('jobId') as string;
    return this.request(`/api/recruitment/jobs/${jobId}/apply`, {
      method: 'POST',
      body: formData,
      headers: {}, // Let browser set Content-Type for FormData
    });
  }

  // Contact API methods
  async submitContact(
    contact: ContactSubmission
  ): Promise<ApiResponse<{ contact_id: number; message: string }>> {
    return this.request('/api/contacts', {
      method: 'POST',
      body: JSON.stringify(contact),
    });
  }

  // Products API methods - Electric Motorbikes
  async getProducts(params: {
    page?: number;
    limit?: number;
    category?: string;
    search?: string;
    min_price?: number;
    max_price?: number;
    sort?: string;
    order?: string;
    color?: string;
  } = {}): Promise<ApiResponse<Product[]>> {
    const searchParams = new URLSearchParams();
    if (params.page) searchParams.append('page', params.page.toString());
    if (params.limit) searchParams.append('limit', params.limit.toString());
    if (params.category) searchParams.append('category', params.category);
    if (params.search) searchParams.append('search', params.search);
    if (params.min_price) searchParams.append('min_price', params.min_price.toString());
    if (params.max_price) searchParams.append('max_price', params.max_price.toString());
    if (params.sort) searchParams.append('sort', params.sort);
    if (params.order) searchParams.append('order', params.order);
    if (params.color) searchParams.append('color', params.color);

    return this.request(`/api/products?${searchParams}`);
  }

  async getProduct(slug: string): Promise<ApiResponse<Product>> {
    return this.request(`/api/products/by-slug/${slug}`);
  }

  async getProductCategories(): Promise<ApiResponse<ProductCategory[]>> {
    return this.request('/api/products/categories');
  }
}

// Export singleton instance
export const apiClient = new ApiClient();

// Utility functions
export const generateSlug = (title: string): string => {
  // Vietnamese character mapping
  const vietnameseMap: { [key: string]: string } = {
    'à': 'a', 'á': 'a', 'ạ': 'a', 'ả': 'a', 'ã': 'a',
    'â': 'a', 'ầ': 'a', 'ấ': 'a', 'ậ': 'a', 'ẩ': 'a', 'ẫ': 'a',
    'ă': 'a', 'ằ': 'a', 'ắ': 'a', 'ặ': 'a', 'ẳ': 'a', 'ẵ': 'a',
    'è': 'e', 'é': 'e', 'ẹ': 'e', 'ẻ': 'e', 'ẽ': 'e',
    'ê': 'e', 'ề': 'e', 'ế': 'e', 'ệ': 'e', 'ể': 'e', 'ễ': 'e',
    'ì': 'i', 'í': 'i', 'ị': 'i', 'ỉ': 'i', 'ĩ': 'i',
    'ò': 'o', 'ó': 'o', 'ọ': 'o', 'ỏ': 'o', 'õ': 'o',
    'ô': 'o', 'ồ': 'o', 'ố': 'o', 'ộ': 'o', 'ổ': 'o', 'ỗ': 'o',
    'ơ': 'o', 'ờ': 'o', 'ớ': 'o', 'ợ': 'o', 'ở': 'o', 'ỡ': 'o',
    'ù': 'u', 'ú': 'u', 'ụ': 'u', 'ủ': 'u', 'ũ': 'u',
    'ư': 'u', 'ừ': 'u', 'ứ': 'u', 'ự': 'u', 'ử': 'u', 'ữ': 'u',
    'ỳ': 'y', 'ý': 'y', 'ỵ': 'y', 'ỷ': 'y', 'ỹ': 'y',
    'đ': 'd'
  };

  return title
    .toLowerCase()
    .split('')
    .map(char => vietnameseMap[char] || char)
    .join('')
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
};

export const formatDate = (dateString: string): string => {
  return new Intl.DateTimeFormat('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(dateString));
};

export const formatDateShort = (dateString: string): string => {
  return new Intl.DateTimeFormat('vi-VN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(new Date(dateString));
};

export const getCategoryLabel = (categories: NewsCategory[] | JobCategory[], slug: string): string => {
  return categories.find(cat => cat.slug === slug)?.name || slug;
};

// Vietnamese category mappings
export const vietnameseNewsCategories = [
  { value: 'tin-cong-ty', label: 'Tin công ty' },
  { value: 'san-pham-dich-vu', label: 'Sản phẩm & Dịch vụ' },
  { value: 'su-kien', label: 'Sự kiện' },
  { value: 'khuyen-mai', label: 'Khuyến mại' },
  { value: 'tin-tuc-nganh', label: 'Tin tức ngành' }
];

export const vietnameseJobCategories = [
  { value: 'ban-hang', label: 'Bán hàng' },
  { value: 'ky-thuat', label: 'Kỹ thuật' },
  { value: 'dich-vu-khach-hang', label: 'Dịch vụ khách hàng' },
  { value: 'van-hanh', label: 'Vận hành' },
  { value: 'quan-ly', label: 'Quản lý' }
];

export const employmentTypes = [
  { value: 'full_time', label: 'Toàn thời gian' },
  { value: 'part_time', label: 'Bán thời gian' },
  { value: 'contract', label: 'Hợp đồng' },
  { value: 'temporary', label: 'Tạm thời' }
];

export const experienceLevels = [
  { value: 'entry', label: 'Mới ra trường' },
  { value: 'junior', label: 'Dưới 2 năm' },
  { value: 'mid', label: '2-5 năm' },
  { value: 'senior', label: '5-10 năm' },
  { value: 'lead', label: 'Trên 10 năm' }
];

export const vietnameseProductCategories = [
  { value: 'cao-cap', label: 'Cao cấp' },
  { value: 'trung-cap', label: 'Trung cấp' },
  { value: 'pho-thong', label: 'Phổ thông' }
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(price);
};