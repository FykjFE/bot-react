import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ASYNC_SET_ROUTES, Routes, SET_ROUTES } from 'store/constants/routes';
import { GET_MENU_LIST } from '../../services/menu.service';

export function setRoute(item: Routes[]): BaseAction<Routes[]> {
  return { type: SET_ROUTES, payload: item };
}

export function clearRoute(): BaseAction<Routes[]> {
  return { type: SET_ROUTES, payload: [] };
}
export function* asyncSetRoutes(): any {
  const { code, data } = yield call(GET_MENU_LIST as any);
  if (code === 0) {
    yield put({ type: SET_ROUTES, payload: data });
  }
}
export default function* root() {
  yield all([takeLatest(ASYNC_SET_ROUTES, asyncSetRoutes)]);
}
