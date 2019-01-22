import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import * as searchActions from '../searchActions';
import * as types from '../actionTypes';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Search Actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  beforeEach(() => {
    moxios.install();
  });

  it('should call the SEARCH_SUCCESS action on success', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        // TODO : fix this response message
        response: { results: 'keywords present' },
      });
    });

    const searchKeyWords = 'some search keywords';

    const results = { results: 'keywords present' };

    const expectedActions = [
      { type: types.SEARCH_SUBMIT, searchKeyWords },
      { type: types.SEARCH_SUCCESS, results },
    ];
    const store = mockStore({});
    return store.dispatch(searchActions.searchAction(searchKeyWords)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should call the SEARCH_FAIL action on failure', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        // TODO : fix this response message
        response: { error: 'no results found' },
      });
    });

    const searchKeyWords = 'some search keywords';

    const response = { error: 'no results found' };

    const expectedActions = [
      { type: types.SEARCH_SUBMIT, searchKeyWords },
      { type: types.SEARCH_FAIL, response },
    ];
    const store = mockStore({});
    return store.dispatch(searchActions.searchAction(searchKeyWords)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
