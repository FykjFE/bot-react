import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './reducers';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import ReduxThunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
export const persistor = persistStore(store as never);
