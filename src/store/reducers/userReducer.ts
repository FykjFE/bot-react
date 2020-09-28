import { SET_USER_INFO, SET_USER_STATUS, User } from '../constants/user';

const initialState: User = {
  isLogin: false,
  info: {},
};
export default function userReducer(state = initialState, action: BaseAction<User>): User {
  switch (action.type) {
    case SET_USER_INFO:
      return { ...state, info: action.payload.info };
    case SET_USER_STATUS:
      return { ...state, isLogin: action.payload.isLogin };
    default:
      return state;
  }
}
