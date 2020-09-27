import { Routes, SET_ROUTES } from 'store/constants/routes';
import { GET_MENU_LIST } from '../../services/menu.service';
import { Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

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
