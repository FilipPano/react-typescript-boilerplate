import { getRequest } from 'utils/http';
import { mapProductsForClient } from './mapData';
import { ProductCollection } from './types';
import { productsUrl } from 'services/products/url';

export async function searchProductsAPI() {
  return getRequest<ProductCollection>(productsUrl, { mapData: mapProductsForClient });
}
