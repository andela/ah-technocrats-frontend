import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import * as actions from '../viewArticleActions';
import {getErr} from "../viewArticleActions";

const middleWare = [thunk];
const mockStore = configureMockStore(middleWare);

describe('Registration Actions', () => {
  describe('register user', () => {
    beforeEach(() => {
      moxios.install();
    });
    afterEach(() => {
      moxios.uninstall();
    });

    it('should return GET_ARTICLE action', () => {
      const expectedAction = {
        type: actions.ARTICLE_GET_DONE,
        article: {},
      };
      const action = actions.articleGetDone({})
      expect(action).toEqual(expectedAction);
    });
    it('', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {},
        });
      });

      const processing = true;
      const processed = false;
      const slug = "test";
      const success = true;
      const article = {};
      const expectedActions = [
          { type: actions.ARTICLE_GET_PROCESSING, processing },
          { type: actions.ARTICLE_GET_DONE, article},
          {type:actions.ARTICLE_GET_SUCCESS, success},
          { type: actions.ARTICLE_GET_PROCESSING, processing:processed },
      ];
      const store = mockStore({ user: {}, expectedActions });
      return store.dispatch(actions.fetchArticle(slug)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      },
      );
    });

    it('Returns an error on fail', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 500,
          response: {reason: "Some"},
        });
      });
      const error = "Some";
      const processing = true;
      const processed = false;
      const slug = "test";
      const reason = getErr(error);
      const success = false;
      const article = {};
      const expectedActions = [
          { type: actions.ARTICLE_GET_PROCESSING, processing },
        { type: actions.ARTICLE_GET_ERROR, reason: reason},
        { type: actions.ARTICLE_GET_PROCESSING, processing:processed },
        {type:actions.ARTICLE_GET_SUCCESS, success},
      ];
      const store = mockStore({ user: {}, expectedActions });
      return store.dispatch(actions.fetchArticle(slug)).catch(() => {
        expect(store.getActions()).toEqual(expectedActions);
      },
      );
    });
  });
});
