export interface Product {
  id: string;
  name: string;
  category: 'cao-cap' | 'trung-cap' | 'pho-thong';
  price: number;
  priceFormatted: string;
  specs: string;
  features: string[];
  image: string;
  badge?: string;
  range: number; // km
  power: number; // kW
  battery: string;
  weight: number; // kg
  maxSpeed: number; // km/h
  chargingTime: string;
  warranty: string;
  available: boolean;
}

export interface ProductCategory {
  id: string;
  name: string;
  displayName: string;
  count: number;
  description: string;
}
