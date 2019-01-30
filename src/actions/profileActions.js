import Axios from 'axios';
import Cookies from 'js-cookie';
import * as types from './profileActionTypes';


export const profileDetails = details => (
  {
    type: types.PROFILE_DETAILS,
    details,
  }
);


export const updating = status => (
  {
    type: types.UPDATING,
    updating: status,
  }
);

export const errors = errorsDetails => (
  {
    type: types.ERRORS,
    errors: errorsDetails,
  }
);


export const updated = status => (
  {
    type: types.UPDATEPROFILE,
    status,
  }
);


export const requestFailed = (status, message, errorCode) => (
  {
    type: types.REQUEST_STATUS,
    details: {
      status,
      message,
      errorCode,
    },
  }
);

export const getProfileDetails = (username, token) => (
  dispatch => (
    Axios.get(
      `https://ah-technocrats.herokuapp.com/api/profiles/${username}/`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
      },
    ).then(
      (response) => {
        dispatch(profileDetails(response.data.profile));
      },
      (error) => {
        if (error.response.status === 403) {
          dispatch(requestFailed(true, 'Sesssion Expired Please Login Again', error.response.status));
        }
      },
    )
  )
);
const updateErrorDispatch = (dispatch, error) => {
  dispatch(updating(false));
  dispatch(updated(false));
  let err = error.response.data.errors;
  if (err.username) {
    err = { ...err.profile, username: [err.username] };
    dispatch(errors(err));
  } else if (err.email) {
    err = { ...err.profile, email: [err.email] };
    dispatch(errors(err));
  } else {
    dispatch(errors(err.profile));
  }
};


export const following = followingCount => (
  {
    type: types.FOLLOWING,
    following: followingCount,
  }
);


export const followers = followersCount => ({
  type: types.FOLLOWERS,
  followers: followersCount,
});

const conf = (username, token) => ({
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Token ${token}`,
  },
  baseURL: `https://ah-technocrats.herokuapp.com/api/profiles/${username}/`,
});

const getData = (dispatch, endpoint, username, token) => Axios.get(endpoint, conf(username, token))
  .then((response) => {
    const whichDispatch = { following, followers };
    let dataReturned;
    if (endpoint === 'following') {
      dataReturned = response.data.following.length;
    } else if (endpoint === 'followers') {
      dataReturned = response.data.followers.length;
    }
    dispatch(whichDispatch[endpoint](dataReturned));
  });


export const updateProfileDetails = (details, token) => (
  (dispatch) => {
    dispatch(updating(true));
    return Axios.put(
      'https://ah-technocrats.herokuapp.com/api/user/profile',
      {
        user: details,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
      },
    ).then(
      () => {
        dispatch(updating(false));
        dispatch(updated(true));
        dispatch(errors({}));
        if (details.username) {
          Cookies.set('username', details.username, { expires: 1 });
        }
      },
      (error) => {
        updateErrorDispatch(dispatch, error);
      },
    );
  }
);

export const getFollowers = (username, token) => (
  dispatch => (
    getData(dispatch, 'followers', username, token)
  )
);

export const getFollowing = (username, token) => (
  dispatch => (
    getData(dispatch, 'following', username, token)
  )
);
