import * as types from '../actions/profileActionTypes';

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

const profileDetails = (state = initialState, action) => {
  switch (action.type) {
    case types.PROFILE_DETAILS:
      return { ...state, details: action.details };
    case types.UPDATING:
      return { ...state, updating: action.updating };
    case types.ERRORS:
      return { ...state, errors: action.errors };
    case types.UPDATEPROFILE:
      return { ...state, updated: action.status };
    case types.FOLLOWING:
      return { ...state, following: action.following };
    case types.FOLLOWERS:
      return { ...state, followers: action.followers };
    case types.REQUEST_STATUS:
      return { ...state, requestStatus: action.details };
    default:
      return state;
  }
};

export default profileDetails;
