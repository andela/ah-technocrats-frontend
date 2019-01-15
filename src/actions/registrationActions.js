import Axios from 'axios';
import * as types from './actionTypes';

export const userRegistrationSubmit = registrationData => ({
  type: types.USER_REGISTRATION_SUBMIT,
  registrationData,
});
export const userRegistrationFail = error => ({
  type: types.USER_REGISTRATION_FAIL,
  error,
});

export const userRegistrationSuccess = message => ({
  type: types.USER_REGISTRATION_SUCCESS,
  message,
});

export const registerUser = registrationData => (dispatch) => {
  dispatch(userRegistrationSubmit(registrationData));
  return Axios.post('https://ah-technocrats.herokuapp.com/api/users/', registrationData)
    .then(res => dispatch(userRegistrationSuccess(res.data.message)))
    .catch((error) => {
      dispatch(userRegistrationFail(error.response.data.errors));
    });
};
