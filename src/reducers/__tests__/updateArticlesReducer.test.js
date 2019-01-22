import expect from 'expect';
import * as actions from '../../actions/updateArticles';
import updateArticlesReducer from '../updateArticlesReducer';

describe('Update Reducer tests', () => {
  it('article submit action', () => {
    const initialState = {
      article: {
        title: '',
        description: '',
        body: '',
      },
    };
    const articleData = {
      article: {
        title: 'tests',
        description: 'java',
        body: 'hello people',
      },
    };
    // actions
    const action = actions.updateAction(articleData);
    const newState = updateArticlesReducer(initialState, action);
    // assert
    expect(newState.action).toBe(articleData);
  });

  it('article successful update action', () => {
    const initial = {
      article: {
        title: 'tests',
        description: 'java',
        body: 'hello people',
      },
    };
    const message = 'Successfully updated';
    // action
    const action = actions.updateSuccessful(message);
    const newState = updateArticlesReducer(initial, action);
    expect(newState.successfulMessage).toBe(message);
  });

  it('article failed update action', () => {
    const articleData = {
      article: {
        title: 'tests',
        description: 'java',
        body: 'hello people',
      },
    };
    const message = 'This field may not be left blank';
    // action
    const action = actions.updateRejected(message);
    const newState = updateArticlesReducer(articleData, action);
    expect(newState.error).toBe(message);
  });
});
