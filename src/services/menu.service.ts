import http from '../utils/http';

export const GET_MENU_LIST = (
  params: Record<string, Record<string, string>>,
): Promise<Res<any>> => {
  return http('get', '/system/menu/list', { params });
};
export const GET_MENU_BY_ID = (params: Req): Promise<Res<any>> => {
  return http('get', `/system/menu/${params.id}`);
};
export const POST_MENU_BY_ID = (data: any): Promise<Res<any>> => {
  return http('post', `/system/menu`, { data });
};
