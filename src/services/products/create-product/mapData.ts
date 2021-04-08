import { Product } from 'services/products/types';

export function mapProductForBackend(product: Product) {
  return ({
    ...product,
    product_name: product.productName,
  });
}
