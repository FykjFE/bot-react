import { combineReducers } from 'redux';
import userReducer from './userReducer';
import routeReducer from './routeReducer';

export const rootReducer = combineReducers({
  route: routeReducer,
  user: userReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
