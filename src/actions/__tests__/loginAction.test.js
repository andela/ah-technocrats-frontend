/* eslint-disable comma-dangle */
import expect from 'expect';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as loginActions from '../loginActions';
import * as types from '../actionTypes';

const mock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loginActions', () => {
  describe('LoginSuccessful', () => {
    it('should create a request action', () => {
      const userData = {
        request: {
          email: '',
          password: '',
        },
      };
      const expectedAction = {
        type: types.LOGIN_ACTION,
        request: userData,
      };
      expect(loginActions.LoginAction(userData)).toEqual(expectedAction);
    });

    it('should create a login failed action', () => {
      const successfulMessage = 'Successfully logged in';
      const expectedAction = {
        type: types.LOGIN_SUCCESSFUL,
        successfulMessage,
      };
      expect(loginActions.LoginSuccessful(successfulMessage)).toEqual(expectedAction);
    });

    it('should create a login failed action', () => {
      const error = 'This field may not be left blank';
      const expectedAction = {
        type: types.LOGIN_REJECTED,
        error,
      };
      expect(loginActions.LoginRejected(error)).toEqual(expectedAction);
    });
  });
});

describe('async login actions', () => {
  afterEach(
    () => mock.restore()
  );

  it('should create an async action make login request', () => {
    const userData = {
      email: 'salma@gmail.com',
      password: 'salma133445',
    };
    mock.onPost('https://ah-technocrats.herokuapp.com/api/users/login/').replyOnce(200,
      {
        user: {
          token: 'token',
        },
      });

    const expectedActions = [
      {
        type: types.LOGIN_ACTION,
        request: userData,
      },
      {
        type: types.LOGIN_SUCCESSFUL,
        successfulMessage: {
          user: {
            token: 'token',
          },
        }
      }
    ];
    const store = mockStore({ userData: {} });
    store.dispatch(loginActions.loginUser(userData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });


  it('should create an async action make an unsuccessful login request', () => {
    const userData = {
      email: '',
      password: 'salma133445',
    };
    mock.onPost('https://ah-technocrats.herokuapp.com/api/users/login/').replyOnce(400);
    const error = 'hey';
    const expectedActions = [
      {
        type: types.LOGIN_ACTION,
        request: userData,
      },
      {
        type: types.LOGIN_REJECTED,
        error
      }
    ];
    const store = mockStore({ userData: {} });

    store.dispatch(loginActions.loginUser(userData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
