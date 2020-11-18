export const global = {
  namespace: 'global',
  state: {
    num: 0,
  },
  reducers: {
    plus(state: any, { payload }: any) {
      return { ...state, num: state.num + payload };
    },
  },
  effects: {
    *handlePlus({ payload }: any, { put }: any) {
      yield put({ type: 'plus', payload });
    },
  },
};
export type GlobalState = Readonly<typeof global>;
