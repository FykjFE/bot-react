export interface Routes {
  path: string;
  name: string;
  icon: string;
  children: Routes[];
  hidden: boolean;
  component: string;
  alwaysShow: boolean;
}

export const SET_ROUTES = 'SET_ROUTES';
export const ASYNC_SET_ROUTES = 'ASYNC_SET_ROUTES';
