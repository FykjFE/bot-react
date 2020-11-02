import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import App from './App';
import 'styles/global.less';
import 'dayjs/locale/zh-cn';
import models from 'models/index';
import { initStore } from '@fykj/dva-plus';

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={initStore(models, { key: 'fykj' })}>
      <App />
    </Provider>
  </ConfigProvider>,
  document.getElementById('root'),
);
