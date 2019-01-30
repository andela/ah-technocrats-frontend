import * as types from '../actions/actionTypes';

const initialState = [{
  comment: '',
  reply: '',
  error: {},
}];


export default function createCommentReducer(state = initialState, action) {
  switch (action.type) {
    case types.ARTICLE_COMMENT_SUBMIT:
      return { ...state, action: action.commentData, loading: true };
    case types.CREATE_COMMENTS_FAIL:
      return { ...state, error: action.error, loading: false };
    case types.CREATE_COMMENTS_RESET:
      return { ...state, error: null };
    case types.CREATE_COMMENTS_SUCCESS:
      return {
        ...state, message: action.message, loading: false, error: null,
      };
    default:
      return state;
  }
}