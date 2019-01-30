import Axios from 'axios';
import * as types from './actionTypes';

export const fecthProfiles = profiles => (
  {
    type: types.FETCH_PROFILES,
    profiles,
  }
);

export const loading = status => (
  {
    type: types.PROFILES_LOADING,
    status,
  }
);

export const fetchProfilesSuccess = status => (
  {
    type: types.FETCH_PROFILES_SUCCESSFUL,
    status,
  }
);

export const fetchProfilesFailed = reason => (
  {
    type: types.FETCH_PROFILES_FAILED,
    reason,
  }
);

const userFollowers = followers => (
  {
    type: types.FETCH_PROFILE_FOLLOWERS,
    followers,
  }
);
const conf1 = (endpoint, token, data = undefined) => (
  {
    baseURL: `https://ah-technocrats.herokuapp.com/api/${endpoint}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
    data,
  }
);
const fetchFollowers = (dispatch, currentUser, token) => (
  Axios.get(`${currentUser}/following`, conf1('profiles/', token)).then(
    (respose) => {
      dispatch(userFollowers(respose.data.following));
    },
  ));
export const fetchUserProfiles = token => (
  (dispatch) => {
    dispatch(loading(true));
    return Axios.get('/', conf1('users', token)).then((response) => {
      dispatch(fetchProfilesSuccess(true));
      dispatch(fecthProfiles(response.data));
      dispatch(loading(false));
    }).catch((error) => {
      dispatch(fetchProfilesFailed(error.response.data));
      dispatch(loading(false));
    });
  }
);

export const fetchSingleProfileFailed = reason => (
  {
    type: types.FETCH_SINGLE_PROFILE_FAILED,
    reason,
  }
);
export const fetchSingleProfileSuccess = status => (
  {
    type: types.FETCH_SINGLE_PROFILE_SUCCESS,
    status,
  }
);

export const fetchProfile = details => (
  {
    type: types.FETCH_SINGLE_PROFILE,
    details,
  }
);
export const fetchSingleProfile = (profile, token) => (
  (dispatch) => {
    dispatch(loading(true));
    return Axios.get(`/${profile}`, conf1('profiles', token)).then((response) => {
      dispatch(loading(false));
      dispatch(fetchProfile(response.data.profile));
      dispatch(fetchSingleProfileSuccess(true));
    }).catch((error) => {
      dispatch(loading(false));
      dispatch(fetchSingleProfileFailed(error.response.data));
    });
  }
);

const followingUnfollowing = status => (
  {
    type: types.FOLLOWINGUNFOLLOWING_PROFILE,
    status,
  }
);
const followUnfollowFailed = reason => (
  {
    type: types.FOLLOWINGUNFOLLOWING_PROFILE_FAILED,
    reason,
  }
);
const followUnfollowProfile = message => (
  {
    type: types.FOLLOWUNFOLLOW_PROFILE,
    message,
  }
);
const followUnfollowSuccess = status => (
  {
    type: types.FOLLOWINGUNFOLLOWING_PROFILE_SUCCESS,
    status,
  }
);
export const getUserFollowers = (currentUser, token) => (
  dispatch => fetchFollowers(dispatch, currentUser, token)
);
const profileFollowers = followers => (
  {
    type: types.PROFILE_FOLLOWERS,
    followers,
  }
);
const profileFollowing = following => (
  {
    type: types.PROFILE_FOLLOWING,
    following,
  }
);
const profileFollowersFailed = reason => (
  {
    type: types.FETCH_PROFILE_FOLLOWING_FAILED,
    reason,
  }
);
const profileFollowingFailed = reason => (
  {
    type: types.FETCH_PROFILE_FOLLOWERS_FAILED,
    reason,
  }
);
const config = (profile, token) => (
  {
    baseURL: `https://ah-technocrats.herokuapp.com/api/profiles/${profile}/`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  }
);
const fetchProfileFollowers = (profile, token) => (
  Axios.get('followers', config(profile, token))
);
const fetchProfileFollowing = (profile, token) => (
  Axios.get('following', config(profile, token))
);
const getFollowersFollowingData = (dispatch, profile, token) => {
  dispatch(loading(true));
  return Axios.all([
    fetchProfileFollowers(profile, token), fetchProfileFollowing(profile, token),
  ]).then(Axios.spread((followers, following) => {
    dispatch(loading(false));
    dispatch(profileFollowers(followers.data.followers.length));
    dispatch(profileFollowing(following.data.following.length));
  })).catch(Axios.spread((followersErr, followingErr) => {
    dispatch(loading(false));
    dispatch(profileFollowersFailed(followersErr));
    dispatch(profileFollowingFailed(followingErr));
  }));
};
export const followProfile = (currentUser, profile, token) => (
  (dispatch) => {
    dispatch(loading(true));
    return Axios.post(`${currentUser}/follow`, { user: `${profile}` }, conf1('profiles/', token)).then((response) => {
      dispatch(followUnfollowProfile(response.data.message));
      dispatch(followUnfollowSuccess(true));
      dispatch(loading(false));
    }).catch((error) => {
      dispatch(loading(false));
      dispatch(followUnfollowFailed(error));
    }).then(() => fetchFollowers(dispatch, currentUser, token))
      .then(() => getFollowersFollowingData(dispatch, profile, token));
  }
);

export const unFollowProfile = (currentUser, profile, token) => (
  (dispatch) => {
    dispatch(loading(true));
    return Axios.delete(`${currentUser}/follow`, conf1('profiles/', token, { user: `${profile}` })).then((response) => {
      dispatch(followUnfollowProfile(response.data.message));
      dispatch(followUnfollowSuccess(true));
    }).catch((error) => {
      dispatch(followingUnfollowing(false));
      dispatch(followUnfollowFailed(error));
    }).then(() => fetchFollowers(dispatch, currentUser, token))
      .then(() => getFollowersFollowingData(dispatch, profile, token));
  }
);

export const fetchProfileFollowersFollowing = (profile, token) => (
  dispatch => getFollowersFollowingData(dispatch, profile, token)
);
