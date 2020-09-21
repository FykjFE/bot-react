import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './reducers';
import rootSaga from './rootSaga';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
export const persistor = persistStore(store as never);
sagaMiddleware.run(rootSaga);
