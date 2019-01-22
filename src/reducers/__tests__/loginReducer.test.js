import expect from 'expect';
import loginReducers from '../loginReducers';
import * as actions from '../../actions/loginActions';

describe('Login Reducer tests', () => {
  it('user submit action', () => {
    const initialState = {
      user: {
        email: '',
        password: '',
      },
    };
    const userData = {
      user: {
        email: 'salma@gmail.com',
        password: 'salma12345',
      },
    };
    // actions
    const action = actions.LoginAction(userData);
    const newState = loginReducers(initialState, action);
    // assert
    expect(newState.action).toBe(userData);
  });

  it('user successful login action', () => {
    const initial = {
      user: {
        email: 'salma@gmail.com',
        password: 'salma12345',
      },
    };
    const message = 'Successfully logged in';
    // action
    const action = actions.LoginSuccessful(message);
    const newState = loginReducers(initial, action);
    expect(newState.successfulMessage).toBe(message);
  });

  it('user failed login action', () => {
    const userData = {
      user: {
        email: '',
        password: 'salma12345',
      },
    };
    const message = 'This field may not be left blank';
    // action
    const action = actions.LoginRejected(message);
    const newState = loginReducers(userData, action);
    expect(newState.error).toBe(message);
  });
});
