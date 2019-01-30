import Axios from 'axios';
import Cookies from 'js-cookie';
import * as types from './actionTypes';

export const createCommentSuccess = comment => ({
  type: types.CREATE_COMMENTS_SUCCESS,
  comment,
});

export const createCommentFail = error => ({
  type: types.CREATE_COMMENTS_FAIL,
  error,
});


export const articleCommentSubmit = commentData => ({
  type: types.ARTICLE_COMMENT_SUBMIT,
  commentData,
});

export const createReplySuccess = reply => ({
  type: types.CREATE_REPLY_SUCCESS,
  reply,
});

export const createReplyFail = error => ({
  type: types.CREATE_REPLY_FAIL,
  error,
});


export const commentReplySubmit = replyData => ({
  type: types.COMMENT_REPLY_SUBMIT,
  replyData,
});

export const deleteCommentSubmit = () => ({
  type: types.DELETE_COMMENT_SUBMIT,
});

export const deleteCommentSuccess = reply => ({
  type: types.DELETE_COMMENT_SUCCESS,
  reply,
});

export const deleteCommentFail = error => ({
  type: types.DELETE_COMMENT_FAIL,
  error,
});


export const postComment = (commentData, slug) => (dispatch) => {
  dispatch(articleCommentSubmit(commentData));
  const token = Cookies.get('access_token');
  return Axios.post(`https://ah-technocrats.herokuapp.com/api/articles/${slug}/comments/`, commentData, {
    headers: {
      Authorization: `Token ${token}`,
    },
  })
    .then((res) => {
      dispatch(createCommentSuccess(res.data.message));
    })
    .catch((error) => {
      dispatch(createCommentFail(error.response.data.errors));
    });
};

export const postReply = (replyData, slug, commentId) => (dispatch) => {
  dispatch(commentReplySubmit(replyData));
  const token = Cookies.get('access_token');
  return Axios.post(`https://ah-technocrats.herokuapp.com/api/articles/${slug}/comments/${commentId}/replies/`, replyData, {
    headers: {
      Authorization: `Token ${token}`,
    },
  })
    .then((res) => {
      dispatch(createReplySuccess(res.data.message));
    })
    .catch((error) => {
      dispatch(createReplyFail(error.response.data.errors));
    });
};

export const deleteComment = (slug, commentId) => (dispatch) => {
  dispatch(commentReplySubmit());
  const token = Cookies.get('access_token');
  return Axios.delete(`https://ah-technocrats.herokuapp.com/api/articles/${slug}/comments/${commentId}/`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  })
    .then((res) => {
      dispatch(deleteCommentSuccess(res.data.message));
    })
    .catch((error) => {
      dispatch(deleteCommentFail(error.response.data.errors));
    });
};
