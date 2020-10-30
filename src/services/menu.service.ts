import http from '../utils/http';

export const GET_MENU_LIST = (
  params: Record<string, Record<string, string>>,
): Promise<Res<any>> => {
  return http('get', '/menu/getMenus', { params });
};
export const GET_MENU_BY_ID = (params: Req): Promise<Res<any>> => {
  return http('get', '/menu/getMenuById', { params });
};
export const POST_MENU_BY_ID = (data: any): Promise<Res<any>> => {
  return http('post', '/menu/saveMenu', { data });
};
