import * as types from './actionTypes';

export function FacebookAuth(data) {
  return data;
}
export function GoogleAuth(data) {
  return data;
}
export function TwitterAuth(data) {
  return data;
}
export function receivedUsers(action) {
  return {
    type: types.RECEIVE_DATA,
    payload: {
      fetching: false,
      users: action,
      message: 'success',
    },
  };
}
export function fetchUsers() {
  return {
    type: types.FETCHING,
    payload: {
      fetching: true,
      message: 'fetching',
    },
  };
}
export function getError(error) {
  return {

    type: types.FETCH_FAILED,
    payload: {
      fetching: false,
      message: error,
    },
  };
}
