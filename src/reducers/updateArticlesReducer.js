import * as types from '../actions/actionTypes';

const initialState = [{
  title: '',
  body: '',
  description: '',
  error: {},
  updated: false,
}];


const updateArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_ACTION:
      return { ...state, action: action.request, loading: true };

    case types.UPDATE_SUCCESSFUL:
      return { ...state, successfulMessage: 'Successfully updated', loading: false };

    case types.UPDATE_REJECTED:
      return { ...state, error: action.error, loading: false };
    case types.ARTICLE_UPDATED:
      return { ...state, updated: action.status, loading: false };
    default:
      return state;
  }
};

export default updateArticlesReducer;
