import http from '../utils/http';
import { AxiosPromise } from 'axios';

export const GET_MENU_LIST = (
  params: Record<string, Record<string, string>>,
): AxiosPromise<Res<any>> => {
  return http('get', '/menu/getMenus', { params });
};
export const GET_MENU_BY_ID = (params: Req): AxiosPromise<Res<any>> => {
  return http('get', '/menu/getMenuById', { params });
};
export const POST_MENU_BY_ID = (data: any): AxiosPromise<Res<any>> => {
  return http('post', '/menu/saveMenu', { data });
};
