import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import App from './App';
import 'styles/global.less';
import 'dayjs/locale/zh-cn';
import { initStore } from 'utils/dva';

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={initStore()}>
      <App />
    </Provider>
  </ConfigProvider>,
  document.getElementById('root'),
);
