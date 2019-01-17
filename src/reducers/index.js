import { combineReducers } from 'redux';
import registrationReducer from './registrationReducer';
import articleReducer from './articleReducer';

// combines reducers for the application
const rootReducer = combineReducers({
  registrationReducer,
  articles: articleReducer,
});

export default rootReducer;
