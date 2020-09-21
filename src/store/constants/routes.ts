export interface Routes {
  path: string;
  name: string;
  meta: Meta;
  children: Routes[];
  hidden: boolean;
  component: string;
  alwaysShow: boolean;
}

interface Meta {
  title: string;
  icon: string;
}

export const SET_ROUTES = 'SET_ROUTES';
export const ASYNC_SET_ROUTES = 'ASYNC_SET_ROUTES';
