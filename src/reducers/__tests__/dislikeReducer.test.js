import expect from 'expect';
import dislikeReducer from '../dislikeReducer';
import * as actions from '../../actions/dislikeActions';

describe('Like Reducer tests', () => {
  it('user like action', () => {
    const slug = '';
    const userSlug = 'helloworld';
    // actions
    const action = actions.DislikeAction(userSlug);
    const newState = dislikeReducer(slug, action);
    // assert
    expect(newState.action).toBe(userSlug);
  });

  it('user successful dislike action', () => {
    const slug = 'helloworld';
    const message = 'You have disliked this article';
    // action
    const action = actions.DislikeSuccessful(message);
    const newState = dislikeReducer(slug, action);
    expect(newState.dislike).toBe(message);
  });

  it('user failed dislike action', () => {
    const slug = 'helloworld';
    const message = 'You have undisliked this article';
    // action
    const action = actions.DislikeFailed(message);
    const newState = dislikeReducer(slug, action);
    expect(newState.undislike).toBe(message);
  });
});
