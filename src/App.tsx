import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import { HashRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import store from './store';
import routes from './router';

import zhCN from 'antd/es/locale/zh_CN';

const App: FC = () => {
  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <Router>{renderRoutes(routes)}</Router>
      </ConfigProvider>
    </Provider>
  )
}

export default App
