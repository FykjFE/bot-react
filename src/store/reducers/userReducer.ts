import { SET_USER, User } from '../constants/user';

const initialState: User = {
  isLogin: false,
  permissions: [],
  roles: [],
  user: {},
};
export default function userReducer(state = initialState, action: BaseAction<User>): User {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
