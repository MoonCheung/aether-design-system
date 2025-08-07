import { type QueryFunction } from '@tanstack/react-query';
import axios, { type AxiosError } from 'axios';

import { type UninterceptedApiError } from '~/types/api';

export const apiMock = axios.create({
  baseURL: 'http://localhost:5173/api/mock',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
})

apiMock.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
  if (config.headers) {
    config.headers.Authorization = token ? `Bearer ${token}` : ''
  }
  return config
})

apiMock.interceptors.response.use(
  (config) => {
    return config;
  },
  (error: AxiosError<UninterceptedApiError>) => {
    // parse error
    if (error.response?.data.message) {
      return Promise.reject({
        ...error,
        response: {
          ...error.response,
          data: {
            ...error.response.data,
            message:
              typeof error.response.data.message === 'string'
                ? error.response.data.message
                : Object.values(error.response.data.message)[0][0],
          },
        },
      });
    }
    return Promise.reject(error);
  },
);

export default apiMock;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mockQuery: QueryFunction<any> = async ({ queryKey }) => {
  const [url] = queryKey;

  const { data } = await apiMock.get(url as string);
  return data;
};
