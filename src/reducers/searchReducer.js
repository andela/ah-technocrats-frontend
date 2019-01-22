import * as types from '../actions/actionTypes';

const initialState = {
  search: '',
  results: [],
  noResults: false,
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case types.SEARCH_SUBMIT:
      return {
        ...state, results: null, keyWords: action.searchKeyWords, loading: true,
      };
    case types.SEARCH_SUCCESS:
      return {
        ...state, results: action.results, loading: false, noResults: false,
      };
    case types.SEARCH_FAIL:
      return {
        ...state, results: null, response: action.response, loading: false, noResults: true,
      };
    default:
      return state;
  }
}
