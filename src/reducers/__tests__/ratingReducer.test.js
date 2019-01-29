import expect from 'expect';

import ratingReducer from '../ratingReducer';
import * as types from '../../actions/actionTypes';
import * as actions from '../../actions/ratingActions';

const initialState = {
  output: 0,
  failing: false,
};
const payload = [{
  title: 'Hello World',
  description: 'Hello world',
  body: 'Kenya',
  author: 'Author',
}];
const ratingData = {
  rating: 2,
};

describe('article rating reducer', () => {
  it('should return initial state', () => {
    expect(
      ratingReducer(undefined, {}),
    ).toEqual(initialState);
  });

  // create articles tests
  // load
  it('should handle rating', () => {
    const expected = {
      failing: false,
      output: { rating: 2 },
    };
    const action = actions.rate(ratingData);
    expect(ratingReducer(initialState, action)).toEqual(expected);
  });
  //   // success
  it('should handle successful rating', () => {
    const expected = {
      failing: false,
      output: { rating: 2 },
    };
    const action = actions.ratingSuccess(ratingData);
    expect(ratingReducer(initialState, action)).toEqual(expected);
  });
  // fail
  it('Should handle unsuccessful rating', () => {
    const message = 'error';
    const expected = {
      output: message,
      failing: true,
    };
    const action = actions.ratingFail(message);
    expect(ratingReducer(initialState, action)).toEqual(expected);
  });
});
