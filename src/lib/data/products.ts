import { Product, ProductCategory } from '@/types/product';

export const productCategories: ProductCategory[] = [
  {
    id: 'all',
    name: 'all',
    displayName: 'Tất cả',
    count: 13,
    description: 'Tất cả các dòng xe máy điện VinFast'
  },
  {
    id: 'cao-cap',
    name: 'cao-cap',
    displayName: 'Cao cấp',
    count: 3,
    description: 'Dòng xe cao cấp với công nghệ tiên tiến'
  },
  {
    id: 'trung-cap',
    name: 'trung-cap',
    displayName: 'Trung cấp',
    count: 4,
    description: 'Dòng xe trung cấp cân bằng giữa chất lượng và giá cả'
  },
  {
    id: 'pho-thong',
    name: 'pho-thong',
    displayName: 'Phổ thông',
    count: 6,
    description: 'Dòng xe phổ thông phù hợp với mọi người dùng'
  }
];

export const products: Product[] = [
  // CAO CẤP (Premium) - 3 MODELS
  {
    id: 'theon-s',
    name: 'VinFast Theon S',
    category: 'cao-cap',
    price: 40000000,
    priceFormatted: '40.000.000đ',
    specs: 'Tầm hoạt động: 100km | Công nghệ AI cao cấp | Thiết kế siêu premium',
    features: [
      'Màn hình cảm ứng 10"',
      'Hệ thống định vị GPS',
      'Phanh ABS cao cấp'
    ],
    image: '/images/bikes/vinfast-klara-neo-official.webp',
    badge: 'Cao cấp - Flagship',
    range: 100,
    power: 15,
    battery: '72V 60Ah',
    weight: 120,
    maxSpeed: 120,
    chargingTime: '4-6 giờ',
    warranty: '3 năm',
    available: true
  },
  {
    id: 'vento-s',
    name: 'VinFast Vento S',
    category: 'cao-cap',
    price: 36500000,
    priceFormatted: '36.500.000đ',
    specs: 'Tầm hoạt động: 95km | Thiết kế thể thao | Hiệu suất cao',
    features: [
      'Tốc độ tối đa 60km/h',
      'Thiết kế aerodynamic',
      'Pin lithium cao cấp'
    ],
    image: '/images/bikes/vinfast-feliz-s-official.webp',
    badge: 'Cao cấp - Thể thao',
    range: 95,
    power: 14,
    battery: '72V 55Ah',
    weight: 115,
    maxSpeed: 60,
    chargingTime: '4-6 giờ',
    warranty: '3 năm',
    available: true
  },
  {
    id: 'feliz-s',
    name: 'VinFast Feliz S',
    category: 'cao-cap',
    price: 33500000,
    priceFormatted: '33.500.000đ',
    specs: 'Tầm hoạt động: 90km | Thiết kế sang trọng | Hiệu suất vượt trội',
    features: [
      'Tốc độ tối đa 55km/h',
      'Phanh ABS an toàn',
      'Cốp xe rộng rãi'
    ],
    image: '/images/bikes/vinfast-feliz-s-official.webp',
    badge: 'Cao cấp - Cổ điển',
    range: 90,
    power: 13,
    battery: '72V 50Ah',
    weight: 110,
    maxSpeed: 55,
    chargingTime: '4-6 giờ',
    warranty: '3 năm',
    available: true
  },

  // TRUNG CẤP (Mid-range) - 4 MODELS
  {
    id: 'vento-neo',
    name: 'VinFast Vento Neo',
    category: 'trung-cap',
    price: 29000000,
    priceFormatted: '29.000.000đ',
    specs: 'Tầm hoạt động: 80km | Thiết kế trẻ trung | Cân bằng giá - chất lượng',
    features: [
      'Tốc độ 50km/h',
      'Màn hình LCD thông minh',
      'Sạc nhanh 4 giờ'
    ],
    image: '/images/bikes/vinfast-vento-neo-official.webp',
    badge: 'Trung cấp - Hiện đại',
    range: 80,
    power: 12,
    battery: '60V 45Ah',
    weight: 105,
    maxSpeed: 50,
    chargingTime: '4-5 giờ',
    warranty: '2 năm',
    available: true
  },
  {
    id: 'feliz-neo',
    name: 'VinFast Feliz Neo',
    category: 'trung-cap',
    price: 28900000,
    priceFormatted: '28.900.000đ',
    specs: 'Tầm hoạt động: 85km | Cân bằng hiệu suất và giá cả | Lý tưởng gia đình',
    features: [
      'Tốc độ 50km/h',
      'Pin dung lượng trung bình',
      'Thiết kế hiện đại'
    ],
    image: '/images/bikes/vinfast-feliz-neo-official.webp',
    badge: 'Trung cấp - Hiệu suất',
    range: 85,
    power: 12,
    battery: '60V 48Ah',
    weight: 108,
    maxSpeed: 50,
    chargingTime: '4-5 giờ',
    warranty: '2 năm',
    available: true
  },
  {
    id: 'klara-s2',
    name: 'VinFast Klara S2',
    category: 'trung-cap',
    price: 26500000,
    priceFormatted: '26.500.000đ',
    specs: 'Tầm hoạt động: 75km | Phong cách trẻ trung | Công nghệ cơ bản',
    features: [
      'Màn hình LED',
      'USB sạc điện thoại',
      'Khoang chứa đồ'
    ],
    image: '/images/bikes/vinfast-klara-neo-official.webp',
    badge: 'Trung cấp - Thông minh',
    range: 75,
    power: 11,
    battery: '60V 40Ah',
    weight: 100,
    maxSpeed: 45,
    chargingTime: '4-5 giờ',
    warranty: '2 năm',
    available: true
  },
  {
    id: 'klara-neo',
    name: 'VinFast Klara Neo',
    category: 'trung-cap',
    price: 27900000,
    priceFormatted: '27.900.000đ',
    specs: 'Tầm hoạt động: 80km | Công nghệ kết nối | Smartphone integration',
    features: [
      'Kết nối Bluetooth',
      'Ứng dụng VinFast',
      'Theo dõi từ xa'
    ],
    image: '/images/bikes/vinfast-klara-neo-official.webp',
    badge: 'Trung cấp - Kết nối',
    range: 80,
    power: 11,
    battery: '60V 42Ah',
    weight: 102,
    maxSpeed: 45,
    chargingTime: '4-5 giờ',
    warranty: '2 năm',
    available: true
  },

  // PHỔ THÔNG (Popular) - 6 MODELS
  {
    id: 'evo-grand',
    name: 'VinFast Evo Grand',
    category: 'pho-thong',
    price: 22000000,
    priceFormatted: '22.000.000đ',
    specs: 'Tầm hoạt động: 80km | Vận hành bền bỉ | Chinh phục mọi hành trình',
    features: [
      'Bền bỉ vượt trội',
      'Thiết kế thể thao',
      'Phù hợp đi xa'
    ],
    image: '/images/bikes/vinfast-evo-grand-official.webp',
    badge: 'Phổ thông - Bán chạy',
    range: 80,
    power: 10,
    battery: '48V 45Ah',
    weight: 95,
    maxSpeed: 40,
    chargingTime: '5-6 giờ',
    warranty: '2 năm',
    available: true
  },
  {
    id: 'evo200',
    name: 'VinFast Evo200',
    category: 'pho-thong',
    price: 21000000,
    priceFormatted: '21.000.000đ',
    specs: 'Tầm hoạt động: 75km | Hiệu suất ổn định | Phù hợp công việc',
    features: [
      'Hiệu suất ổn định',
      'Vận hành kinh tế',
      'Bảo trì dễ dàng'
    ],
    image: '/images/bikes/vinfast-evo-grand-official.webp',
    badge: 'Phổ thông - Chuẩn',
    range: 75,
    power: 10,
    battery: '48V 42Ah',
    weight: 92,
    maxSpeed: 40,
    chargingTime: '5-6 giờ',
    warranty: '2 năm',
    available: true
  },
  {
    id: 'evo-neo',
    name: 'VinFast Evo Neo',
    category: 'pho-thong',
    price: 20000000,
    priceFormatted: '20.000.000đ',
    specs: 'Tầm hoạt động: 80km | Đô thị thông minh | Tiết kiệm năng lượng',
    features: [
      'Thiết kế compact',
      'Tiện nghi đô thị',
      'Kiểu dáng trẻ trung'
    ],
    image: '/images/bikes/vinfast-evo-neo-official.webp',
    badge: 'Phổ thông - Thông minh',
    range: 80,
    power: 9,
    battery: '48V 40Ah',
    weight: 88,
    maxSpeed: 35,
    chargingTime: '5-6 giờ',
    warranty: '2 năm',
    available: true
  },
  {
    id: 'evo200-lite',
    name: 'VinFast Evo200 Lite',
    category: 'pho-thong',
    price: 19000000,
    priceFormatted: '19.000.000đ',
    specs: 'Tầm hoạt động: 70km | Phiên bản lite | Giá cả hợp lý',
    features: [
      'Giá cả phải chăng',
      'Vận hành tin cậy',
      'Chi phí bảo trì thấp'
    ],
    image: '/images/bikes/vinfast-evo-grand-official.webp',
    badge: 'Phổ thông - Kinh tế',
    range: 70,
    power: 9,
    battery: '48V 38Ah',
    weight: 85,
    maxSpeed: 35,
    chargingTime: '5-6 giờ',
    warranty: '2 năm',
    available: true
  },
  {
    id: 'evo-lite-neo',
    name: 'VinFast Evo Lite Neo',
    category: 'pho-thong',
    price: 17500000,
    priceFormatted: '17.500.000đ',
    specs: 'Tầm hoạt động: 65km | Phiên bản cơ bản | Phù hợp di chuyển gần',
    features: [
      'Pin rời tiện lợi',
      'Vận hành êm ái',
      'Tiết kiệm chi phí'
    ],
    image: '/images/bikes/vinfast-evo-neo-official.webp',
    badge: 'Phổ thông - Cơ bản',
    range: 65,
    power: 8,
    battery: '48V 35Ah',
    weight: 80,
    maxSpeed: 30,
    chargingTime: '5-6 giờ',
    warranty: '2 năm',
    available: true
  },
  {
    id: 'motio',
    name: 'VinFast Motio',
    category: 'pho-thong',
    price: 12000000,
    priceFormatted: '12.000.000đ',
    specs: 'Tầm hoạt động: 50km | Pin rời tiện lợi | Giá học sinh phù hợp',
    features: [
      'Phù hợp học sinh',
      'Pin rời dễ sạc',
      'Giá rẻ nhất dòng'
    ],
    image: '/images/bikes/vinfast-evo-neo-official.webp',
    badge: 'Phổ thông - Học sinh',
    range: 50,
    power: 7,
    battery: '48V 30Ah',
    weight: 75,
    maxSpeed: 25,
    chargingTime: '6-7 giờ',
    warranty: '1 năm',
    available: true
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
