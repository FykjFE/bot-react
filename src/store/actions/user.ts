import { SET_USER, User } from 'store/constants/user';
import { GET_USER_INFO } from 'services/user.service';
import { Dispatch } from 'redux';

export function setUser(user: User): BaseAction<User> {
  return { type: SET_USER, payload: user };
}

export function logout(): BaseAction<User> {
  return { type: SET_USER, payload: { isLogin: false, permissions: [], roles: [], user: {} } };
}

export function asyncSetUser(): any {
  return async (dispatch: Dispatch) => {
    const { data } = await GET_USER_INFO();
    dispatch({
      type: SET_USER,
      payload: { user: data, isLogin: true },
    });
  };
}
