import { combineReducers } from 'redux';
import registrationReducer from './registrationReducer';
import articleReducer from './articleReducer';
import ownArticlesReducer from './userSpecificReducer';
import loginReducer from './loginReducers';
import searchReducer from './searchReducer';
import getFetchArticle from './viewArticleReducer';
import socialAuth from './socialAuthReducer';
import profileDetails from './profileReducer';

const rootReducer = combineReducers({
  registrationReducer,
  articles: articleReducer,
  ownArticles: ownArticlesReducer,
  loginReducer,
  socialAuth,
  searchReducer,
  getFetchArticle,
  profileDetails,
});

export default rootReducer;
