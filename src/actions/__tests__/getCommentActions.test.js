import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import * as commentActions from '../getCommentsActions';
import commentMockData from './commentMockData';
import * as types from '../actionTypes';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);


describe('Get Comment Actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  beforeEach(() => {
    moxios.install();
  });

  it('should call the GET_COMMENT action on load of the page', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: commentMockData,
      });
    });

    const articleSlug = 'some-article-slug';
    const comments = commentMockData;

    const expectedActions = [
      { type: types.FETCH_COMMENTS, articleSlug },
      { type: types.FETCH_COMMENTS_SUCCESS, comments },
    ];
    const store = mockStore({});
    return store.dispatch(commentActions.fetchCommentsRequest(articleSlug)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
