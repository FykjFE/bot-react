import { all, fork } from 'redux-saga/effects';

const reducers = require.context(`./actions`, false, /\.ts$/);
const allReducers = reducers.keys();
const arr = allReducers.map((item) => fork(reducers(item).default));
export default function* rootSaga(): any {
  yield all(arr);
}
