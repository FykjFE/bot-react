import React, { ReactElement, Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import MainLayout from './MainLayout';
import NoMatch from '../components/NoMatch';
import { Spin } from 'antd';
import styles from 'styles/layout.module.less';
import { connect } from 'react-redux';
import loadable from '@loadable/component';
import ErrorBoundary from 'components/ErrorBoundary';
interface ConnectList {
  route: Routes[];
}

const router: React.FC<ConnectList> = ({ route }) => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className={styles.loading}>
              <Spin size='large' />
            </div>
          }
        >
          <Switch>
            <Route path='/login' component={React.lazy(() => import('pages/login/Login'))} />
            <Route
              path='/'
              render={(): ReactElement =>
                sessionStorage.getItem('isLogin') === 'true' ? (
                  <MainLayout>
                    <Switch>
                      {route?.map((item: Routes) => (
                        <Route
                          key={item.path}
                          exact
                          path={item.path}
                          component={loadable(() => import(`../pages/${item.component}`))}
                        />
                      ))}
                      <Route path='*' component={NoMatch} />
                    </Switch>
                  </MainLayout>
                ) : (
                  <Redirect to='/login' />
                )
              }
            />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default connect(({ route }: ConnectList) => ({
  route,
}))(router);
