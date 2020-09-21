import { all, call, put, takeLatest } from 'redux-saga/effects';
import { GET_ROUTERS } from '../../services/user.service';
import { ASYNC_SET_ROUTES, Routes, SET_ROUTES } from 'store/constants/routes';

export function setRoute(item: Routes[]): BaseAction<Routes[]> {
  return { type: SET_ROUTES, payload: item };
}

export function clearRoute(): BaseAction<Routes[]> {
  return { type: SET_ROUTES, payload: [] };
}
export function* asyncSetRoutes(): any {
  const { code, data } = yield call(GET_ROUTERS);
  if (code === 200) {
    yield put({ type: SET_ROUTES, payload: data });
  }
}
export default function* root() {
  yield all([takeLatest(ASYNC_SET_ROUTES, asyncSetRoutes)]);
}
