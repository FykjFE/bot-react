import { GET_USER_INFO } from 'api/user.service';

export const user = {
  namespace: 'user',
  state: {
    isLogin: false,
    info: {},
  },
  reducers: {
    setUserInfo(state, { payload }) {
      return { ...state, info: payload };
    },
    setUserStatus(state, { payload }) {
      return { ...state, isLogin: payload };
    },
  },
  effects: {
    *login({ payload }, { put, call }) {
      yield call(GET_USER_INFO);
      yield put({ type: 'setUserStatus', payload: true });
    },
    *logout({ payload }, { put }) {
      yield put({ type: 'setUserStatus', payload: false });
    },
    *fetchInfo({ payload }, { put, call }) {
      const { data } = yield call(GET_USER_INFO);
      yield put({ type: 'setUserInfo', payload: data });
    },
  },
};
