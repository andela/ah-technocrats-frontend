import * as types from '../actions/actionTypes';

// sets default state
const initialState = [{
  like: 0,
}];

// forks logic depending on the action that comes in
const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIKE_ACTION:
      return { ...state, action: action.request };

    case types.LIKE_SUCCESSFUL:
      return { ...state, like: action.successfulLike };

    case types.LIKE_UNSUCCESSFUL:
      return { ...state, unlike: action.unsuccessfull };

    case types.LIKE_COUNT:
      return { ...state, like: state.article.article.like.likeCount };

    default:
      return state;
  }
};

export default likeReducer;
