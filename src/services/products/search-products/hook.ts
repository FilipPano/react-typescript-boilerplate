import * as ReactQuery from 'react-query';
import { ErrorType } from 'utils/http';
import { searchProductsAPI } from './api';
import { ProductCollection } from './types';

const SEARCH_PRODUCTS_KEY = 'searchProducts';

export function useSearchProducts() {
  const {
    data,
    isLoading,
    isError,
  } = ReactQuery.useQuery<ProductCollection, ErrorType>(SEARCH_PRODUCTS_KEY, searchProductsAPI);

  return {
    products: data,
    isLoading,
    isError,
  };
}
