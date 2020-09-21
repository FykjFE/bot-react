import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { ASYNC_SET_ROUTES, Routes } from '../store/constants/routes';
import { clearRoute } from '../store/actions/routes';

function useRoute(): Routes[] {
  const user = useSelector((state: RootState) => state.user);
  const route = useSelector((state: RootState) => state.route);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.isLogin) {
      dispatch({ type: ASYNC_SET_ROUTES });
    } else {
      dispatch(clearRoute());
    }
  }, [user.isLogin]);
  return route;
}

export default useRoute;
