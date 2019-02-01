import expect from 'expect';
import ownArticlesReducer from '../viewArticleReducer';
import * as deleteArticleAction from '../../actions/deleteArticleAction';


describe('User Specific Reducer tests', () => {
  it('should send a request  action', () => {
    const initialState = {
      user: {
        title: 'authorshaven',
        description: 'the place to be',
      },
    };
    const userData = {
      user: {
        title: 'authorshaven',
        description: 'the place to be',
      },
    };
    // actions
    const action = deleteArticleAction.fetchOwnArticles(userData);
    const newState = ownArticlesReducer(initialState, action);
    // assert
    expect(newState).toEqual(userData);
  });
});
