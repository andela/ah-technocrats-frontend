import { combineReducers } from 'redux';
import registrationReducer from './registrationReducer';
import articleReducer from './articleReducer';
import loginReducer from './loginReducers';

import socialAuth from './socialAuthReducer';

const rootReducer = combineReducers({
  registrationReducer,
  articles: articleReducer,
  loginReducer,
  socialAuth,

});

export default rootReducer;
