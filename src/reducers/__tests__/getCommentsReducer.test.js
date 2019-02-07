import getCommentsReducer from '../getCommentsReducer';
import * as getCommentActions from '../../actions/getCommentsActions';
import commentMockData from '../../actions/__tests__/commentMockData';

describe('Get Comments Reducer Tests', () => {
  it('fetchCommentsSuccess action', () => {
    const initialState = {
      comments: {},
    };
    const comments = commentMockData;

    const action = getCommentActions.fetchCommentsSuccess(commentMockData);
    const newState = getCommentsReducer(initialState, action);
    expect(newState.comments).toBe(comments);
  });

  it('fetchCommentsFail action', () => {
    const initialState = {
      comments: {},
    };
    const error = { error: 'error' };

    const action = getCommentActions.fetchCommentsFail(error);
    const newState = getCommentsReducer(initialState, action);
    expect(newState.error).toBe(error);
  });
});
