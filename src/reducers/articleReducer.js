import * as types from '../actions/actionTypes';

const initialState = {
  items: [],
  item: {},
  count: 0,
  createSuccess: false,
};


export default function (state = initialState, action) {
  switch (action.type) {
    case types.PAGE:
      return {
        ...state,
        count: action.payload,
      };
    case types.FETCH_ARTICLES:
      return { ...state };
    case types.FETCH_ARTICLES_FAILS:
      return { ...state, error: action.error };
    case types.FETCH_ARTICLES_SUCCESS:
      return { ...state, items: action.payload };
    case types.CREATE_ARTICLE:
      return { ...state, item: action.articleData, loading: true };
    case types.CREATE_ARTICLE_FAILS:
      return { ...state, error: action.error, loading: false };
    case types.CREATE_ARTICLE_SUCCESS:
      return { ...state, item: action.response, createSuccess: true };
    default:
      return state;
  }
}
