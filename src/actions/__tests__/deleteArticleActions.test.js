/* eslint-disable comma-dangle */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import {
  FETCH_ARTICLES, DELETE_SUCCESSFULL, DELETE_FAILED, FETCH_AUTHROS_ARTCILES_FAILED, DELETING_ARTICLE
} from '../deleteArticleActionTypes';
import {
  fetchOwnArticles, deleteSuccessful, deleteFailed, fetchOwnArticlesFailed, deleteArticle, fetchAuthorArticles
} from '../deleteArticleAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('deleteArticle actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('creates FETCHOWNARTICLES action after successfuly fetching authros details', () => {
    const articles = [
      {
        id: 54,
        title: 'bb',
        description: 'bbb',
        body: 'sss',
        author: {},
        tags: [],
        like: {
          likeCount: 0
        },
        dislike: {
          dislikeCount: 0
        },
        rating: 0,
        image: '',
        article_slug: 'bb-45269c748bbf424f93b7aa3b476711b5',
        created_at: '2019-01-24T13:22:41.771484Z',
        updated_at: '2019-01-24T13:22:41.771538Z',
        favorite: []
      },
      {
        id: 117,
        title: 'Hello hello',
        description: "It's a strange world",
        body: 'Scenario 4:  button like below:',
        author: {},
        tags: [],
        like: {
          likeCount: 0
        },
        dislike: {
          dislikeCount: 0
        },
        rating: 0,
        image: '',
        article_slug: 'hello-hello',
        created_at: '2019-01-24T17:06:05.327645Z',
        updated_at: '2019-01-24T17:06:05.327701Z',
        favorite: []
      }
    ];

    const expectedAction = {
      type: FETCH_ARTICLES,
      articles,
    };
    expect(fetchOwnArticles(articles)).toEqual(expectedAction);
  });

  it('should create DELETE_SUCCESSFUL action after successfully deleting an article', () => {
    const mockData = {
      details: {
        status: true,
        articleSlug: 'blabla',
        message: 'h'
      }
    };
    const expectedAction = {
      type: DELETE_SUCCESSFULL,
      details: mockData.details
    };
    const { status, articleSlug, message } = mockData.details;
    expect(deleteSuccessful(status, articleSlug, message)).toEqual(expectedAction);
  });
  it('should create DELETE_FAILED when deleting article fails', () => {
    const mockData = {
      details: {
        status: true,
        reason: 'i do know'
      }
    };
    const expectedAction = {
      type: DELETE_FAILED,
      details: mockData.details
    };
    const { status, reason } = mockData.details;
    expect(deleteFailed(status, reason)).toEqual(expectedAction);
  });

  it('should create FETCH_OWN_ARTICLE_FAILED', () => {
    const mockData = {
      errorMessage: "I don't know what happened"
    };
    const expectedAction = {
      type: FETCH_AUTHROS_ARTCILES_FAILED,
      errorMessage: mockData.errorMessage
    };
    const { errorMessage } = mockData;
    expect(fetchOwnArticlesFailed(errorMessage)).toEqual(expectedAction);
  });
  it('should create all actions when fetching articles succeeds', () => {
    moxios.wait(() => {
      const articles = [
        {
          id: 54,
          title: 'bb',
          description: 'bbb',
          body: 'sss',
          author: {},
          tags: [],
          like: {
            likeCount: 0
          },
          dislike: {
            dislikeCount: 0
          },
          rating: 0,
          image: '',
          article_slug: 'bb-45269c748bbf424f93b7aa3b476711b5',
          created_at: '2019-01-24T13:22:41.771484Z',
          updated_at: '2019-01-24T13:22:41.771538Z',
          favorite: []
        },
        {
          id: 117,
          title: 'Hello hello',
          description: "It's a strange world",
          body: 'Scenario 4:  button like below:',
          author: {},
          tags: [],
          like: {
            likeCount: 0
          },
          dislike: {
            dislikeCount: 0
          },
          rating: 0,
          image: '',
          article_slug: 'hello-hello',
          created_at: '2019-01-24T17:06:05.327645Z',
          updated_at: '2019-01-24T17:06:05.327701Z',
          favorite: []
        }
      ];
      const req = moxios.requests.mostRecent();
      req.respondWith({
        status: 200,
        response: articles
      });
      const expectedAction = [
        { type: FETCH_ARTICLES, articles }
      ];
      const store = mockStore({ articles: [] });
      return store.dispatch(fetchAuthorArticles(articles)).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
  });
  it('should create all actions when fetching articles succeeds', () => {
    moxios.wait(() => {
      const req = moxios.requests.mostRecent();
      req.respondWith({
        status: 404,
        response: 'article deleted successfully'
      });
      const expectedAction = [
        { type: FETCH_AUTHROS_ARTCILES_FAILED, errorMessage: 'Session Expired. Please Login Again' }
      ];
      const store = mockStore({ articles: [] });
      return store.dispatch(fetchOwnArticles()).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
  });
  it('should create actions for deleting an article', () => {
    const expectedActions = [
      {
        type: DELETING_ARTICLE, status: true
      },
      {
        type: DELETE_SUCCESSFULL,
        details: {
          status: true, articleSlug: 'article_slug', message: undefined
        }
      },

      {
        type: DELETING_ARTICLE, status: false
      },
    //   {
    //     type: DELETING_ARTICLE, status: true
    //   }
    ];
    moxios.wait(() => {
      const req = moxios.requests.mostRecent();
      req.respondWith({
        status: 403,
        response: { message: 'article deleted successfully' }
      });
    });
    const store = mockStore({ articles: [] });
    return store.dispatch(deleteArticle('article_slug')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
