import * as types from '../actions/actionTypes';

const initialState = [{
  error: {},
}];


export default function deleteCommentsReducer(state = initialState, action) {
  switch (action.type) {
    case types.DELETE_COMMENT_SUBMIT:
      return { ...state, loading: true };

    case types.DELETE_COMMENT_FAIL:
      return { ...state, error: action.error, loading: false };

    case types.DELETE_COMMENT_SUCCESS:
      return {
        ...state, message: action.message, loading: false, error: null,
      };
    default:
      return state;
  }
}
