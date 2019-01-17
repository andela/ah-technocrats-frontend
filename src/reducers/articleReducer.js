import { FETCH_ARTICLES } from '../actions/actionTypes';

const initialState = {
  items: [],
  item: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}
