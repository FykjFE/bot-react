import { all, fork } from 'redux-saga/effects';

const reducers = require.context(`./actions`, false, /\.ts$/);
const allReducers = reducers.keys();
const arr = allReducers.map((item) => fork(reducers(item).default));
// eslint-disable-next-line
export default function* rootSaga() {
  yield all(arr);
}
