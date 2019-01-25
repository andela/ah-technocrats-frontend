import searchReducer from '../searchReducer';
import * as searchActions from '../../actions/searchActions';

describe('Search Reducer tests', () => {
  it('Search submit action', () => {
    const initialState = {
      search: '',
    };
    const searchKeyWord = 'keyword';

    const action = searchActions.searchSubmit(searchKeyWord);
    const newState = searchReducer(initialState, action);
    expect(newState.keyWords).toBe(searchKeyWord);
  });
  it('Search success action ', () => {
    const initialState = {
      search: '',
    };
    const results = 'results';

    const action = searchActions.searchSuccess(results);
    const newState = searchReducer(initialState, action);
    expect(newState.results).toBe(results);
  });
  it('Search fail action ', () => {
    const initialState = {
      search: '',
    };
    const response = 'response';

    const action = searchActions.searchFail(response);
    const newState = searchReducer(initialState, action);
    expect(newState.response).toBe(response);
  });
  it('Search default action ', () => {
    const initialState = {
      search: '',
    };

    const action = {
      type: 'SOME_FAKE_ACTION',
      data: 'data',
    };
    const newState = searchReducer(initialState, action);
    expect(newState).toBe(initialState);
  });
});
