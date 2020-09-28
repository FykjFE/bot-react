import { Routes, SET_ROUTES } from 'store/constants/routes';
import { GET_MENU_LIST } from '../../services/menu.service';
import { Dispatch } from 'redux';

export function setRoute(item: Routes[]): BaseAction<Routes[]> {
  return { type: SET_ROUTES, payload: item };
}

export function clearRoute(): BaseAction<Routes[]> {
  return { type: SET_ROUTES, payload: [] };
}
export function asyncSetRoutes(): any {
  return async (dispatch: Dispatch) => {
    const { data } = await GET_MENU_LIST({});
    dispatch({
      type: SET_ROUTES,
      payload: data,
    });
  };
}
