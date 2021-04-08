import { Product } from 'services/products/types';

export interface ProductAPIResponse {
  id: string;
  'product_name'?: string;
}

export type ProductCollection = Product[]
