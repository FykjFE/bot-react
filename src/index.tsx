import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import App from './App';
import { persistor, store } from './store/store';
import 'styles/global.scss';
import 'dayjs/locale/zh-cn';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </ConfigProvider>,
  document.getElementById('root'),
);
