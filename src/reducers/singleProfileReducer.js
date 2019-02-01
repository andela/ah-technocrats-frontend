import {
  FETCH_SINGLE_PROFILE, FETCH_SINGLE_PROFILE_FAILED,
  FETCH_SINGLE_PROFILE_SUCCESS,
  FOLLOWINGUNFOLLOWING_PROFILE_FAILED,
  FOLLOWINGUNFOLLOWING_PROFILE_SUCCESS,
  FOLLOWUNFOLLOW_PROFILE,
  FETCH_PROFILE_FOLLOWERS,
  PROFILE_FOLLOWERS,
  PROFILE_FOLLOWING,
  PROFILES_LOADING,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  profile: {},
  fetchSingleProfileFailed: false,
  fetchSingleProfileSuccess: false,
  followers: [],
  profileFollowers: 0,
  profileFollowing: 0,
};


const singleProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILES_LOADING:
      return { ...state, loading: action.status };
    case FETCH_SINGLE_PROFILE:
      return { ...state, profile: action.details };
    case FETCH_SINGLE_PROFILE_FAILED:
      return { ...state, fetchSingleProfileFailed: action.reason };
    case FETCH_SINGLE_PROFILE_SUCCESS:
      return { ...state, fetchSingleProfileSuccess: action.status };
    case FOLLOWINGUNFOLLOWING_PROFILE_FAILED:
      return { ...state, followUnfollowFailed: action.reason };
    case FOLLOWINGUNFOLLOWING_PROFILE_SUCCESS:
      return { ...state, followUnfollowSuccess: action.status };
    case FOLLOWUNFOLLOW_PROFILE:
      return { ...state, followUnfollowMessage: action.message };
    case FETCH_PROFILE_FOLLOWERS:
      return { ...state, followers: action.followers };
    case PROFILE_FOLLOWERS:
      return { ...state, profileFollowers: action.followers };
    case PROFILE_FOLLOWING:
      return { ...state, profileFollowing: action.following };
    default:
      return state;
  }
};

export default singleProfileReducer;
