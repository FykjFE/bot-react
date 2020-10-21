import axios, { AxiosPromise } from 'axios';
import { message } from 'antd';
import baseUrl from './index';

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/api' : baseUrl,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
});
instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = sessionStorage.getItem('token')
      ? `Bearer ${sessionStorage.getItem('token')}`
      : '';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
instance.interceptors.response.use(
  (response) => {
    if (response.data.code !== 0) {
      message.error(response.data.msg);
    }
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default function http(method: any, url: string, config?: any): AxiosPromise {
  return instance(url, { ...config, method });
}
