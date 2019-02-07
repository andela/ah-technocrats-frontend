import axios from 'axios';
import * as types from './actionTypes';

export const rate = payload => (
  {
    type: types.RATE_ARTICLE,
    payload,
  }
);

export const ratingSuccess = rating => (
  {
    type: types.RATE_ARTICLE_SUCCESS,
    rating,
  }
);

export const ratingFail = error => (
  {
    type: types.RATE_ARTICLE_FAIL,
    error,
  }
);
export const ratingReset = () => (
  {
    type: types.RATE_ARTICLE_RESET,
  }
);

export const rateArticle = (payload, token) => (dispatch) => {
  const { slug, rating } = payload;
  dispatch(rate(payload));
  return axios.post(`https://ah-technocrats.herokuapp.com/api/articles/${slug}/rate/`, rating, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  })
    .then(res => dispatch(ratingSuccess(res.data)))
    .catch((error) => {
      dispatch(ratingFail(error.response.data));
      dispatch(ratingReset());
    });
};
