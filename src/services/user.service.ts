import http from '../utils/http';
import { User } from '../interfaces/user';

export const POST_LOGIN = (data: User): Promise<Res<any>> => {
  return http.post('/user/login', data);
};
export const GET_USER_INFO = (): Promise<Res<any>> => {
  return http.get('/user/getUserInfo');
};
