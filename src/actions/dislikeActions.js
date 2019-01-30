import axios from 'axios';
import Cookies from 'js-cookie';
import * as types from './actionTypes';
import { fetchArticle } from './viewArticleActions';

// creates request action
export const DislikeAction = request => (
  {
    type: types.DISLIKE_ACTION,
    request,
  }
);

// creates disliking action
export const DislikeSuccessful = success => (
  {
    type: types.DISLIKE_SUCCESSFUL,
    success,
  }
);

// creates undisliking action
export const DislikeFailed = failed => (
  {
    type: types.DISLIKE_FAILED,
    failed,
  }
);

const token = Cookies.get('access_token');
const url = 'https://ah-technocrats.herokuapp.com/api/articles';
const headers = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Token ${token}`,
  },
};
export const dislikeArticle = slug => (dispatch) => {
  dispatch(DislikeAction(slug));
  return axios.put(`${url}/${slug}/dislike/`, slug,
    headers)
    .then(res => dispatch(DislikeSuccessful(res.data.article),
      dispatch(fetchArticle(slug))))
    .catch((error) => {
      dispatch(DislikeFailed(error));
    });
};
