import * as types from '../actions/actionTypes';

const initialState = [{
  username: '',
  email: '',
  password: '',
  repeat_password: '',
  error: {},
}];


export default function registrationReducer(state = initialState, action) {
  switch (action.type) {
    case types.USER_REGISTRATION_SUBMIT:
      return { ...state, action: action.registrationData, loading: true };

    case types.USER_REGISTRATION_FAIL:
      return { ...state, error: action.error, loading: false };

    case types.USER_REGISTRATION_SUCCESS:
      return {
        ...state, message: action.message, loading: false, error: null,
      };

    default:
      return state;
  }
}
