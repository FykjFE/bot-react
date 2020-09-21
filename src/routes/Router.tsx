import React, { ReactElement, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import MainLayout from './MainLayout';
import NoMatch from '../components/NoMatch/NoMatch';
import { Spin } from 'antd';
import styles from 'styles/layout.module.scss';
import useRoute from '../hooks/useRoute';
import flatRoute from './flatRoute';
import { Routes } from '../store/constants/routes';
export default function Router(): JSX.Element {
  const [list, setList] = useState<Routes[]>([]);
  const route = useRoute();
  useEffect(() => {
    const arr = flatRoute(route);
    setList(arr);
  }, [route]);
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
                    {list.map((item: Routes) => (
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
}
