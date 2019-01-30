import * as types from '../actions/actionTypes';

// sets default state
const initialState = [{
  dislike: 0,
  undislike: 0,
}];

// forks logic depending on the action that comes in
const dislikeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DISLIKE_ACTION:
      return { ...state, action: action.request };

    case types.DISLIKE_SUCCESSFUL:
      return { ...state, dislike: action.success };

    case types.DISLIKE_FAILED:
      return { ...state, undislike: action.failed };

    default:
      return state;
  }
};

export default dislikeReducer;
