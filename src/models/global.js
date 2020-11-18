export const global = {
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
