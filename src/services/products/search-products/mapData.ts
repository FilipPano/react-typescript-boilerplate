import { ProductAPIResponse } from './types';

export function mapProductsForClient(products: ProductAPIResponse[]) {
  return products.map(product => ({
    ...product,
    productName: product.product_name || 'unknown',
  }));
}
