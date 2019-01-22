/* eslint-disable comma-dangle */
import expect from 'expect';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as updateArticle from '../updateArticles';
import * as types from '../actionTypes';

const mock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('updateArticle', () => {
  describe('LoginSuccessful', () => {
    it('should create a request action', () => {
      const userData = {
        request: {
          title: '',
          description: '',
          body: ''
        },
      };
      const expectedAction = {
        type: types.UPDATE_ACTION,
        request: userData,
      };
      expect(updateArticle.updateAction(userData)).toEqual(expectedAction);
    });

    it('should create a login failed action', () => {
      const successfulMessage = 'Successfully updated';
      const expectedAction = {
        type: types.UPDATE_SUCCESSFUL,
        successfulMessage,
      };
      expect(updateArticle.updateSuccessful(successfulMessage)).toEqual(expectedAction);
    });

    it('should create a login failed action', () => {
      const error = 'This field may not be left blank';
      const expectedAction = {
        type: types.UPDATE_REJECTED,
        error,
      };
      expect(updateArticle.updateRejected(error)).toEqual(expectedAction);
    });
  });
});

describe('async login actions', () => {
  afterEach(
    () => mock.restore()
  );

  it('should create an async action make login request', () => {
    const userData = {
      title: 'salma@gmail.com',
      description: 'salma133445',
    };
    mock.onPut('https://ah-technocrats.herokuapp.com//api/articles/<slug>/').replyOnce(200,
      {
        article: {
          token: 'token',
        },
      });

    const expectedActions = [
      {
        type: types.UPDATE_ACTION,
        request: userData,
      },
      {
        type: types.UPDATE_SUCCESSFUL,
        success: {
          article: {
            token: 'token',
          },
        }
      }
    ];
    const store = mockStore({ userData: {} });
    store.dispatch(updateArticle.updateArticle(userData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });


  it('should create an async action make an unsuccessful login request', () => {
    const userData = {
      title: '',
      description: 'salma133445',
    };
    mock.onPost('https://ah-technocrats.herokuapp.com//api/articles/<slug>/').replyOnce(400);
    const error = 'hey';
    const expectedActions = [
      {
        type: types.UPDATE_ACTION,
        request: userData,
      },
      {
        type: types.UPDATE_REJECTED,
        error
      }
    ];
    const store = mockStore({ userData: {} });

    store.dispatch(updateArticle.updateArticle(userData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
