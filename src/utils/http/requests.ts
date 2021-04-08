import axios, { AxiosResponse } from 'axios';
import { Environment } from 'global/environment';
import { handleHttpError } from './handleHttpError';
import { RequestConfig } from './types';

const axiosInstance = axios.create({
  baseURL: Environment.BACKEND_API,
  headers: { Authorization: 'mock token' }, // replace with real token
});

function makeHttpRequest<T>(apiCall: () => Promise<AxiosResponse<T>>, mapData?: (data: any) => T): Promise<T> {
  return new Promise(async (resolve, reject) => {
    try {
      const data: AxiosResponse = await apiCall();
      resolve(mapData ? mapData(data.data) : data.data);
    } catch (e) {
      reject(handleHttpError(e));
    }
  });
}

export function getRequest<T>(path: string, config?: RequestConfig<T>): Promise<T> {
  return makeHttpRequest<T>(() => axiosInstance.get(path, config?.options), config?.mapData);
}

export function postRequest<T>(path: string, data: any, config?: RequestConfig<T>): Promise<T> {
  return makeHttpRequest<T>(() => axiosInstance.post(path, data, config?.options), config?.mapData);
}

export function putRequest<T>(path: string, data: any, config?: RequestConfig<T>): Promise<T> {
  return makeHttpRequest<T>(() => axiosInstance.put(path, data, config?.options), config?.mapData);
}

export function deleteRequest<T>(path: string, config?: RequestConfig<T>): Promise<T> {
  return makeHttpRequest<T>(() => axiosInstance.delete(path, config?.options), config?.mapData);
}
