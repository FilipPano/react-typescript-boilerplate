import * as ReactQuery from 'react-query';
import { ErrorType } from 'utils/http';
import { createProductAPI } from './api';
import { Product } from 'services/products/types';

export function useCreateProduct() {
  const { mutate, isLoading, isError } = ReactQuery.useMutation<void, ErrorType, Product>(createProductAPI);

  return {
    createProduct: mutate,
    isLoading,
    isError,
  };
}
