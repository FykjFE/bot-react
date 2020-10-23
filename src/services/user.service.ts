import http from '../utils/http';
import { User } from '../interfaces/user';
import { AxiosPromise } from 'axios';

export const POST_LOGIN = (data: User): AxiosPromise<Res<any>> => {
  return http('post', '/user/login', { data });
};
export const GET_USER_INFO = (): AxiosPromise<Res<any>> => {
  return http('get', '/user/getUserInfo');
};
