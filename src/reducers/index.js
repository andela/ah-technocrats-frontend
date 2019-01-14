import { combineReducers } from 'redux';
import registrationReducer from './registrationReducer';
import articleReducer from './articleReducer';
import loginReducer from './loginReducers';

// combines reducers for the application
const rootReducer = combineReducers({
  registrationReducer,
  articles: articleReducer,
  loginReducer,
});

export default rootReducer;
