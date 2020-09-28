export interface Routes {
  path: string;
  name: string;
  icon: string;
  children: Routes[];
  hidden: boolean;
  component: string;
}

export const SET_ROUTES = 'SET_ROUTES';
export const ASYNC_GET_ROUTES = 'ASYNC_GET_ROUTES';
