import Axios from 'axios';
import Cookies from 'js-cookie';
import {
  DELETE_SUCCESSFULL, DELETE_FAILED,
  DELETING_ARTICLE, FETCH_ARTICLES, FETCH_AUTHROS_ARTCILES_FAILED, FETCHING_OWN_ARTICLES,
} from './deleteArticleActionTypes';


export const deleteSuccessful = (status, articleSlug, message) => (
  {
    type: DELETE_SUCCESSFULL,
    details: {
      status,
      articleSlug,
      message,
    },
  }
);

export const fetchOwnArticles = articles => (
  {
    type: FETCH_ARTICLES,
    articles,
  }
);

export const fetchOwnArticlesFailed = errorMessage => (
  {
    type: FETCH_AUTHROS_ARTCILES_FAILED,
    errorMessage,
  }
);


export const deleteFailed = (status, reason) => (
  {
    type: DELETE_FAILED,
    details: {
      status,
      reason,
    },
  }
);

export const fetchingOwnArticles = loading => (
  {
    type: FETCHING_OWN_ARTICLES,
    loading,
  }
);

export const deletingArticle = status => (
  {
    type: DELETING_ARTICLE,
    status,
  }
);
export const deleteArticle = articleSlug => (
  (dispatch) => {
    dispatch(deletingArticle(true));
    return Axios.delete(
      `https://ah-technocrats.herokuapp.com/api/articles/${articleSlug}`,
      {
        headers: {
          Authorization: `Token ${Cookies.get('access_token')}`,
          'Content-Type': 'application/json',
        },
      },
    ).then(
      (response) => {
        dispatch(deleteSuccessful(true, articleSlug, response.data.message));
        dispatch(deletingArticle(false));
      },
    ).catch(
      (error) => {
        if (error.status === 403) {
          dispatch(deletingArticle(false));
          dispatch(deleteFailed(true, 'Session Expired. Please Login Again'));
        }
      },
    );
  }
);
export const fetchAuthorArticles = username => (dispatch) => {
  dispatch(fetchingOwnArticles(true));
  return Axios.get(`https://ah-technocrats.herokuapp.com/api/article/?author=${username}`)
    .then((response) => {
      if (username) {
        dispatch(fetchOwnArticles(response.data));
      } else {
        throw new Error('Session Expired. Please Login Again');
      }
      dispatch(fetchingOwnArticles(false));
    })
    .catch((errorMessage) => {
      dispatch(fetchingOwnArticles(false));
      dispatch(fetchOwnArticlesFailed(errorMessage));
    });
};
