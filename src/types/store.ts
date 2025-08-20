export interface Store {
  id: number;
  name: string;
  address: string;
  phone: string;
  email?: string;
  location: {
    city: string;
    province: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  status: 'active' | 'inactive';
  workingHours?: string;
  services: string[];
  features: string[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  workingHours: string;
  socialMedia?: {
    facebook?: string;
    zalo?: string;
    youtube?: string;
  };
}
