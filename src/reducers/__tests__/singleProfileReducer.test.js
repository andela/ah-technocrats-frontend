import expect from 'expect';
import {
  PROFILES_LOADING, FETCH_SINGLE_PROFILE, FETCH_SINGLE_PROFILE_FAILED,
  FETCH_SINGLE_PROFILE_SUCCESS, FOLLOWINGUNFOLLOWING_PROFILE_FAILED,
  FOLLOWINGUNFOLLOWING_PROFILE_SUCCESS,
  FOLLOWUNFOLLOW_PROFILE, FETCH_PROFILE_FOLLOWERS, PROFILE_FOLLOWERS, PROFILE_FOLLOWING,
} from '../../actions/actionTypes';
import singleProfileReducer from '../singleProfileReducer';

const initialState = {
  loading: false,
  profile: {},
  fetchSingleProfileFailed: false,
  fetchSingleProfileSuccess: false,
  followers: [],
  profileFollowers: 0,
  profileFollowing: 0,
};

describe('singleProfileReducer tests', () => {
  it('should handle PROFILES_LOADING', () => {
    const action = {
      type: PROFILES_LOADING,
      status: true,
    };
    const newState = {
      loading: true,
      profile: {},
      fetchSingleProfileFailed: false,
      fetchSingleProfileSuccess: false,
      followers: [],
      profileFollowers: 0,
      profileFollowing: 0,
    };
    expect(singleProfileReducer(initialState, action)).toEqual(newState);
  });
  it('should handle FETCH_SINGLE_PROFILE', () => {
    const action = {
      type: FETCH_SINGLE_PROFILE,
      details: {
        username: 'vincent',
        bio: 'am fun',
      },
    };
    const newState = {
      loading: false,
      profile: {
        username: 'vincent',
        bio: 'am fun',
      },
      fetchSingleProfileFailed: false,
      fetchSingleProfileSuccess: false,
      followers: [],
      profileFollowers: 0,
      profileFollowing: 0,
    };
    expect(singleProfileReducer(undefined, action)).toEqual(newState);
  });
  it('should handle FETCH_SINGLE_PROFILE_FAILED', () => {
    const action = {
      type: FETCH_SINGLE_PROFILE_FAILED,
      reason: 'Profile Not Found',
    };
    const newState = {
      loading: false,
      profile: {},
      fetchSingleProfileFailed: 'Profile Not Found',
      fetchSingleProfileSuccess: false,
      followers: [],
      profileFollowers: 0,
      profileFollowing: 0,
    };
    expect(singleProfileReducer(initialState, action)).toEqual(newState);
  });
  it('should handle FETCH_SINGLE_PROFILE_SUCCESS', () => {
    const action = {
      type: FETCH_SINGLE_PROFILE_SUCCESS,
      status: true,
    };
    const newState = {
      loading: false,
      profile: {},
      fetchSingleProfileFailed: false,
      fetchSingleProfileSuccess: true,
      followers: [],
      profileFollowers: 0,
      profileFollowing: 0,
    };
    expect(singleProfileReducer(initialState, action)).toEqual(newState);
  });
  it('should handle FOLLOWINGUNFOLLOWING_FAILED', () => {
    const action = {
      type: FOLLOWINGUNFOLLOWING_PROFILE_FAILED,
      reason: 'Token Expired',
    };
    const newState = {
      loading: false,
      profile: {},
      fetchSingleProfileFailed: false,
      fetchSingleProfileSuccess: false,
      followers: [],
      followUnfollowFailed: 'Token Expired',
      profileFollowers: 0,
      profileFollowing: 0,
    };
    expect(singleProfileReducer(undefined, action)).toEqual(newState);
  });
  it('should handle FOLLOWINGUNFOLLOWING_SUCCESS', () => {
    const action = {
      type: FOLLOWINGUNFOLLOWING_PROFILE_SUCCESS,
      status: true,
    };
    const newState = {
      loading: false,
      profile: {},
      fetchSingleProfileFailed: false,
      fetchSingleProfileSuccess: false,
      followers: [],
      followUnfollowSuccess: true,
      profileFollowers: 0,
      profileFollowing: 0,
    };
    expect(singleProfileReducer(initialState, action)).toEqual(newState);
  });
  it('should handle FOLLOWUNFOLLOW_PROFILE', () => {
    const action = {
      type: FOLLOWUNFOLLOW_PROFILE,
      message: "You've successfully followed me",
    };
    const newState = {
      loading: false,
      profile: {},
      fetchSingleProfileFailed: false,
      fetchSingleProfileSuccess: false,
      followers: [],
      followUnfollowMessage: "You've successfully followed me",
      profileFollowers: 0,
      profileFollowing: 0,
    };
    expect(singleProfileReducer(initialState, action)).toEqual(newState);
  });
  it('should handle FETCH_PROFILE_FOLLOWERS', () => {
    const action = {
      type: FETCH_PROFILE_FOLLOWERS,
      followers: [
        {
          username: 'vincent',
        },
        {
          username: 'George',
        },
      ],
    };
    const newState = {
      loading: false,
      profile: {},
      fetchSingleProfileFailed: false,
      fetchSingleProfileSuccess: false,
      followers: [
        {
          username: 'vincent',
        },
        {
          username: 'George',
        },
      ],
      profileFollowers: 0,
      profileFollowing: 0,
    };
    expect(singleProfileReducer(initialState, action)).toEqual(newState);
  });
  it('should handle PROFILE_FOLLOWER', () => {
    const action = {
      type: PROFILE_FOLLOWERS,
      followers: 9,
    };
    const newState = {
      loading: false,
      profile: {},
      fetchSingleProfileFailed: false,
      fetchSingleProfileSuccess: false,
      followers: [],
      profileFollowers: 9,
      profileFollowing: 0,
    };
    expect(singleProfileReducer(initialState, action)).toEqual(newState);
  });
  it('should handle PROFILE_FOLLOWING', () => {
    const action = {
      type: PROFILE_FOLLOWING,
      following: 23,
    };
    const newState = {
      loading: false,
      profile: {},
      fetchSingleProfileFailed: false,
      fetchSingleProfileSuccess: false,
      followers: [],
      profileFollowers: 0,
      profileFollowing: 23,
    };
    expect(singleProfileReducer(initialState, action)).toEqual(newState);
  });
});
