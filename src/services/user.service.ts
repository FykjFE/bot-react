import http from '../utils/http';
import { User } from '../interfaces/user';

export const GET_CAPTCHA = (params: Record<string, Record<string, string>>): Promise<Res<any>> => {
  return http('get', '/captchaImage', { params });
};
export const POST_LOGIN = (data: User): Promise<Res<any>> => {
  return http('post', '/login', { data });
};
export const GET_USER_INFO = (): Promise<Res<any>> => {
  return http('get', '/getInfo');
};
export const GET_ROUTERS = (): Promise<Res<any>> => {
  return http('get', '/getRouters');
};
