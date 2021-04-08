import { postRequest } from 'utils/http';
import { productsUrl } from 'services/products/url';
import { Product } from 'services/products/types';
import { mapProductForBackend } from './mapData';

export async function createProductAPI(product: Product) {
  return postRequest<void>(productsUrl, mapProductForBackend(product));
}
