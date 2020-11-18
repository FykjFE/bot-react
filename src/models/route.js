import { GET_USER_INFO } from 'api/user.service';
import { GET_MENU_LIST } from 'api/menu.service';

export const route = {
  namespace: 'route',
  state: [],
  reducers: {
    set(state, { payload }) {
      return payload;
    },
  },
  effects: {
    *clearRoutes({ payload }, { put, call }) {
      yield call(GET_USER_INFO);
      yield put({ type: 'setUserStatus', payload: true });
    },
    *setRoutes(action, { put, call }) {
      const { data } = yield call(GET_MENU_LIST);
      yield put({ type: 'set', payload: data });
    },
  },
};
