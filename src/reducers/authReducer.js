import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGOUT,
} from '../actions';

const initialState = {
  user_id: +localStorage.getItem('user_id'),
  token: localStorage.getItem('token'),
  isLoading: false,
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
    case REGISTER:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user_id: +action.payload.user_id,
        token: action.payload.token,
      };
    case LOGIN_ERROR:
    case REGISTER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user_id: null,
        token: null,
      };
    default:
      return state;
  }
}
