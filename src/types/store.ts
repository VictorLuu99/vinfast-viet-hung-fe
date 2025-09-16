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
  googleMapsUrl?: string;
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
    facebook2: string;
    zalo?: string;
    youtube?: string;
  };
}
