import * as actions from '../socialAuthActions';
import * as TYPES from '../actionTypes';

it('returns same data passed to the facebook action', () => {
  const facebookData = {
    provider: 'facebook',
    token: 'dummytokenhere',
    data: 'User data here',
  };
  expect(actions.FacebookAuth(facebookData)).toEqual(facebookData);
});

it('returnd auth data passed to google', () => {
  const googleData = {
    provider: 'google',
    access_token: 'tokengoeshere',
  };
  expect(actions.GoogleAuth(googleData)).toEqual(googleData);
});

it('return correct data from facebook provider', () => {
  const userData = {
    provider: 'twitter',
    token: 'dummytokenhere',
    secret: 'nosecret',
  };
  expect(actions.TwitterAuth(userData)).toEqual(userData);
});

it('return correct data from facebook provider', () => {
  const sampleData = {
    name: 'JohnDoe',
    access_token: 'tokengoesinhere',
    provider: 'facebook',
  };
  const expectedAction = {
    type: TYPES.RECEIVE_DATA,
    payload: {
      fetching: false,
      users: sampleData,
      message: 'success',
    },
  };

  expect(actions.receivedUsers(sampleData)).toEqual(expectedAction);
});

it('returns the correct status to show its fetching', () => {
  const expectedAction = {
    type: TYPES.FETCHING,
    payload: {
      fetching: true,
      message: 'fetching',
    },
  };

  expect(actions.fetchUsers()).toEqual(expectedAction);
});

it('returns the correct status as error', () => {
  const expectedAction = {
    type: TYPES.FETCH_FAILED,
    payload: {
      fetching: false,
      message: 'error',
    },
  };

  expect(actions.getError('error')).toEqual(expectedAction);
});
