import registrationReducer from '../registrationReducer';
import * as actions from '../../actions/registrationActions';

describe('Registration Reducer __tests__', () => {
  it('user submit action', () => {
    // arrange
    const initialState = [{
      username: '',
      email: '',
      password: '',
      repeat_password: '',
      error: {},
    }];
    const userData = {
      user: {
        username: 'blablabla',
        email: 'email@domain.com',
        password: 'password',
      },
    };
    // act
    const action = actions.userRegistrationSubmit(userData);
    const newState = registrationReducer(initialState, action);
    // assert
    expect(newState.action).toBe(userData);
  });
  it('user success action', () => {
    // arrange
    const initialState = [{
      username: '',
      email: '',
      password: '',
      repeat_password: '',
      error: {},
    }];
    const message = {
      message: 'some message',
    };
    // act
    const action = actions.userRegistrationSuccess(message);
    const newState = registrationReducer(initialState, action);
    // assert
    expect(newState.message).toBe(message);
  });
  it('user fail action', () => {
    // arrange
    const initialState = [{
      username: '',
      email: '',
      password: '',
      repeat_password: '',
      error: {},
    }];
    const error = {
      error: 'some message',
    };
    // act
    const action = actions.userRegistrationFail(error);
    const newState = registrationReducer(initialState, action);
    // assert
    expect(newState.error).toBe(error);
  });

  it('should return default state', () => {
    const initialState = [{
      username: '',
      email: '',
      password: '',
      repeat_password: '',
      error: {},
    }];
    const fakeAction = {
      type: 'DOES_NOT_MATTER',
      data: 'does not matter',
    };
    const defaultState = registrationReducer(initialState, fakeAction);
    expect(defaultState).toBe(initialState);
  });
});
