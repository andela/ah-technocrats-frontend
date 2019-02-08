import * as types from '../actions/actionTypes';

// sets default state
const initialState = [{
  like: 0,
  error: null,
}];

// forks logic depending on the action that comes in
const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIKE_ACTION:
      return { ...state, action: action.request };

    case types.LIKE_SUCCESSFUL:
      return { ...state, like: action.successfulLike };

    case types.LIKE_UNSUCCESSFUL:
      return { ...state, error: action.error };

    case types.LIKE_RESET:
      return { ...state, error: null };

    default:
      return state;
  }
};

export default likeReducer;
