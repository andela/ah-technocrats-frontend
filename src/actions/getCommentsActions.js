import Axios from 'axios';
import * as types from './actionTypes';

export const fetchComment = articleSlug => ({
  type: types.FETCH_COMMENTS,
  articleSlug,
});

export const fetchCommentsSuccess = comments => ({
  type: types.FETCH_COMMENTS_SUCCESS,
  comments,
});

export const fetchCommentsFail = error => ({
  type: types.FETCH_COMMENTS_FAIL,
  error,
});

export const fetchCommentReplies = (articleSlug, commentId) => ({
  type: types.FETCH_COMMENTS_REPLIES,
  articleSlug,
  commentId,
});

export const fetchCommentsRepliesSuccess = (replies, commentId) => ({
  type: types.FETCH_COMMENTS_REPLIES_SUCCESS,
  replies,
  commentId,
});

export const fetchCommentsRepliesFail = error => ({
  type: types.FETCH_COMMENTS_REPLIES_FAIL,
  error,
});

export const fetchCommentsRequest = articleSlug => (dispatch) => {
  dispatch(fetchComment(articleSlug));
  return Axios.get(`https://ah-technocrats.herokuapp.com/api/articles/${articleSlug}/comments/`)
    .then((res) => {
      dispatch(fetchCommentsSuccess(res.data));
    })
    .catch((error) => {
      dispatch(fetchCommentsFail(error));
    });
};

export const fetchCommentsRepliesRequest = (articleSlug, commentId) => (dispatch) => {
  dispatch(fetchCommentReplies(articleSlug, commentId));
  return Axios.get(`https://ah-technocrats.herokuapp.com/api/articles/${articleSlug}/comments/${commentId}/replies/`)
    .then((res) => {
      dispatch(fetchCommentsRepliesSuccess(res.data, commentId));
    })
    .catch((error) => {
      dispatch(fetchCommentsRepliesFail(error));
    });
};
