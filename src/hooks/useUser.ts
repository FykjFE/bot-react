import { useEffect, useState } from 'react';
import { GET_USER_INFO } from '../services/user.service';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { ASYNC_SET_USER } from '../store/constants/user';
import { logout } from '../store/actions/user';

function useUser(): any {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.isLogin) {
      dispatch({ type: ASYNC_SET_USER });
    } else {
      dispatch(logout());
    }
  }, [user.isLogin]);
  return user;
}

export default useUser;
