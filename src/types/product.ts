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
  power: number; // W
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
  
  // Extended properties for comprehensive product data
  tagline?: string;
  description?: string;
  keySpecs?: {
    maxSpeed?: string;
    range?: string;
    storage?: string;
    battery?: string;
    chargingTime?: string;
    motor?: string;
    maxPower?: string;
    weight?: string;
    waterResistance?: string;
  };
  detailedSpecs?: {
    motorPower?: string;
    batteryType?: string;
    batteryCapacity?: string;
    chargingType?: string;
    brakeSystem?: string;
    suspension?: string;
    wheelSize?: string;
    lighting?: string;
    display?: string;
    waterResistance?: string;
  };
  colorVariants?: Record<string, string>;
}

export interface ProductCategory {
  id: string;
  name: string;
  displayName: string;
  count: number;
  description: string;
}
