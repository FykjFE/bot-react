import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../models/user';

function useAuth(): { user: User; route: Routes[] } {
  const user = useSelector((state: any) => state.user);
  const route = useSelector((state: any) => state.route);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user.isLogin) {
      dispatch({ type: 'user/fetchInfo' });
      dispatch({ type: 'route/setRoutes' });
    } else {
      dispatch({ type: 'user/logout' });
      dispatch({ type: 'route/clearRoutes' });
    }
  }, [dispatch, user.isLogin]);
  return { user, route };
}

export default useAuth;
