import * as types from '../actions/actionTypes';

const initialState = [{
  reply: '',
  error: {},
}];


export default function replyReducer(state = initialState, action) {
  switch (action.type) {
    case types.COMMENT_REPLY_SUBMIT:
      return { ...state, action: action.replyData, loading: true };

    case types.CREATE_REPLY_FAIL:
      return { ...state, error: action.error, loading: false };

    case types.CREATE_REPLY_SUCCESS:
      return {
        ...state, message: action.message, loading: false, error: null,
      };

    default:
      return state;
  }
}