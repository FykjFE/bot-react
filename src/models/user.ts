import { GET_USER_INFO } from 'api/user.service';
export type User = {
  isLogin: boolean;
  info: any;
};
export const user = {
  namespace: 'user',
  state: {
    isLogin: false,
    info: {},
  },
  reducers: {
    setUserInfo(state: any, { payload }: any) {
      return { ...state, info: payload };
    },
    setUserStatus(state: any, { payload }: any) {
      return { ...state, isLogin: payload };
    },
  },
  effects: {
    *login({ payload }: any, { put, call }: any) {
      yield call(GET_USER_INFO);
      yield put({ type: 'setUserStatus', payload: true });
    },
    *logout({ payload }: any, { put }: any) {
      yield put({ type: 'setUserStatus', payload: false });
    },
    *fetchInfo({ payload }: any, { put, call }: any) {
      const { data } = yield call(GET_USER_INFO);
      yield put({ type: 'setUserInfo', payload: data });
    },
  },
};
