import * as types from '../actions/actionTypes';

const initialState = {
  output: 0,
  failing: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RATE_ARTICLE:
      return { ...state, output: action.payload };

    case types.RATE_ARTICLE_SUCCESS:
      return { ...state, output: action.rating };

    case types.RATE_ARTICLE_FAIL:
      return { ...state, output: action.error, failing: true };

    case types.RATE_ARTICLE_RESET:
      return { ...state, failing: null };

    default:
      return state;
  }
};

export default reducer;
