import Constant from '../../Helpers/constant';

const user = localStorage.getItem('user');
const initialState = {
  user: JSON.parse(user),
  loading: false,
  error: false,
  msg: null
}

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case Constant.LOGIN_REQUEST:
      return {
        ...state,
        error: false,
        user: null,
        loading: true,
      };
    case Constant.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.user,
        msg: action.msg
      };
    case Constant.AUTH_ERROR_CLEAR:
      return {
        ...state,
        msg: null,
        error: null
      }
    case Constant.LOGIN_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
        msg: action.msg
      };
    case Constant.LOGOUT:
      return {
        ...state,
        user: null
      };
    default:
      return state
  }
}