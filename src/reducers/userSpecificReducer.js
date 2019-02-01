import {
  DELETE_SUCCESSFULL, DELETE_FAILED,
  FETCH_ARTICLES, FETCH_AUTHROS_ARTCILES_FAILED, FETCHING_OWN_ARTICLES,
} from '../actions/deleteArticleActionTypes';

const initialState = {
  articles: [],
  deleteSuccessful: {},
  deleteFailed: {},
  loading: false,
  fetchOwnArticlesFailed: false,
};
const ownArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return { ...state, articles: action.articles };
    case DELETE_SUCCESSFULL:
      return {
        ...state,
        articles: state.articles.filter(article => (
          article.article_slug !== action.details.articleSlug
        )),
        deleteSuccessful: action.details,
      };
    case DELETE_FAILED:
      return { ...state, deleteFailed: action.details };
    case FETCHING_OWN_ARTICLES:
      return { ...state, loading: action.loading };
    case FETCH_AUTHROS_ARTCILES_FAILED:
      return { ...state, fetchOwnArticlesFailed: action.errorMessage };
    default:
      return state;
  }
};

export default ownArticlesReducer;
