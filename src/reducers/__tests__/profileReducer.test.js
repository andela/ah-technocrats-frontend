import expect from 'expect';
import profileDetails from '../profileReducer';
import * as types from '../../actions/profileActionTypes';
/* eslint-disable comma-dangle */

const initialState = {
  details: {},
  updating: false,
  errors: {},
  success: false,
  updated: false,
  following: 0,
  followers: 0,
  requestStatus: {
    status: false,
    type: '',
    message: '',
  },
};
describe('profile reducer', () => {
  it('should return initial state', () => {
    expect(
      profileDetails(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle PROFILE DETAILS', () => {
    const action = {
      type: types.PROFILE_DETAILS,
      details: {
        username: 'vincent',
        bio: '',
        email: 'verencelola@icloud.com'
      }
    };
    const expectedState = {
      details: {
        username: 'vincent',
        bio: '',
        email: 'verencelola@icloud.com'
      },
      updating: false,
      errors: {},
      success: false,
      updated: false,
      following: 0,
      followers: 0,
      requestStatus: {
        status: false,
        type: '',
        message: '',
      },
    };
    expect(profileDetails(undefined, action)).toEqual(expectedState);
  });


  it('should handle UPDATING', () => {
    const action = {
      type: types.UPDATING,
      updating: true
    };
    const expectedState = {
      details: {},
      updating: true,
      errors: {},
      success: false,
      updated: false,
      following: 0,
      followers: 0,
      requestStatus: {
        status: false,
        type: '',
        message: '',
      },
    };
    expect(profileDetails(undefined, action)).toEqual(expectedState);
  });

  it('should handle ERRORS', () => {
    const action = {
      type: types.ERRORS,
      errors: {
        username: 'User with that email exists',
        phone: 'This field only takes strings'
      }
    };
    const expectedState = {
      details: {},
      updating: false,
      errors: {
        username: 'User with that email exists',
        phone: 'This field only takes strings'
      },
      success: false,
      updated: false,
      following: 0,
      followers: 0,
      requestStatus: {
        status: false,
        type: '',
        message: '',
      },
    };
    expect(profileDetails(undefined, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_PROFILE', () => {
    const action = {
      type: types.UPDATEPROFILE,
      status: true,
    };
    const expectedState = {
      details: {},
      updating: false,
      errors: {},
      success: false,
      updated: true,
      following: 0,
      followers: 0,
      requestStatus: {
        status: false,
        type: '',
        message: '',
      },
    };
    expect(profileDetails(undefined, action)).toEqual(expectedState);
  });

  it('should handle FOLLOWING', () => {
    const action = {
      type: types.FOLLOWING,
      following: 44
    };
    const expectedState = {
      details: {},
      updating: false,
      errors: {},
      success: false,
      updated: false,
      following: 44,
      followers: 0,
      requestStatus: {
        status: false,
        type: '',
        message: '',
      },
    };
    expect(profileDetails(undefined, action)).toEqual(expectedState);
  });

  it('should handle FOLLOWERS', () => {
    const action = {
      type: types.FOLLOWERS,
      followers: 56,
    };
    const expectedState = {
      details: {},
      updating: false,
      errors: {},
      success: false,
      updated: false,
      following: 0,
      followers: 56,
      requestStatus: {
        status: false,
        type: '',
        message: '',
      },
    };
    expect(profileDetails(undefined, action)).toEqual(expectedState);
  });
});
