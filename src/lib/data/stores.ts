import { Store, ContactInfo } from '@/types/store';

export const stores: Store[] = [
  {
    id: 1,
    name: 'VinFast Việt Hùng - Tam Hồng',
    address: 'Tam Hồng – Yên Lạc – Vĩnh Phúc',
    phone: '086.266.9588',
    email: 'tamhong@vinfast-viethung.vn',
    location: {
      city: 'Yên Lạc',
      province: 'Vĩnh Phúc',
      coordinates: {
        lat: 21.3087,
        lng: 105.6049
      }
    },
    googleMapsUrl: 'https://share.google/Xogixc81rWxJ91799',
    status: 'active',
    workingHours: '8:00 - 20:00 (Thứ 2 - Chủ nhật)',
    services: [
      'Bán xe máy điện VinFast',
      'Bảo hành chính hãng',
      'Sửa chữa, bảo dưỡng',
      'Phụ tùng chính hãng',
      'Tư vấn mua xe'
    ],
    features: [
      'Showroom rộng rãi',
      'Chỗ đậu xe miễn phí',
      'Nhân viên tư vấn chuyên nghiệp',
      'Hỗ trợ trả góp 0%',
      'Giao xe tận nơi'
    ]
  },
  {
    id: 2,
    name: 'VinFast Việt Hùng - Hai Bà Trưng',
    address: '337 Hai Bà Trưng – Tiền Châu – Phúc Yên – Vĩnh Phúc',
    phone: '0961.456.515',
    email: 'haibatrung@vinfast-viethung.vn',
    location: {
      city: 'Phúc Yên',
      province: 'Vĩnh Phúc',
      coordinates: {
        lat: 21.2333,
        lng: 105.7000
      }
    },
    googleMapsUrl: 'https://share.google/lhObfMuihhh2ElGGz',
    status: 'active',
    workingHours: '8:00 - 20:00 (Thứ 2 - Chủ nhật)',
    services: [
      'Bán xe máy điện VinFast',
      'Bảo hành chính hãng',
      'Sửa chữa, bảo dưỡng',
      'Phụ tùng chính hãng',
      'Tư vấn mua xe'
    ],
    features: [
      'Showroom hiện đại',
      'Khu vực trưng bày rộng rãi',
      'Nhân viên tư vấn nhiệt tình',
      'Hỗ trợ trả góp linh hoạt',
      'Dịch vụ hậu mãi tốt'
    ]
  },
  {
    id: 3,
    name: 'VinFast Việt Hùng - Nam Đồng Mạ',
    address: 'Khu Nam Đồng Mạ, đường Nguyễn Tất Thành, Thanh Miếu, Việt Trì, Phú Thọ',
    phone: '0829.912.555',
    email: 'namdongma@vinfast-viethung.vn',
    location: {
      city: 'Việt Trì',
      province: 'Phú Thọ',
      coordinates: {
        lat: 21.3011,
        lng: 105.4300
      }
    },
    googleMapsUrl: 'https://share.google/ZSYwdVbMgzZlfklo4',
    status: 'active',
    workingHours: '8:00 - 20:00 (Thứ 2 - Chủ nhật)',
    services: [
      'Bán xe máy điện VinFast',
      'Bảo hành chính hãng',
      'Sửa chữa, bảo dưỡng',
      'Phụ tùng chính hãng',
      'Tư vấn mua xe'
    ],
    features: [
      'Vị trí thuận tiện',
      'Không gian trưng bày đẹp',
      'Đội ngũ nhân viên trẻ',
      'Chính sách bán hàng hấp dẫn',
      'Dịch vụ khách hàng chu đáo'
    ]
  },
  {
    id: 4,
    name: 'VinFast Việt Hùng - Hùng Vương',
    address: '2070 Đại lộ Hùng Vương, P. Nông Trang, TP. Việt Trì, Phú Thọ',
    phone: '036.3822.638',
    email: 'hungvuong@vinfast-viethung.vn',
    location: {
      city: 'Việt Trì',
      province: 'Phú Thọ',
      coordinates: {
        lat: 21.4000,
        lng: 105.4333
      }
    },
    googleMapsUrl: 'https://share.google/07voeuLqcU5SWHKr1',
    status: 'active',
    workingHours: '8:00 - 20:00 (Thứ 2 - Chủ nhật)',
    services: [
      'Bán xe máy điện VinFast',
      'Bảo hành chính hãng',
      'Sửa chữa, bảo dưỡng',
      'Phụ tùng chính hãng',
      'Tư vấn mua xe'
    ],
    features: [
      'Showroom mới khai trương',
      'Thiết kế hiện đại',
      'Nhân viên được đào tạo bài bản',
      'Chính sách ưu đãi đặc biệt',
      'Hỗ trợ khách hàng 24/7'
    ]
  }
];

export const contactInfo: ContactInfo = {
  phone: '086.266.9588',
  email: 'info@vinfast-viethung.vn',
  address: 'VinFast Việt Hùng - Hệ thống đại lý chính hãng tại Vĩnh Phúc và Phú Thọ',
  workingHours: '8:00 - 20:00 (Thứ 2 - Chủ nhật)',
  socialMedia: {
    facebook: 'https://www.facebook.com/profile.php?id=61567009648021',
    zalo: 'https://zalo.me/0862669588',
    youtube: 'https://youtube.com/@vinfastviethung'
  }
};

export const getStoreById = (id: number): Store | undefined => {
  return stores.find(store => store.id === id);
};

export const getStoresByProvince = (province: string): Store[] => {
  return stores.filter(store => store.location.province === province);
};
