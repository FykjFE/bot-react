interface Action {
  payload: any;
}
interface Effect {
  put: any;
}
interface GlobalType {
  namespace: string;
  state: Record<string, any>;
  reducers: {
    plus: (state: Record<string, any>, aciton: Action) => any;
  };
  effects: {
    handlePlus: (action: Action, effect: Effect) => Generator;
  };
}
export const global: GlobalType = {
  namespace: 'global',
  state: {
    num: 0,
  },
  reducers: {
    plus(state, { payload }) {
      return { ...state, num: state.num + payload };
    },
  },
  effects: {
    *handlePlus({ payload }, { put }) {
      yield put({ type: 'plus', payload });
    },
  },
};
export type GlobalState = Readonly<typeof global>;
