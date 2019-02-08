import expect from 'expect';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as likeActions from '../likeActions';
import * as types from '../actionTypes';

const mock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('likeActions', () => {
  describe('Like Successful', () => {
    it('should create a request action', () => {
      const userData = {
        request: {
          slug: '',
        },
      };
      const expectedAction = {
        type: types.LIKE_ACTION,
        request: userData,
      };
      expect(likeActions.Action(userData)).toEqual(expectedAction);
    });

    it('should create a like successful action', () => {
      const successfulLike = 'You have liked this article';
      const expectedAction = {
        type: types.LIKE_SUCCESSFUL,
        successfulLike,
      };
      expect(likeActions.LikeAction(successfulLike)).toEqual(expectedAction);
    });

    it('should create a like failed action', () => {
      const error = 'Please Log in to Continue.';
      const expectedAction = {
        type: types.LIKE_UNSUCCESSFUL,
        error,
      };
      expect(likeActions.LikeActionRejected(error)).toEqual(expectedAction);
    });
  });
});

describe('async like actions', () => {
  afterEach(
    () => mock.restore(),
  );

  it('should create an async action make like request', () => {
    const slug = 'helloworld';
    mock.onPut(`https://ah-technocrats.herokuapp.com/api/articles/${slug}/like/`).replyOnce(200,
      {
        user: {
          token: 'token',
        },
      });

    const expectedActions = [
      {
        type: types.ACTION,
        request: slug,
      },
      {
        type: types.LIKE_SUCCESSFUL,
        successfulMessage: {
          user: {
            token: 'token',
          },
        }
      }
    ];
    const store = mockStore({ slug: {} });
    store.dispatch(likeActions.likeAction(slug)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
