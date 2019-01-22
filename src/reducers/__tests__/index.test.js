import { createStore } from 'redux';
import rootReducer from '../index';
import loginReducer from '../loginReducers';


describe('rootReducer', () => {
  it('should combine return reducers', () => {
    const store = createStore(rootReducer);

    // checks initial state of the loginReducer
    expect(store.getState().loginReducer).toEqual(loginReducer(undefined, {}));
  });
});
