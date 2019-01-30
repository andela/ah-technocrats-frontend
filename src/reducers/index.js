import { combineReducers } from 'redux';
import registrationReducer from './registrationReducer';
import articleReducer from './articleReducer';
import loginReducer from './loginReducers';
import searchReducer from './searchReducer';
import getFetchArticle from './viewArticleReducer';
import socialAuth from './socialAuthReducer';
import profileDetails from './profileReducer';

const rootReducer = combineReducers({
  registrationReducer,
  articles: articleReducer,
  loginReducer,
  socialAuth,
  searchReducer,
  getFetchArticle,
  profileDetails,
});

export default rootReducer;
