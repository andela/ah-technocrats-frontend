import axios from 'axios';
import Cookies from 'js-cookie';
import * as types from './actionTypes';

// creates request action
export const LoginAction = request => (
  {
    type: types.LOGIN_ACTION,
    request,
  }
);

// creates logic success action
export const LoginSuccessful = successfulMessage => (
  {
    type: types.LOGIN_SUCCESSFUL,
    successfulMessage,
  }
);

export const LogoutSuccess = successfulMessage => (
  {
    type: types.LOGOUT_SUCCESSFUL,
    successfulMessage,
  }
);

// creates login reject action
export const LoginRejected = error => (
  {
    type: types.LOGIN_REJECTED,
    error,
  }
);

export function loginUser(credentials) {
  return async (dispatch) => {
    dispatch(LoginAction(credentials));
    try {
      const response = await axios.post('https://ah-technocrats.herokuapp.com/api/users/login/', credentials);
      const { token, username } = response.data.user;
      Cookies.set('username', username, {
        expires: 1 / 24,
      });
      Cookies.set('access_token', token, {
        expires: 1 / 24,
      });
      dispatch(LoginSuccessful(response.data));
    } catch (error) {
      dispatch(LoginRejected(error.response.data.errors));
    }
  };
}

export const logout = () => (
  (dispatch) => {
    Cookies.remove('username');
    Cookies.remove('access_token');
    dispatch(LogoutSuccess('Logout SuccessFul.'));
  }
);
