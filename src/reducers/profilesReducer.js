import {
  FETCHING_PROFILES, FETCH_PROFILES, FETCH_PROFILES_FAILED, FETCH_PROFILES_SUCCESSFUL,
} from '../actions/actionTypes';


const initialState = {
  profiles: [],
  fetching: false,
  fetchFailed: false,
  fetchSuccess: false,
};
const profilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_PROFILES:
      return { ...state, fetching: action.status };
    case FETCH_PROFILES:
      return { ...state, profiles: action.profiles };
    case FETCH_PROFILES_FAILED:
      return { ...state, fetchFailed: action.status };
    case FETCH_PROFILES_SUCCESSFUL:
      return { ...state, fetchSuccess: action.status };
    default:
      return state;
  }
};

export default profilesReducer;
