import { Store } from '@/types/store';

export const stores: Store[] = [
  {
    id: 1,
    name: 'Cơ sở 1',
    address: 'Tam Hồng – Yên Lạc – Vĩnh Phúc',
    phone: '0862669588',
    location: {
      city: 'Yên Lạc',
      province: 'Vĩnh Phúc'
    },
    status: 'active',
    coordinates: {
      lat: 21.325,
      lng: 105.615
    }
  },
  {
    id: 2,
    name: 'Cơ sở 2',
    address: '337 Hai Bà Trưng – Tiền Châu – Phúc Yên – Vĩnh Phúc',
    phone: '0961456515',
    location: {
      city: 'Phúc Yên',
      province: 'Vĩnh Phúc'
    },
    status: 'active',
    coordinates: {
      lat: 21.320,
      lng: 105.695
    }
  },
  {
    id: 3,
    name: 'Cơ sở 3',
    address: 'Khu Nam Đồng Mạ, Nguyễn Tất Thành Street, Thanh Miếu, Việt Trì, Phú Thọ',
    phone: '0829912555',
    location: {
      city: 'Việt Trì',
      province: 'Phú Thọ'
    },
    status: 'active',
    coordinates: {
      lat: 21.335,
      lng: 105.420
    }
  },
  {
    id: 4,
    name: 'Cơ sở 4',
    address: '2070 Hùng Vương Avenue, Nông Trang Ward, Việt Trì City, Phú Thọ',
    phone: '0363822638',
    location: {
      city: 'Việt Trì',
      province: 'Phú Thọ'
    },
    status: 'active',
    coordinates: {
      lat: 21.340,
      lng: 105.415
    }
  }
];

export const formatPhoneNumber = (phone: string): string => {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1.$2.$3');
};

export const getPhoneHref = (phone: string): string => {
  return `tel:${phone}`;
};