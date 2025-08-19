import { Product } from '@/types/product';

export const products: Product[] = [
  // HIGH-CLASS CATEGORY (CAO CẤP) - 3 MODELS
  {
    id: 'theon-s',
    name: 'VinFast Theon S',
    category: 'cao-cap',
    price: 40000000,
    specs: 'Tầm hoạt động: 100km | Công nghệ AI cao cấp | Thiết kế siêu premium',
    features: [
      'Màn hình cảm ứng 10"',
      'Hệ thống định vị GPS',
      'Phanh ABS cao cấp'
    ],
    image: '/images/bikes/vinfast-theon-s-official.webp',
    badge: 'Cao cấp - Flagship',
    range: 100,
    maxSpeed: 65,
    description: 'Flagship cao cấp với công nghệ AI và thiết kế siêu premium'
  },
  {
    id: 'vento-s',
    name: 'VinFast Vento S',
    category: 'cao-cap',
    price: 36500000,
    specs: 'Tầm hoạt động: 95km | Thiết kế thể thao | Hiệu suất cao',
    features: [
      'Tốc độ tối đa 60km/h',
      'Thiết kế aerodynamic',
      'Pin lithium cao cấp'
    ],
    image: '/images/bikes/vinfast-vento-s-official.webp',
    badge: 'Cao cấp - Thể thao',
    range: 95,
    maxSpeed: 60,
    description: 'Xe cao cấp với thiết kế thể thao và hiệu suất vượt trội'
  },
  {
    id: 'feliz-s',
    name: 'VinFast Feliz S',
    category: 'cao-cap',
    price: 33500000,
    specs: 'Tầm hoạt động: 90km | Thiết kế sang trọng | Hiệu suất vượt trội',
    features: [
      'Tốc độ tối đa 55km/h',
      'Phanh ABS an toàn',
      'Cốp xe rộng rãi'
    ],
    image: '/images/bikes/vinfast-feliz-s-official.webp',
    badge: 'Cao cấp - Cổ điển',
    range: 90,
    maxSpeed: 55,
    description: 'Thiết kế sang trọng cổ điển với hiệu suất vượt trội'
  },

  // INTERMEDIATE CATEGORY (TRUNG CẤP) - 4 MODELS
  {
    id: 'vento-neo',
    name: 'VinFast Vento Neo',
    category: 'trung-cap',
    price: 29000000,
    specs: 'Tầm hoạt động: 80km | Thiết kế trẻ trung | Cân bằng giá - chất lượng',
    features: [
      'Tốc độ 50km/h',
      'Màn hình LCD thông minh',
      'Sạc nhanh 4 giờ'
    ],
    image: '/images/bikes/vinfast-vento-neo-official.webp',
    badge: 'Trung cấp - Hiện đại',
    range: 80,
    maxSpeed: 50,
    description: 'Thiết kế hiện đại với cân bằng tốt giữa giá cả và chất lượng'
  },
  {
    id: 'feliz-neo',
    name: 'VinFast Feliz Neo',
    category: 'trung-cap',
    price: 28900000,
    specs: 'Tầm hoạt động: 85km | Cân bằng hiệu suất và giá cả | Lý tưởng gia đình',
    features: [
      'Tốc độ 50km/h',
      'Pin dung lượng trung bình',
      'Thiết kế hiện đại'
    ],
    image: '/images/bikes/vinfast-feliz-neo-official.webp',
    badge: 'Trung cấp - Hiệu suất',
    range: 85,
    maxSpeed: 50,
    description: 'Lý tưởng cho gia đình với hiệu suất và giá cả cân bằng'
  },
  {
    id: 'klara-s2',
    name: 'VinFast Klara S2',
    category: 'trung-cap',
    price: 26500000,
    specs: 'Tầm hoạt động: 75km | Phong cách trẻ trung | Công nghệ cơ bản',
    features: [
      'Màn hình LED',
      'USB sạc điện thoại',
      'Khoang chứa đồ'
    ],
    image: '/images/bikes/vinfast-klara-s2-official.webp',
    badge: 'Trung cấp - Thông minh',
    range: 75,
    maxSpeed: 45,
    description: 'Phong cách trẻ trung với các tính năng thông minh cơ bản'
  },
  {
    id: 'klara-neo',
    name: 'VinFast Klara Neo',
    category: 'trung-cap',
    price: 27900000,
    specs: 'Tầm hoạt động: 80km | Công nghệ kết nối | Smartphone integration',
    features: [
      'Kết nối Bluetooth',
      'Ứng dụng VinFast',
      'Theo dõi từ xa'
    ],
    image: '/images/bikes/vinfast-klara-neo-official.webp',
    badge: 'Trung cấp - Kết nối',
    range: 80,
    maxSpeed: 50,
    description: 'Tích hợp công nghệ kết nối thông minh với ứng dụng di động'
  },

  // COMMON CATEGORY (PHỔ THÔNG) - 6 MODELS
  {
    id: 'evo-grand',
    name: 'VinFast Evo Grand',
    category: 'pho-thong',
    price: 22000000,
    specs: 'Tầm hoạt động: 80km | Vận hành bền bỉ | Chinh phục mọi hành trình',
    features: [
      'Bền bỉ vượt trội',
      'Thiết kế thể thao',
      'Phù hợp đi xa'
    ],
    image: '/images/bikes/vinfast-evo-grand-official.webp',
    badge: 'Phổ thông - Bán chạy',
    range: 80,
    maxSpeed: 45,
    description: 'Xe bán chạy với độ bền cao, phù hợp cho mọi hành trình'
  },
  {
    id: 'evo200',
    name: 'VinFast Evo200',
    category: 'pho-thong',
    price: 21000000,
    specs: 'Tầm hoạt động: 75km | Hiệu suất ổn định | Phù hợp công việc',
    features: [
      'Hiệu suất ổn định',
      'Vận hành kinh tế',
      'Bảo trì dễ dàng'
    ],
    image: '/images/bikes/vinfast-evo200-official.webp',
    badge: 'Phổ thông - Chuẩn',
    range: 75,
    maxSpeed: 45,
    description: 'Hiệu suất ổn định, lý tưởng cho việc đi làm hàng ngày'
  },
  {
    id: 'evo-neo',
    name: 'VinFast Evo Neo',
    category: 'pho-thong',
    price: 20000000,
    specs: 'Tầm hoạt động: 80km | Đô thị thông minh | Tiết kiệm năng lượng',
    features: [
      'Thiết kế compact',
      'Tiện nghi đô thị',
      'Kiểu dáng trẻ trung'
    ],
    image: '/images/bikes/vinfast-evo-neo-official.webp',
    badge: 'Phổ thông - Thông minh',
    range: 80,
    maxSpeed: 45,
    description: 'Thiết kế compact hoàn hảo cho việc di chuyển trong đô thị'
  },
  {
    id: 'evo200-lite',
    name: 'VinFast Evo200 Lite',
    category: 'pho-thong',
    price: 19000000,
    specs: 'Tầm hoạt động: 70km | Phiên bản lite | Giá cả hợp lý',
    features: [
      'Giá cả phải chăng',
      'Vận hành tin cậy',
      'Chi phí bảo trì thấp'
    ],
    image: '/images/bikes/vinfast-evo200-official.webp',
    badge: 'Phổ thông - Kinh tế',
    range: 70,
    maxSpeed: 40,
    description: 'Phiên bản kinh tế với giá cả phải chăng và độ tin cậy cao'
  },
  {
    id: 'evo-lite-neo',
    name: 'VinFast Evo Lite Neo',
    category: 'pho-thong',
    price: 17500000,
    specs: 'Tầm hoạt động: 65km | Phiên bản cơ bản | Phù hợp di chuyển gần',
    features: [
      'Pin rời tiện lợi',
      'Vận hành êm ái',
      'Tiết kiệm chi phí'
    ],
    image: '/images/bikes/vinfast-evo-neo-official.webp',
    badge: 'Phổ thông - Cơ bản',
    range: 65,
    maxSpeed: 40,
    description: 'Phiên bản cơ bản với pin rời tiện lợi, phù hợp di chuyển gần'
  },
  {
    id: 'motio',
    name: 'VinFast Motio',
    category: 'pho-thong',
    price: 12000000,
    specs: 'Tầm hoạt động: 50km | Pin rời tiện lợi | Giá học sinh phù hợp',
    features: [
      'Phù hợp học sinh',
      'Pin rời dễ sạc',
      'Giá rẻ nhất dòng'
    ],
    image: '/images/bikes/vinfast-evo-neo-official.webp',
    badge: 'Phổ thông - Học sinh',
    range: 50,
    maxSpeed: 35,
    description: 'Giá rẻ nhất trong dòng, phù hợp cho học sinh và di chuyển ngắn'
  }
];

export const categories = [
  { id: 'all', name: 'all', displayName: 'Tất cả', count: 13 },
  { id: 'cao-cap', name: 'cao-cap', displayName: 'Cao cấp', count: 3 },
  { id: 'trung-cap', name: 'trung-cap', displayName: 'Trung cấp', count: 4 },
  { id: 'pho-thong', name: 'pho-thong', displayName: 'Phổ thông', count: 6 }
];

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') {
    return products;
  }
  return products.filter(product => product.category === category);
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
  }).format(price).replace('₫', 'đ');
};