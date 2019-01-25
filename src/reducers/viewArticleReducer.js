import {
  ARTICLE_GET_PROCESSING,
  ARTICLE_GET_SUCCESS,
  ARTICLE_GET_DONE,
  ARTICLE_GET_ERROR,
} from '../actions/viewArticleActions';

const initialState = {
  processing: true,
  article: {},
  reason: '',
  success: false,
};

const getFetchArticle = (state = initialState, action) => {
  switch (action.type) {
    case ARTICLE_GET_PROCESSING:
      return { ...state, processing: action.processing };
    case ARTICLE_GET_DONE:
      return { ...state, article: action.article, success: true };
    case ARTICLE_GET_SUCCESS:
      return { ...state, success: action.success };
    case ARTICLE_GET_ERROR:
      return { ...state, reason: action.reason };
    default:
      return state;
  }
};

export default getFetchArticle;
