import expect from 'expect';
import dislikeReducer from '../dislikeReducer';
import * as actions from '../../actions/dislikeActions';
import * as likeactions from '../../actions/likeActions';


describe('Like Reducer tests', () => {
  it('user like action', () => {
    const slug = '';
    const userSlug = 'helloworld';
    const action = actions.DislikeAction(userSlug);
    const newState = dislikeReducer(slug, action);
    expect(newState.action).toBe(userSlug);
  });

  it('user successful dislike action', () => {
    const slug = 'helloworld';
    const message = 'You have disliked this article';
    const action = actions.DislikeSuccessful(message);
    const newState = dislikeReducer(slug, action);
    expect(newState.dislike).toBe(message);
  });

  it('user failed dislike action', () => {
    const slug = 'Please Log in to Continue.';
    const message = 'Please Log in to Continue.';
    const action = likeactions.LikeActionRejected(message);
    const newState = dislikeReducer(slug, action);
    expect(newState).toBe(message);
  });
});
