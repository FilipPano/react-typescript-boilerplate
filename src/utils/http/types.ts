import { AxiosRequestConfig } from 'axios';

export interface ErrorType {
  statusCode: number;
  message: string;
}

export interface RequestConfig<T> {
  options?: AxiosRequestConfig;
  mapData?: (data: any) => T;
}
