import axios, { Method, AxiosRequestConfig } from 'axios';
import { message } from 'antd';
import baseUrl from './index';

/**
 * http封装请求
 * @param method
 * @param url
 * @param request
 * @param options
 */
const http = async (
  method: Method,
  url: string,
  request?: { data?: any; params?: Record<string, unknown> },
  options?: AxiosRequestConfig,
): Promise<Res<unknown>> => {
  try {
    const res = await axios({
      method,
      url,
      data: request ? request.data : null,
      params: request ? request.params : null,
      timeout: 10000,
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      validateStatus: () => {
        return true;
      },
      ...options,
    });
    const { status, data } = res;
    if (status === 200) {
      return data;
    } else if (status === 404) {
      message.error('api地址不存在');
      return data;
    } else {
      return data;
    }
  } catch (e) {
    message.error(e.toString());
    return { data: null, code: 0, message: 'error' };
  }
};
axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = sessionStorage.getItem('token')
      ? `Bearer ${sessionStorage.getItem('token')}`
      : '';
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  },
);
axios.interceptors.response.use(
  (response) => {
    if (response.data.code !== 200) {
      message.error(response.data.msg);
      if (response.data.code === 401) {
        // window.location.href = '/login';
      }
    }
    // Do something with response data
    return response;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  },
);
export default http;
