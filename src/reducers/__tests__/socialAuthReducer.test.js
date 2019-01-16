import testReduces from '../socialAuthReducer';
import {
  FACEBOOK,
  GOOGLE,
  TWITTER,
  RECEIVE_DATA,
  FETCHING,
  FETCH_FAILED,
} from '../../actions/actionTypes';

it('facebook reducer returns the correct state', () => {
  const state = {

  };
  const dataPassed = {
    type: FACEBOOK,
    payload: {
      user: 'Jane',
      email: 'jane@doe.com',
    },
  };
  const recievedData = {
    email: 'jane@doe.com',
    user: 'Jane',
  };
  expect(testReduces(state, dataPassed)).toEqual(recievedData);
});


it('adds value in state with values', () => {
  const state = {
    company: 'John',
    address: 'john.test@mail.com',
  };
  const passedData = {
    type: GOOGLE,
    payload: {
      user: 'Jane',
      email: 'jane.test@mail.com',
    },
  };

  const received = {
    user: 'Jane',
    email: 'jane.test@mail.com',
    company: 'John',
    address: 'john.test@mail.com',

  };
  expect(testReduces(state, passedData)).toEqual(received);
});


it('twitter updates the state', () => {
  const state = {
    method: 'APP',
    language: 'java',
    user: 'Bobo',
    email: 'mytest@mail.com',
  };
  const passed = {
    type: TWITTER,
    payload: {
      method: 'TDD',
      language: 'C+',
      user: 'Dido',
      email: 'test@app.com',
    },
  };

  const received = {
    method: 'TDD',
    language: 'C+',
    email: 'test@app.com',
    user: 'Dido',
  };
  expect(testReduces(state, passed)).toEqual(received);
});

it('Test auth receiver reducer adds value in empty state', () => {
  const state = {};
  const dataIn = {
    type: RECEIVE_DATA,
    payload: {
      user: 'John',
      email: 'john@doe.com',
    },
  };

  const dataGot = {
    email: 'john@doe.com',
    user: 'John',
  };
  expect(testReduces(state, dataIn)).toEqual(dataGot);
});


it('updates the state if fetching', () => {
  const state = {};
  const checkFetch = {
    type: FETCHING,
    payload: {
      fetching: true,
      message: 'fetching',
    },
  };

  const dataOut = {
    fetching: true,
    message: 'fetching',
  };
  expect(testReduces(state, checkFetch)).toEqual(dataOut);
});


it('updates the state if failed', () => {
  const state = {
    fetching: true,
    message: 'fetching',
  };

  const myData = {
    type: FETCH_FAILED,
    payload: {
      fetching: false,
      message: 'failed',
    },
  };

  const obtainedData = {
    fetching: false,
    message: 'failed',
  };
  expect(testReduces(state, myData)).toEqual(obtainedData);
});

it('state should be empty by default', () => {
  const state = {};

  const dataPassed = {
    type: 'NO TYPE',
  };

  const receiverData = {};
  expect(testReduces(state, dataPassed)).toEqual(receiverData);
});
