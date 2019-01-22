import axios from 'axios';
import Cookies from 'js-cookie';

import * as types from './actionTypes';

export const fetchAllArticles = () => (
  {
    type: types.FETCH_ARTICLES,
  }
);
export const fetchArticlesSuccess = payload => (
  {
    type: types.FETCH_ARTICLES_SUCCESS,
    payload,
  }
);

export const fetchPagesCount = payload => (
  {
    type: types.PAGE,
    payload,
  }
);

export const fetchArticleFails = error => (
  {
    type: types.FETCH_ARTICLES_FAILS,
    error,
  }
);
export const getNextPage = () => (
  {
    type: types.NEXT_PAGE,
  }
);


export const create = articleData => ({
  type: types.CREATE_ARTICLE,
  articleData,
});
export const createFail = error => ({
  type: types.CREATE_ARTICLE_FAILS,
  error,
});

export const createSuccess = response => ({
  type: types.CREATE_ARTICLE_SUCCESS,
  response,
});

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
const token = Cookies.get('access_token');

export const createArticle = articleData => (dispatch) => {
  dispatch(create(articleData));
  return axios.post('https://ah-technocrats.herokuapp.com/api/articles/', articleData, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  })
    .then(res => dispatch(createSuccess(res.data.message)))
    .catch((error) => {
      dispatch(createFail(error));
    });
};

export default fetchArticles;
