import {authTypes} from '../actions/authActions';
import {getAccessToken} from '../../api';

const token = getAccessToken();

const initialState = {
  user: null,
  error: null,
  isLoading: false,
  success: false,
  isAuthenticated: !!token,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.SIGN_UP:
      return {...state, isLoading: true};
    case authTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        error: null,
        success: true,
      };
    case authTypes.SIGN_UP_ERROR:
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    case authTypes.SIGN_UP_RESET:
      return {
        ...state,
        error: null,
        isLoading: false,
        success: false,
      };

    case authTypes.LOGIN:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case authTypes.LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        success: true,
        isAuthenticated: true,
      };
    case authTypes.LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
        success: false,
        isAuthenticated: false,
      };
    case authTypes.LOGIN_RESET:
      return {
        ...state,
        error: null,
        isLoading: false,
        success: false,
      };
    case authTypes.LOG_OUT:
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      return {
        ...state,
        isAuthenticated: false,
      };
    case authTypes.GET_USER_ME:
      return {...state, isLoading: false};
    case authTypes.GET_USER_ME_SUCCESS:
      return {...state, isLoading: false, user: action.payload, error: '', success: true};
    case authTypes.GET_USER_ME_ERROR:
      return {...state, isLoading: false, user: null, error: action.payload};
    case authTypes.GET_USER_ME_RESET:
      return {...state, isLoading: false, success: false, error: ''};
    default:
      return state;
  }
};
