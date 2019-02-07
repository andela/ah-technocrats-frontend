import expect from 'expect';
import likeReducer from '../likeReducer';
import * as actions from '../../actions/likeActions';

describe('Like Reducer tests', () => {
  it('user like action', () => {
    const slug = '';
    const userSlug = 'helloworld';
    const action = actions.Action(userSlug);
    const newState = likeReducer(slug, action);
    expect(newState.action).toBe(userSlug);
  });

  it('user successful like action', () => {
    const slug = 'helloworld';
    const message = 'You have liked this article';
    const action = actions.LikeAction(message);
    const newState = likeReducer(slug, action);
    expect(newState.like).toBe(message);
  });

  it('user failed like action', () => {
    const slug = 'helloworld';
    const message = 'You have unliked this article';
    const action = actions.LikeActionRejected(message);
    const newState = likeReducer(slug, action);
    expect(newState.error).toBe(message);
  });
});
