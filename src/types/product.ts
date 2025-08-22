export interface Product {
  id: string;
  name: string;
  category: 'cao-cap' | 'trung-cap' | 'pho-thong';
  price: number;
  originalPrice?: number;
  priceFormatted: string;
  originalPriceFormatted?: string;
  discount?: number;
  specs: string;
  features: string[];
  image: string;
  gallery?: string[];
  badge?: string;
  range: number; // km
  power: number; // kW
  battery: string;
  weight: number; // kg
  maxSpeed: number; // km/h
  chargingTime: string;
  warranty: string;
  available: boolean;
  colors?: string[];
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  motorType?: string;
  brakeSystem?: string;
  lighting?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  displayName: string;
  count: number;
  description: string;
}
