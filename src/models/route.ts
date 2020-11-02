import { GET_USER_INFO } from 'api/user.service';
import { GET_MENU_LIST } from 'api/menu.service';

export const route = {
  namespace: 'route',
  state: [],
  reducers: {
    set(state: any, { payload }: any) {
      return payload;
    },
  },
  effects: {
    *clearRoutes({ payload }: any, { put, call }: any) {
      yield call(GET_USER_INFO);
      yield put({ type: 'setUserStatus', payload: true });
    },
    *setRoutes(action: any, { put, call }: any) {
      const { data } = yield call(GET_MENU_LIST);
      yield put({ type: 'set', payload: data });
    },
  },
};
export type GlobalState = Readonly<typeof global>;
