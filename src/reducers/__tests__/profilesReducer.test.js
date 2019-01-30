import expect from 'expect';
import {
  FETCHING_PROFILES, FETCH_PROFILES,
  FETCH_PROFILES_FAILED, FETCH_PROFILES_SUCCESSFUL,
} from '../../actions/actionTypes';
import profilesReducer from '../profilesReducer';

const initialState = {
  profiles: [],
  fetching: false,
  fetchFailed: false,
  fetchSuccess: false,
};

describe('profilesReducer', () => {
  it('should handle FETCHING_PROFILES', () => {
    const action = {
      type: FETCHING_PROFILES,
      status: true,
    };
    const newState = {
      profiles: [],
      fetching: true,
      fetchFailed: false,
      fetchSuccess: false,
    };
    expect(profilesReducer(initialState, action)).toEqual(newState);
  });
  it('should handle FETCH_PROFILE', () => {
    const action = {
      type: FETCH_PROFILES,
      profiles: [
        {
          username: 'vincent',
        },
        {
          username: 'clinton',
        },
      ],
    };
    const newState = {
      profiles: [
        {
          username: 'vincent',
        },
        {
          username: 'clinton',
        },
      ],
      fetching: false,
      fetchFailed: false,
      fetchSuccess: false,
    };
    expect(profilesReducer(initialState, action)).toEqual(newState);
  });
  it('should handle FETCH_PROFILES_FAILED', () => {
    const action = {
      type: FETCH_PROFILES_FAILED,
      status: true,
    };
    const newState = {
      profiles: [],
      fetching: false,
      fetchFailed: true,
      fetchSuccess: false,
    };
    expect(profilesReducer(initialState, action)).toEqual(newState);
  });
  it('should handle FETCH_PROFILES_SUCCESSFUL', () => {
    const action = {
      type: FETCH_PROFILES_SUCCESSFUL,
      status: true,
    };
    const newState = {
      profiles: [],
      fetching: false,
      fetchFailed: false,
      fetchSuccess: true,
    };
    expect(profilesReducer(undefined, action)).toEqual(newState);
  });
});
