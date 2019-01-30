import expect from 'expect';
import ownArticlesReducer from '../userSpecificReducer';
import {
  FETCH_ARTICLES, DELETE_SUCCESSFULL,
  DELETE_FAILED, FETCHING_OWN_ARTICLES, FETCH_AUTHROS_ARTCILES_FAILED,
} from '../../actions/deleteArticleActionTypes';

const initialState = {
  articles: [],
  deleteSuccessful: {},
  deleteFailed: {},
  loading: false,
  fetchOwnArticlesFailed: false,
};

describe('userSpecific reducer', () => {
  it('should return the intial state', () => {
    expect(ownArticlesReducer(undefined, {})).toEqual(initialState);
  });
  it('should handle FETCH_ARTICLES', () => {
    const action = {
      type: FETCH_ARTICLES,
      articles: ['one', 'two'],
    };
    const expectedState = {
      articles: ['one', 'two'],
      deleteSuccessful: {},
      deleteFailed: {},
      loading: false,
      fetchOwnArticlesFailed: false,
    };
    expect(ownArticlesReducer(initialState, action)).toEqual(expectedState);
  });
  it('should handle DELETE SUCCESSFUL', () => {
    const action = {
      type: DELETE_SUCCESSFULL,
      details: {
        articleSlug: 'one',
      },
    };
    const state = {
      articles: [
        {
          article_slug: 'one',
        },
        {
          article_slug: 'two',
        },
      ],
      deleteSuccessful: {},
      deleteFailed: {},
      loading: false,
      fetchOwnArticlesFailed: false,
    };
    const newState = {
      articles: [
        {
          article_slug: 'two',
        },
      ],
      deleteSuccessful: {
        articleSlug: 'one',
      },
      deleteFailed: {},
      loading: false,
      fetchOwnArticlesFailed: false,
    };
    expect(ownArticlesReducer(state, action)).toEqual(newState);
  });
  it('should handle DELETE_FAILED', () => {
    const action = {
      type: DELETE_FAILED,
      details: {
        message: 'Article Not Found',
      },
    };
    const newState = {
      articles: [],
      deleteSuccessful: {},
      deleteFailed: {
        message: 'Article Not Found',
      },
      loading: false,
      fetchOwnArticlesFailed: false,
    };
    expect(ownArticlesReducer(undefined, action)).toEqual(newState);
  });
  it('should handle FETCHING_OWN_ARTICLES', () => {
    const action = {
      type: FETCHING_OWN_ARTICLES,
      loading: true,
    };
    const newState = {
      articles: [],
      deleteSuccessful: {},
      deleteFailed: {},
      loading: true,
      fetchOwnArticlesFailed: false,
    };
    expect(ownArticlesReducer(undefined, action)).toEqual(newState);
  });
  it('should handle FETCH_AUTHROS_ARTICLES_FAILED', () => {
    const action = {
      type: FETCH_AUTHROS_ARTCILES_FAILED,
      errorMessage: 'Article Not Found',
    };
    const newState = {
      articles: [],
      deleteSuccessful: {},
      deleteFailed: {},
      loading: false,
      fetchOwnArticlesFailed: 'Article Not Found',
    };
    expect(ownArticlesReducer(undefined, action)).toEqual(newState);
  });
});
