import { combineReducers } from 'redux';
import registrationReducer from './registrationReducer';
import articleReducer from './articleReducer';
import loginReducer from './loginReducers';
import searchReducer from './searchReducer';

import socialAuth from './socialAuthReducer';

const rootReducer = combineReducers({
  registrationReducer,
  articles: articleReducer,
  loginReducer,
  socialAuth,
  searchReducer,
});

export default rootReducer;
