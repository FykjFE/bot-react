export interface User {
  isLogin: boolean;
  permissions: string[];
  roles: string[];
  user: Record<string, any>;
}
export const SET_USER = 'SET_USER';
export const ASYNC_SET_USER = 'ASYNC_SET_USER';
