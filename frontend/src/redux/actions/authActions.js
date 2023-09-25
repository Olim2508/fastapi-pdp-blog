import {setAccessToken, setRefreshToken} from '../../api';

export const authTypes = {
  SIGN_UP: 'SIGN_UP',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_ERROR: 'SIGN_UP_ERROR',
  SIGN_UP_RESET: 'SIGN_UP_RESET',

  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_RESET: 'LOGIN_RESET',

  LOG_OUT: 'LOG_OUT',

  GET_USER_ME: 'GET_USER_ME',
  GET_USER_ME_SUCCESS: 'GET_USER_ME_SUCCESS',
  GET_USER_ME_ERROR: 'GET_USER_ME_ERROR',
  GET_USER_ME_RESET: 'GET_USER_ME_RESET',
};


export const signUpSuccess = (user) => ({
  type: authTypes.SIGN_UP_SUCCESS,
  payload: user,
});

export const signUpError = (error) => ({
  type: authTypes.SIGN_UP_ERROR,
  payload: error,
});


export const logInSuccess = (data) => {
  const accessToken = data.access_token;
  const refreshToken = data.refresh_token;
  setAccessToken(accessToken);
  setRefreshToken(refreshToken);
  return {
    type: authTypes.LOGIN_SUCCESS,
  };
};


export const logInError = (error) => {
  return {
    type: authTypes.LOGIN_ERROR,
    payload: error,
  };
};

export const logOut = () => {
  return {
    type: authTypes.LOG_OUT,
  };
};
