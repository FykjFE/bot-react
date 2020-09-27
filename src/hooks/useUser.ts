import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import { asyncSetUser, logout } from 'store/actions/user';

function useUser(): any {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.isLogin) {
      dispatch(asyncSetUser());
    } else {
      dispatch(logout());
    }
  }, [user.isLogin]);
  return user;
}

export default useUser;
