import { GET_USER_INFO } from 'api/user.service';
export interface User {
  isLogin?: boolean;
  info?: any;
}
interface Action {
  payload: any;
}

interface Effect {
  put?: any;
  call?: any;
  select?: any;
}

interface GlobalType {
  namespace: string;
  state: Record<string, any>;
  reducers: {
    setUserInfo: (state: any, effect: any) => any;
    setUserStatus: (state: any, effect: any) => any;
  };
  effects: {
    login: (action: Action, effect: Effect) => Generator;
    logout: (action: Action, effect: Effect) => Generator;
    fetchInfo: (action: Action, effect: Effect) => Generator;
  };
}

export const user: GlobalType = {
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
      console.log('a');
      yield call(GET_USER_INFO);
      yield put({ type: 'setUserStatus', payload: true });
    },
    *logout({ payload }, { put }) {
      yield put({ type: 'setUserStatus', payload: false });
    },
    *fetchInfo({ payload }, { put, call }) {
      // @ts-ignore
      const { data } = yield call(GET_USER_INFO);
      yield put({ type: 'setUserInfo', payload: data });
    },
  },
};
export type GlobalState = Readonly<typeof global>;
