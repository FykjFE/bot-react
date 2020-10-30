import axios, { AxiosRequestConfig, Method } from 'axios';
import { message } from 'antd';
import baseUrl from './index';

const msg = new Map([[405, '请求类型错误']]);
const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/api' : baseUrl,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  validateStatus: function () {
    return true;
  },
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
    if (response.status !== 200) {
      message.error(msg.get(response.status));
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default async function http(
  method: Method,
  url: string,
  config?: AxiosRequestConfig,
): Promise<Res<any>> {
  const { data } = await instance(url, { ...config, method });
  return data;
}
