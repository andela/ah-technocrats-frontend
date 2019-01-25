import expect from 'expect';
import viewArticleReducer from '../viewArticleReducer';
import * as actions from '../../actions/viewArticleActions';

describe('View article Reducer tests', () => {
  it('Get article processing', () => {
    const initialState = {
        processing: true
    };
    // actions
    const processing = false;
    const action = actions.articleGetProcessing(processing);
    const newState = viewArticleReducer(initialState, action);
    expect(newState.processing).toBe(false);
  });

  it('Get article success', () => {
    const initial = {
      success: false
    };
    const message = true;
    // action
    const action = actions.articleGetSuccess(message);
    const newState = viewArticleReducer(initial, action);
    expect(newState.success).toBe(true);
  });

  it('Get article failed', () => {
    const initialState = {
      reason: ''
    };
    const message = 'Something actually went wrong';
    const action = actions.articleGetError(message);
    const newState = viewArticleReducer(initialState, action);
    expect(newState.reason).toBe(message);
  });

  it('Get article done', () => {
    const initialState = {
      success: false
    };
    const success = true;
    const action = actions.articleGetDone(success);
    const newState = viewArticleReducer(initialState, action);
    expect(newState.success).toBe(success);
  });
});
