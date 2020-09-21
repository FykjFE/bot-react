import { combineReducers } from 'redux';

import userReducer from './userReducer';
import routeReducer from './routeReducer';
//todo 使用webpack require.context 并能类型推断
export const rootReducer = combineReducers({
  user: userReducer,
  route: routeReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
