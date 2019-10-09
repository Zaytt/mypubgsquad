import { GET_AUTH_ERRORS, AUTHENTICATE, AUTHENTICATE_FACEBOOK, DEAUTHENTICATE } from './types';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from '../../utils/Util';

// Set logged in user
export const authenticateAction = user => {
  return {
    type: AUTHENTICATE,
    payload: user
  };
};

export const authenticateFacebook = token => {
  return {
    type: AUTHENTICATE_FACEBOOK,
    payload: token
  };
};

export const deAuthenticateAction = () => {
  return {
    type: DEAUTHENTICATE
  };
};

export const restoreState = authState => {
  return {
    type: RESTORE_AUTH_STATE,
    payload: authState
  };
};

// Register User
export const registerUser = userData => dispatch => {
  axios
    .post('api/auth/register', userData)
    .then(res => true)
    .catch(err => {
      dispatch({
        type: GET_AUTH_ERRORS,
        payload: err.response.data
      });
    });
};

// Login - GET user Token
export const loginUser = userData => async dispatch => {
  return axios
    .post('api/auth/login', userData)
    .then(res => {
      const user = res.data;
      dispatch(authenticateAction(user._id));
    })
    .catch(err => {
      dispatch({
        type: GET_AUTH_ERRORS,
        payload: err.response.data
      });
    });
};

export const loginUserFacebook = () => async dispatch => {};

export const logoutUser = () => async dispatch => {
  axios
    .get('api/auth/logout')
    .then(res => dispatch(deAuthenticateAction()))
    .catch(err => {
      dispatch({
        type: GET_AUTH_ERRORS,
        payload: err.response.data
      });
    });
};

export const restore = savedState => {
  return dispatch => {
    dispatch(restoreState(savedState));
  };
};
