import expect from 'expect';

import articleReducer from '../articleReducer';
import * as types from '../../actions/actionTypes';
import * as actions from '../../actions/articleActions';

const initialState = {
  count: 0,
  items: [],
  item: {},
  createSuccess: false,
};
const payload = [{
  title: 'Hello World',
  description: 'Hello world',
  body: 'Kenya',
  author: 'Author',
}];
const articleData = {
  title: 'Hello World',
  description: 'Hello world',
  body: 'Kenya',
  author: 'Author',
};

describe('article reducer', () => {
  it('should return initial state', () => {
    expect(
      articleReducer(undefined, {}),
    ).toEqual(initialState);
  });
  // initial
  it('should handle FETCH', () => {
    const expected = {
      items: [],
      item: {},
      createSuccess: false,
      count: 0,
    };
    const action = actions.fetchAllArticles();
    expect(articleReducer(initialState, action)).toEqual(expected);
  });
  // success
  it('should update state after fetching', () => {
    const action = {
      type: types.FETCH_ARTICLES_SUCCESS,
      payload,
    };
    const expectedState = {
      count: 0,
      item: {},
      items: payload,
      createSuccess: false,
    };
    expect(articleReducer(undefined, action)).toEqual(expectedState);
  });
  // fail
  it('Should handle FETCH_ARTICLE_FAIL', () => {
    const message = 'error';
    const expected = {
      items: [],
      item: {},
      error: message,
      createSuccess: false,
      count: 0,
    };
    const action = actions.fetchArticleFails(message);
    expect(articleReducer(initialState, action)).toEqual(expected);
  });

  // create articles tests
  // load
  it('should handle CREATE', () => {
    const expected = {
      items: [],
      item: articleData,
      createSuccess: false,
      loading: true,
      count: 0,
    };
    const action = actions.create(articleData);
    expect(articleReducer(initialState, action)).toEqual(expected);
  });
  // success
  it('should handle CREATE_ARTICLES_SUCCESS', () => {
    const expected = {
      items: [],
      item: articleData,
      createSuccess: true,
      count: 0,
    };
    const action = actions.createSuccess(articleData);
    expect(articleReducer(initialState, action)).toEqual(expected);
  });
  // fail
  it('Should handle CREATE_ARTICLE_FAIL', () => {
    const message = 'error';
    const expected = {
      items: [],
      item: {},
      error: message,
      loading: false,
      createSuccess: false,
      count: 0,
    };
    const action = actions.createFail(message);
    expect(articleReducer(initialState, action)).toEqual(expected);
  });
  it('Should handle CREATE_ARTICLE_RESET', () => {
    const expected = {
      items: [],
      item: {},
      createSuccess: false,
      count: 0,
    };
    const action = actions.createReset();
    expect(articleReducer(initialState, action)).toEqual(expected);
  });
});
