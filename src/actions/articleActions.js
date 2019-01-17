import axios from 'axios';
import { FETCH_ARTICLES, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILS } from './actionTypes';

export const fetchAllArticles = () => (
  {
    type: FETCH_ARTICLES,
  }
);

export const fetchArticlesSuccess = payload => (
  {
    type: FETCH_ARTICLES_SUCCESS,
    payload,
  }
);

export const fetchArticleFails = errorMessage => (
  {
    type: FETCH_ARTICLES_FAILS,
    errorMessage,
  }
);

export function fetchArticles() {
  return (dispatch) => {
    dispatch(fetchAllArticles());
    return axios.get('https://ah-technocrats.herokuapp.com/api/articles/')
      .then(payload => dispatch(fetchArticlesSuccess(payload.data.results.articles)))
      .catch(errorMessage => dispatch(fetchArticleFails(errorMessage)));
  };
}

export default fetchArticles;
