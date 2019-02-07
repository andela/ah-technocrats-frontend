import axios from 'axios';
import * as types from './actionTypes';
import { fetchArticle } from './viewArticleActions';
import { LikeActionRejected, LikeActionReset } from './likeActions';

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
export const DislikeFailed = error => (
  {
    type: types.DISLIKE_FAILED,
    error,
  }
);


export const DisLikeActionReset = () => (
  {
    type: types.DISLIKE_RESET,
  }
);


const url = 'https://ah-technocrats.herokuapp.com/api/articles';
export const dislikeArticle = (slug, token) => (dispatch) => {
  dispatch(DislikeAction(slug));
  return axios.put(`${url}/${slug}/dislike/`, slug, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  })
    .then(res => dispatch(DislikeSuccessful(res.data.article),
      dispatch(fetchArticle(slug))))
    .catch((error) => {
      dispatch(LikeActionRejected(error));
      dispatch(LikeActionReset());
    });
};
