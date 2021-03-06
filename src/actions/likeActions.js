import axios from 'axios';
import * as types from './actionTypes';
import { fetchArticle } from './viewArticleActions';

// creates request action
export const Action = request => (
  {
    type: types.LIKE_ACTION,
    request,
  }
);

// creates liking action
export const LikeAction = successfulLike => (
  {
    type: types.LIKE_SUCCESSFUL,
    successfulLike,
  }
);

export const LikeActionRejected = error => (
  {
    type: types.LIKE_UNSUCCESSFUL,
    error,
  }
);

export const LikeActionReset = () => (
  {
    type: types.LIKE_RESET,
  }
);


const url = 'https://ah-technocrats.herokuapp.com/api/articles';
export const likeAction = (slug, token) => (dispatch) => {
  dispatch(Action(slug));
  return axios.put(`${url}/${slug}/like/`, slug, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  })
    .then(res => dispatch(LikeAction(res.data.article),
      dispatch(fetchArticle(slug))))
    .catch((error) => {
      dispatch(LikeActionRejected(error));
      dispatch(LikeActionReset());
    });
};
