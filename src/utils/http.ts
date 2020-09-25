import axios from 'axios';
import { message } from 'antd';
import baseUrl from './index';

const http = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
});
http.interceptors.request.use(
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
http.interceptors.response.use(
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
export default http;
