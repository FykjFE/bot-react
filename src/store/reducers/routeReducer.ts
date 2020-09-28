import { Routes, SET_ROUTES } from '../constants/routes';

const initialState: Routes[] = [];
export default function userReducer(state = initialState, action: BaseAction<Routes[]>): Routes[] {
  switch (action.type) {
    case SET_ROUTES:
      return action.payload;
    default:
      return state;
  }
}
