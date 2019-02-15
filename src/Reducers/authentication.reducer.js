import { userConstants } from '../Constants';

const user = localStorage.getItem('user');
// const initialState = user ? { loggedIn: true, user } : {};
const initialState = {
  user:user,
  loading:false,
  err:false,
  msg:null
}

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        err:false,
        user:null,
        loading: true,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loading:false,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        error: true,
        loading:false,
      };
    case userConstants.LOGOUT:
      return {
        ...state,
        user:null
      };
    default:
      return state
  }
}