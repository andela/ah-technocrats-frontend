import { combineReducers } from 'redux';
import registrationReducer from './registrationReducer';
import articleReducer from './articleReducer';
import ownArticlesReducer from './userSpecificReducer';
import loginReducer from './loginReducers';
import searchReducer from './searchReducer';
import getFetchArticle from './viewArticleReducer';
import updateArticlesReducer from './updateArticlesReducer';

import socialAuth from './socialAuthReducer';
import profileDetails from './profileReducer';
import likeReducer from './likeReducer';
import dislikeReducer from './dislikeReducer';

const rootReducer = combineReducers({
  registrationReducer,
  articles: articleReducer,
  ownArticles: ownArticlesReducer,
  loginReducer,
  socialAuth,
  searchReducer,
  getFetchArticle,
  profileDetails,
  updateArticlesReducer,

  likeReducer,
  dislikeReducer,
});

export default rootReducer;
