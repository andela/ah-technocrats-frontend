import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

// initializes the store with a state
/* eslint-disable comma-dangle */
const configureStore = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, logger, reduxImmutableStateInvariant()),
  ),
);

export default configureStore;
