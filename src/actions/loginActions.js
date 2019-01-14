import axios from 'axios';
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
      document.cookie = `access_token=${token}`;
      document.cookie = `username=${username}`;
      dispatch(LoginSuccessful(response.data));
    } catch (error) {
      dispatch(LoginRejected(error.response.data.errors));
    }
  };
}
