import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import * as actions from '../articleActions';
import * as types from '../actionTypes';

const mock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const dummyData = {
  count: 5,
  next: null,
  previous: null,
  results: {
    articles: [
      {
        id: 1,
        title: 'How to train your dragon3',
        description: 'Ever wonder how?',
        body: 'You have to believe',
        author: {
          username: 'Jacob',
          email: 'jake@jake.jake',
          created_at: '2019-01-16T11:22:08.569092Z',
          bio: '',
          country: '',
          avatar: 'https://libertv.com/wp-content/uploads/2018/03/user-avatar-placeholder-1.png',
          phone: '',
          website: '',
        },
        tags: [],
        like: {
          likeCount: 0,
        },
        dislike: {
          dislikeCount: 0,
        },
        rating: 0,
        image: '',
        article_slug: 'how-to-train-your-dragon3',
        created_at: '2019-01-16T11:22:39.439567Z',
        updated_at: '2019-01-16T11:22:39.439615Z',
        favorite: [],
      },
    ],
  },
};

const articlesArray = dummyData.results.articles;

const articleData = {
  title: 'Hello World',
  description: 'Hello world',
  body: 'Kenya',
  author: 'Author',
};

const createExpectedRes = {
  token: 'ertyuiop[poihgfdsxcvbnjmnbvcvbn',
  message: "The article 'Hello hello' has been successfully created.",
};
const errorExpectedRes = {
  token: 'ertyuiop[poihgfdsxcvbnjmnbvcvbn',
  response: {
    data: {
      detail: {
        message: "The article 'Hello hello' has been successfully created.",
      },
    },
  },
};

describe('getArticles actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  it('creates FETCH_ARTICLES_SUCCESS after successfully fetching articles', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: dummyData,
      });
    });
    const expectedActions = [
      { type: types.FETCH_ARTICLES },
      { type: types.FETCH_ARTICLES_SUCCESS, payload: articlesArray },
    ];
    const store = mockStore(dummyData);
    return store.dispatch(actions.fetchArticles()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates CREATE_ARTICLES_SUCCESS after successfully creating an article', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: createExpectedRes,
      });
    });
    const message = "The article 'Hello hello' has been successfully created.";
    const expectedActions = [
      { type: types.CREATE_ARTICLE, articleData },
      { type: types.CREATE_ARTICLE_SUCCESS, response: message },
    ];
    const store = mockStore(message);
    return store.dispatch(actions.createArticle(articleData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('Article Actions types', () => {
  describe('ArtSuccessful', () => {
    it('should create a request action', () => {
      const expectedAction = {
        type: types.FETCH_ARTICLES,

      };
      expect(actions.fetchAllArticles()).toEqual(expectedAction);
    });

    it('should create a success action', () => {
      const expectedAction = {
        type: types.FETCH_ARTICLES_SUCCESS,
      };
      expect(actions.fetchArticlesSuccess()).toEqual(expectedAction);
    });

    it('should create a fail action', () => {
      const expectedAction = {
        type: types.FETCH_ARTICLES_FAILS,
      };
      expect(actions.fetchArticleFails()).toEqual(expectedAction);
    });
  });
});

describe('Pagination', () => {
  afterEach = (
    () => mock.restore()
  );

  it('should create an action to get articles count', () => {
    const userData = {
      email: 'jake@jake.com',
      password: '@jakejake254',
    };
    mock.onGet('https://ah-technocrats.herokuapp.com/api/articles/').replyOnce(200,
      {
        user: {
          token: 'token',
        },
      });

    const expectedActions = [
      {
        type: types.PAGE,
        request: userData,
      },
      {
        type: types.FETCH_ARTICLES_FAILS,
        successfulMessage: {
          user: {
            token: 'token',
          },
        },
      },
    ];
    const store = mockStore({ userData: {} });
    store.dispatch(actions.pageData(userData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('Get paginated data', () => {
  afterEach = (
    () => mock.restore()
  );

  it('should create an action to get articles count', () => {
    const userData = {
      email: 'jake@jake.com',
      password: '@jakejake254',
    };
    mock.onGet('https://ah-technocrats.herokuapp.com/api/articles/?limit=10&offset=10').replyOnce(200,
      {
        user: {
          token: 'token',
        },
      });

    const expectedActions = [
      {
        type: types.PAGE,
        request: userData,
      },
      {
        type: types.FETCH_ARTICLES_FAILS,
        successfulMessage: {
          user: {
            token: 'token',
          },
        },
      },
    ];
    const store = mockStore({ userData: {} });
    store.dispatch(actions.getPage(userData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
describe('Article creation Actions types', () => {
  describe('dispatch create', () => {
    it('should create a request action', () => {
      const expectedAction = {
        type: types.CREATE_ARTICLE,

      };
      expect(actions.create()).toEqual(expectedAction);
    });

    it('should create a success create action', () => {
      const expectedAction = {
        type: types.CREATE_ARTICLE_SUCCESS,
        response: articleData,
      };
      expect(actions.createSuccess(articleData)).toEqual(expectedAction);
    });

    it('should create a fail create action', () => {
      const message = 'error';
      const expectedAction = {
        type: types.CREATE_ARTICLE_FAILS,
        error: message,
      };
      expect(actions.createFail(message)).toEqual(expectedAction);
    });
  });
});
