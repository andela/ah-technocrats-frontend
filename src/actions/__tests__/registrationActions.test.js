import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import * as registrationActions from '../registrationActions';
import * as types from '../actionTypes';

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

    it('should return USER_REGISTRATION_SUBMIT action', () => {
      const userData = {
        user: {
          username: 'blablabla',
          email: 'email@domain.com',
          password: 'password',
        },
      };
      const expectedAction = {
        type: types.USER_REGISTRATION_SUBMIT,
        registrationData: userData,
      };
      const action = registrationActions.userRegistrationSubmit(userData);
      expect(action).toEqual(expectedAction);
    });
    it('', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 201,
          response: { message: 'message'},
        });
      });

      const registrationData = {
        user: {
          username: 'blablabla',
          email: 'email@domain.com',
          password: 'password',
        },
      };

      const message = 'message';
      const expectedActions = [
        { type: types.USER_REGISTRATION_SUBMIT, registrationData },
        { type: types.USER_REGISTRATION_SUCCESS, message },
      ];
      const store = mockStore({ user: {}, expectedActions });
      return store.dispatch(registrationActions.registerUser(registrationData)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      },
      );
    });
  });
});
