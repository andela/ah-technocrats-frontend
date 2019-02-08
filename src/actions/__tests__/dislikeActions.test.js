import expect from 'expect';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as dislikeActions from '../dislikeActions';
import * as types from '../actionTypes';

const mock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('dislikeActions', () => {
  describe('Dislike Successful', () => {
    it('should create a request action', () => {
      const userData = {
        request: {
          slug: '',
        },
      };
      const expectedAction = {
        type: types.DISLIKE_ACTION,
        request: userData,
      };
      expect(dislikeActions.DislikeAction(userData)).toEqual(expectedAction);
    });

    it('should create a dislike successful action', () => {
      const success = 'You have disliked this article';
      const expectedAction = {
        type: types.DISLIKE_SUCCESSFUL,
        success,
      };
      expect(dislikeActions.DislikeSuccessful(success)).toEqual(expectedAction);
    });

    it('should create a undislike failed action', () => {
      const error = 'Please Log in to Continue.';
      const expectedAction = {
        type: types.DISLIKE_FAILED,
        error,
      };
      expect(dislikeActions.DislikeFailed(error)).toEqual(expectedAction);
    });
  });
});

describe('async login actions', () => {
  afterEach(
    () => mock.restore(),
  );

  it('should create an async action make dislike request', () => {
    const slug = 'helloworld';
    mock.onPut(`https://ah-technocrats.herokuapp.com/api/articles/${slug}/dislike/`).replyOnce(200,
      {
        user: {
          token: 'token',
        },
      });

    const expectedActions = [
      {
        type: types.DISLIKE_ACTION,
        request: slug,
      },
      {
        type: types.DISLIKE_SUCCESSFUL,
        successfulMessage: {
          user: {
            token: 'token',
          },
        }
      }
    ];
    const store = mockStore({ slug: {} });
    store.dispatch(dislikeActions.dislikeArticle(slug)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
