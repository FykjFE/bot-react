import http from '../utils/http';

export const GET_LIST = (params: Record<string, Record<string, string>>): Promise<Res<any>> => {
  return http('get', '/v1/bpi/currentprice.json', { params });
};
