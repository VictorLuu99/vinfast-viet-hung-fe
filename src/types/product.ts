export interface Product {
  id: string;
  name: string;
  category: 'cao-cap' | 'trung-cap' | 'pho-thong';
  price: number;
  specs: string;
  features: string[];
  image: string;
  badge: string;
  range: number; // km
  maxSpeed?: number; // km/h
  description?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  displayName: string;
  count: number;
}

export interface ProductFilterState {
  activeCategory: string;
  products: Product[];
  filteredProducts: Product[];
}