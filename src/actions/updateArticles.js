import Cookies from 'js-cookie';
import axios from 'axios';
import * as types from './actionTypes';

// creates request action
export const updateAction = request => (
  {
    type: types.UPDATE_ACTION,
    request,
  }
);

// creates update success action
export const updateSuccessful = successfulMessage => (
  {
    type: types.UPDATE_SUCCESSFUL,
    successfulMessage,
  }
);
export const updated = status => (
  {
    type: types.ARTICLE_UPDATED,
    status,
  }
);

// creates update reject action
export const updateRejected = error => (
  {
    type: types.UPDATE_REJECTED,
    error,
  }
);

const token = Cookies.get('access_token');
export const updateArticle = (articleData, slug) => (dispatch) => {
  dispatch(updateAction(articleData));
  return axios.put(`https://ah-technocrats.herokuapp.com/api/articles/${slug}`, articleData, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  })
    .then((res) => {
      dispatch(updateSuccessful(res));
      dispatch(updated(true));
    })
    .catch((error) => {
      dispatch(updateRejected(error.response.data.errors));
    });
};
