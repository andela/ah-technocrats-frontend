import expect from 'expect';

import articleReducer from '../articleReducer';
import * as types from '../../actions/actionTypes';

const initialState = {
  items: [],
  item: {},
};


describe('article reducer', () => {
  it('should return initial state', () => {
    expect(
      articleReducer(undefined, {}),
    ).toEqual(initialState);
  });

  it('should update state after fetching', () => {
    const payload = [{
      title: 'Hello World',
      description: 'Hello world',
      body: 'Kenya',
      author: 'Author',
    }];
    const action = {
      type: types.FETCH_ARTICLES_SUCCESS,
      payload,
    };
    const expectedState = {
      item: {},
      items: payload,
    };
    expect(articleReducer(undefined, action)).toEqual(expectedState);
  });
});
