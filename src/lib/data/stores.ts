import { Store, ContactInfo } from '@/types/store';

export const stores: Store[] = [
  {
    id: 1,
    name: 'VinFast Việt Hùng CS1',
    address: 'Tam Hồng – Yên Lạc – Vĩnh Phúc',
    phone: '086.266.9588',
    email: 'tamhong@vinfast-viethung.vn',
    location: {
      city: 'Yên Lạc',
      province: 'Vĩnh Phúc',
      coordinates: {
        lat: 21.2312736,
        lng: 105.5657291
      }
    },
    googleMapsUrl: 'https://maps.app.goo.gl/xCp9CMXB5haUAigZA',
    embedGGMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.8599637448397!2d105.56518551571821!3d21.229495149039153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134f1e1a79727a7%3A0x3dd7b45e652248e4!2zVmluRmFzdCBWaeG7h3QgSMO5bmc!5e0!3m2!1svi!2s!4v1758529170403!5m2!1svi!2s",
    status: 'active',
    workingHours: '7h30AM - 5h30PM (Thứ 2 - Chủ nhật)',
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
    name: 'VinFast Việt Hùng CS2',
    address: '337 Hai Bà Trưng – Tiền Châu – Phúc Yên – Vĩnh Phúc',
    phone: '0961.456.515',
    email: 'haibatrung@vinfast-viethung.vn',
    location: {
      city: 'Phúc Yên',
      province: 'Vĩnh Phúc',
      coordinates: {
        lat: 20.9950092,
        lng: 105.8694013
      }
    },
    googleMapsUrl: 'https://maps.app.goo.gl/PTjdi9y5t3wFzA1FA',
    embedGGMapsUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7438.090493246148!2d105.6940871!3d21.2300543!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134fd61d6302ffd%3A0x4f940142672755f0!2zVmluRmFzdCBWaeG7h3QgSMO5bmcgMg!5e0!3m2!1svi!2s!4v1758529321737!5m2!1svi!2s",
    status: 'active',
    workingHours: '7h30AM - 5h30PM (Thứ 2 - Chủ nhật)',
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
    name: 'VinFast Việt Hùng CS3',
    address: 'Khu Nam Đồng Mạ, đường Nguyễn Tất Thành, Thanh Miếu, Việt Trì, Phú Thọ',
    phone: '0829.912.555',
    email: 'namdongma@vinfast-viethung.vn',
    location: {
      city: 'Việt Trì',
      province: 'Phú Thọ',
      coordinates: {
        lat: 21.3109412,
        lng: 105.4157617
      }
    },
    googleMapsUrl: 'https://maps.app.goo.gl/Z8YTF4dmgkKDdK4r6',
    embedGGMapsUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29736.01521158436!2d105.4157617!3d21.3109412!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6928029c5d071bf3%3A0x3d7a6a48da43f210!2zWEUgTcOBWSDEkEnhu4ZOIFZJTkZBU1QgVknhu4ZUIEjDmU5HIFBIw5ogVEjhu4w!5e0!3m2!1svi!2s!4v1758529355878!5m2!1svi!2s",
    status: 'active',
    workingHours: '7h30AM - 5h30PM (Thứ 2 - Chủ nhật)',
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
    name: 'VinFast Việt Hùng CS4',
    address: '2070 Đại lộ Hùng Vương, P. Nông Trang, TP. Việt Trì, Phú Thọ',
    phone: '036.3822.638',
    email: 'hungvuong@vinfast-viethung.vn',
    location: {
      city: 'Việt Trì',
      province: 'Phú Thọ',
      coordinates: {
        lat: 21.3332758,
        lng: 105.3749727
      }
    },
    googleMapsUrl: 'https://maps.app.goo.gl/9jmjFAV3YaunYvnx5',
    embedGGMapsUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d232.27727405505163!2d105.3749727!3d21.3332758!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134930b71adfe93%3A0x2d571a17e214fa4a!2zWGUgbcOheSDEkWnhu4duIFZpbkZhc3QgVmnhu4d0IFRyw6wgUGjDuiBUaOG7jQ!5e0!3m2!1svi!2s!4v1758529392516!5m2!1svi!2s",
    status: 'active',
    workingHours: '7h30AM - 5h30PM (Thứ 2 - Chủ nhật)',
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
  email: 'vinfastviethung@gmail.com',
  address: 'VinFast Việt Hùng - Hệ thống đại lý chính hãng tại Vĩnh Phúc và Phú Thọ',
  workingHours: '07:30 - 17:30 (Thứ 2 - Chủ nhật)',
  socialMedia: {
    facebook: 'https://www.facebook.com/profile.php?id=61567009648021',
    facebook2: 'https://www.facebook.com/vinfastviethung2',
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
