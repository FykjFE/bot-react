import { GET_USER_INFO } from 'api/user.service';
import { GET_MENU_LIST } from 'api/menu.service';
export interface Routes {
  path: string;
  name: string;
  icon: string;
  children: Routes[];
  hidden: boolean;
  component: string;
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
    set: (state: any, effect: any) => any;
  };
  effects: {
    clearRoutes: (action: Action, effect: Effect) => Generator;
    setRoutes: (action: Action, effect: Effect) => Generator;
  };
}

export const route: GlobalType = {
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
      // @ts-ignore
      const { data } = yield call(GET_MENU_LIST);
      yield put({ type: 'set', payload: data });
    },
  },
};
export type GlobalState = Readonly<typeof global>;
