import { FETCH_ARTICLES, PAGE } from '../actions/actionTypes';

const initialState = {
  items: [],
  item: {},
  count: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      return {
        ...state,
        items: action.payload,
      };

    case PAGE:
      return {
        ...state,
        count: action.payload,
      };

    default:
      return state;
  }
}
