import axios from 'axios';

export const ARTICLE_GET_PROCESSING = 'ARTICLE_GET_PROCESSING';
export const articleGetProcessing = processing => ({
  type: ARTICLE_GET_PROCESSING,
  processing,
});

export const ARTICLE_GET_DONE = 'ARTICLE_GET_DONE';
export const articleGetDone = article => ({
  type: ARTICLE_GET_DONE,
  article,
});

export const ARTICLE_GET_ERROR = 'ARTICLE_GET_ERROR';
export const articleGetError = reason => ({
  type: ARTICLE_GET_ERROR,
  reason,
});

export const ARTICLE_GET_SUCCESS = 'ARTICLE_GET_SUCCESS';
export const articleGetSuccess = success => ({
  type: ARTICLE_GET_SUCCESS,
  success,
});

export const getErr = error => (error || 'Something went wrong');

export const fetchArticle = slug => (dispatch) => {
  dispatch(articleGetProcessing(true));
  return axios.get(
    `https://ah-technocrats.herokuapp.com/api/articles/${slug}`,
  ).then((response) => {
    dispatch(articleGetDone(response.data));
    dispatch(articleGetSuccess(true));
    dispatch(articleGetProcessing(false));
  }).catch((error) => {
    dispatch(articleGetError(getErr(error)));
    dispatch(articleGetProcessing(false));
    dispatch(articleGetSuccess(false));
  });
};
