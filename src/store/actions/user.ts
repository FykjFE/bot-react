import { SET_USER_INFO, SET_USER_STATUS, User } from 'store/constants/user';
import { GET_USER_INFO } from 'services/user.service';
import { Dispatch } from 'redux';

export function setUser(user: User): BaseAction<User> {
  return { type: SET_USER_INFO, payload: user };
}

export function login(): BaseAction<User> {
  return { type: SET_USER_STATUS, payload: { isLogin: true } };
}
export function logout(): BaseAction<User> {
  return { type: SET_USER_STATUS, payload: { isLogin: false, info: {} } };
}

export function asyncSetUser(): any {
  return async (dispatch: Dispatch) => {
    const { data } = await GET_USER_INFO();
    dispatch({
      type: SET_USER_INFO,
      payload: data,
    });
  };
}
