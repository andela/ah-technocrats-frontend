import * as types from '../actions/actionTypes';

const initialState = {
  articleSlug: '',
  comments: {},
  error: null,
  replies: {},
};

export default function getCommentsReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_COMMENTS:
      return {
        ...state, articleSlug: action.articleSlug,
      };
    case types.FETCH_COMMENTS_SUCCESS:
      return {
        ...state, comments: action.comments,
      };
    case types.FETCH_COMMENTS_FAIL:
      return {
        ...state, error: action.error,
      };
    case types.FETCH_COMMENTS_REPLIES:
      return {
        ...state, articleSlug: action.articleSlug,
      };
    case types.FETCH_COMMENTS_REPLIES_SUCCESS:
      return {
        ...state, replies: action.replies,
      };

    case types.FETCH_COMMENTS_REPLIES_FAIL:
      return {
        ...state, error: action.error,
      };
    default:
      return state;
  }
}
