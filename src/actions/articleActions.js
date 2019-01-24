import axios from 'axios';
import {
  FETCH_ARTICLES, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILS, PAGE, NEXT_PAGE,
} from './actionTypes';

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

export const fetchPagesCount = payload => (
  {
    type: PAGE,
    payload,
  }
);

export const fetchArticleFails = errorMessage => (
  {
    type: FETCH_ARTICLES_FAILS,
    errorMessage,
  }
);
export const getNextPage = () => (
  {
    type: NEXT_PAGE,
  }
);


export function fetchArticles() {
  return (dispatch) => {
    dispatch(fetchAllArticles());
    return axios.get('https://ah-technocrats.herokuapp.com/api/articles/?limit=10&offset=00')
      .then(payload => dispatch(fetchArticlesSuccess(payload.data.results.articles)))
      .catch(errorMessage => dispatch(fetchArticleFails(errorMessage)));
  };
}

export function pageData() {
  return (dispatch) => {
    dispatch(fetchAllArticles());
    return axios.get('https://ah-technocrats.herokuapp.com/api/articles/')
      .then(payload => dispatch(fetchPagesCount(payload.data.count)))
      .catch(errorMessage => dispatch(fetchArticleFails(errorMessage)));
  };
}

export function getPage(page) {
  const newPage = page * 10 - 10;
  return (dispatch) => {
    dispatch(getNextPage());
    return axios.get(`https://ah-technocrats.herokuapp.com/api/articles/?limit=10&offset=${newPage}`)
      .then(payload => dispatch(fetchArticlesSuccess(payload.data.results.articles)))
      .catch(errorMessage => dispatch(fetchArticleFails(errorMessage)));
  };
}
