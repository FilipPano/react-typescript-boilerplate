import { getRequest } from 'utils/http';
import { productsUrl } from 'services/products/url';
import { mapProductsForClient } from './mapData';
import { ProductCollection } from './types';

export async function searchProductsAPI() {
  return getRequest<ProductCollection>(productsUrl, { mapData: mapProductsForClient });
}
