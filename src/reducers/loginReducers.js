import * as types from '../actions/actionTypes';

// sets default state
const initialState = [{
  email: '',
  password: '',
  error: {},
  isLoggedin: false,
}];

// forks logic depending on the action that comes in
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_ACTION:
      return { ...state, action: action.request, loading: true };

    case types.LOGIN_SUCCESSFUL:
      return { ...state, successfulMessage: 'Successfully logged in', loading: false };

    case types.LOGIN_REJECTED:
      return { ...state, error: action.error, loading: false };
    case types.LOGOUT_SUCCESSFUL:
      return { ...state, successfulMessage: 'Successfully Logged Out' };
    default:
      return state;
  }
};

export default loginReducer;
