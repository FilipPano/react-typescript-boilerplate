import { postRequest } from 'utils/http';
import { productsUrl } from 'services/products/url';
import { mapProductForBackend } from './mapData';
import { Product } from 'services/products/types';

export async function createProductAPI(product: Product) {
  return postRequest<void>(productsUrl, mapProductForBackend(product));
}
