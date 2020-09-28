import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import { asyncSetUser, logout } from 'store/actions/user';
import { asyncSetRoutes, clearRoute } from '../store/actions/routes';
import { User } from '../store/constants/user';
import { Routes } from '../store/constants/routes';

function useAuth(): { user: User; route: Routes[] } {
  const user = useSelector((state: RootState) => state.user);
  const route = useSelector((state: RootState) => state.route);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.isLogin) {
      dispatch(asyncSetUser());
      dispatch(asyncSetRoutes());
    } else {
      dispatch(logout());
      dispatch(clearRoute());
    }
  }, [dispatch, user.isLogin]);
  return { user, route };
}

export default useAuth;
