import {
  AUTHENTICATE,
  DEAUTHENTICATE,
  RESTORE_AUTH_STATE,
  GET_AUTH_ERRORS
} from '../actions/types';
import { getCookie, setCookie, removeCookie } from '../../utils/cookie';

let initialState = {
  isAuthenticated: false,
  user: {},
  token: {},
  errors: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEAUTHENTICATE:
      return {
        isAuthenticated: false,
        user: {},
        token: {},
        errors: {}
      };

    case AUTHENTICATE:
      return { ...state, isAuthenticated: true, user: action.payload };
    case DEAUTHENTICATE:
      return { ...state, isAuthenticated: false, user: {} };
    case RESTORE_AUTH_STATE:
      return {
        isAuthenticated: true,
        user: action.payload.user
      };
    case GET_AUTH_ERRORS:
      return {
        ...state,
        errors: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
