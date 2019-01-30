import Axios from 'axios';
import Cookies from 'js-cookie';
import * as types from './actionTypes';

export const editCommentSuccess = comment => ({
  type: types.EDIT_COMMENTS_SUCCESS,
  comment,
});

export const editCommentFail = error => ({
  type: types.EDIT_COMMENTS_FAIL,
  error,
});


export const editCommentSubmit = commentData => ({
  type: types.EDIT_COMMENT_SUBMIT,
  commentData,
});

export const editReplySuccess = reply => ({
  type: types.EDIT_REPLY_SUCCESS,
  reply,
});

export const editReplyFail = error => ({
  type: types.EDIT_REPLY_FAIL,
  error,
});


export const editReplySubmit = replyData => ({
  type: types.EDIT_REPLY_SUBMIT,
  replyData,
});

export const editComment = (commentData, slug, commentId) => (dispatch) => {
  dispatch(editCommentSubmit(commentData));
  const token = Cookies.get('access_token');
  return Axios.put(`https://ah-technocrats.herokuapp.com/api/articles/${slug}/comments/${commentId}/`, commentData, {
    headers: {
      Authorization: `Token ${token}`,
    },
  })
    .then((res) => {
      dispatch(editCommentSuccess(res.data.message));
    })
    .catch((error) => {
      dispatch(editCommentFail(error.response.data.errors));
    });
};

export const editReply = (replyData, slug, commentId, replyId) => (dispatch) => {
  dispatch(editReplySubmit(replyData));
  const token = Cookies.get('access_token');
  return Axios.put(`https://ah-technocrats.herokuapp.com/api/articles/${slug}/comments/${commentId}/replies/${replyId}/`, replyData, {
    headers: {
      Authorization: `Token ${token}`,
    },
  })
    .then((res) => {
      dispatch(editReplySuccess(res.data.message));
    })
    .catch((error) => {
      dispatch(editReplyFail(error.response.data.errors));
    });
};
