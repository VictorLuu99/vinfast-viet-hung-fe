export interface Store {
  id: number;
  name: string;
  address: string;
  phone: string;
  location: {
    city: string;
    province: string;
  };
  status: 'active' | 'inactive';
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface ContactMethod {
  type: 'phone' | 'email' | 'address';
  label: string;
  value: string;
  href?: string;
  icon?: string;
}