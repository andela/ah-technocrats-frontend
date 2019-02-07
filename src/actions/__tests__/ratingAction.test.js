import thunk from 'redux-thunk';
import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import * as actions from '../ratingActions';
import * as types from '../actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Rating Actions', () => {
  describe('Successful Rating', () => {
    it('should create a request action.', () => {
      const ratingData = {
        request: {
          slug: '',
          rating: '',
        },
      };
      const expectedAction = {
        type: types.RATE_ARTICLE,
        payload: ratingData,
      };
      expect(actions.rate(ratingData)).toEqual(expectedAction);
    });

    it('should rate successfuly action.', () => {
      const message = 'rated';
      const expectedAction = {
        type: types.RATE_ARTICLE_SUCCESS,
        rating: message,
      };
      expect(actions.ratingSuccess(message)).toEqual(expectedAction);
    });

    it('should create action for failed rating.', () => {
      const message = 'Failed to rate';
      const expectedAction = {
        type: types.RATE_ARTICLE_FAIL,
        error: message,
      };
      expect(actions.ratingFail(message)).toEqual(expectedAction);
    });
  });
});

// Mock data
const ratingData = {
  slug: 'hello',
  rating: { rating: 2 },
};

describe('Rating actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('successful async action', () => {
    const message = 'Successfully rated article';
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: message,
      });
    });
    const expectedActions = [
      { type: types.RATE_ARTICLE, payload: ratingData },
      { type: types.RATE_ARTICLE_SUCCESS, rating: message },
    ];
    const store = mockStore(message);
    return store.dispatch(actions.rateArticle(ratingData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('failing async action', () => {
    const message = 'error';
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 403,
        response: message,
      });
    });
    const expectedActions = [
      { type: types.RATE_ARTICLE, payload: ratingData },
      { type: types.RATE_ARTICLE_FAIL, error: message },
      { type: types.RATE_ARTICLE_RESET },
    ];
    const store = mockStore(message);
    return store.dispatch(actions.rateArticle(ratingData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
