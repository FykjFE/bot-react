import React, { ReactElement, Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import MainLayout from './MainLayout';
import NoMatch from '../components/NoMatch';
import { Spin } from 'antd';
import styles from 'styles/layout.module.scss';
import { connect } from 'react-redux';

interface ConnectList {
  route: Routes[];
}

const router: React.FC<ConnectList> = ({ route }) => {
  return (
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
                    {route.map((item: Routes) => (
                      <Route
                        key={item.path}
                        exact
                        path={item.path}
                        component={React.lazy(() => import(`../pages/${item.component}`))}
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
  );
};

export default connect(({ route }: ConnectList) => ({
  route,
}))(router);
