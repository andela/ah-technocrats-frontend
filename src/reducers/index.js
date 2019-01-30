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
import profilesReducer from './profilesReducer';
import singleProfileReducer from './singleProfileReducer';
import ratingReducer from './ratingReducer';
import getCommentsReducer from './getCommentsReducer';
import commentReducer from './createCommentReducer';
import replyReducer from './createReplyReducer';

const rootReducer = combineReducers({
  registrationReducer,
  articles: articleReducer,
  ownArticles: ownArticlesReducer,
  loginReducer,
  socialAuth,
  searchReducer,
  profilesReducer,
  getFetchArticle,
  profileDetails,
  updateArticlesReducer,
  likeReducer,
  dislikeReducer,
  singleProfileReducer,
  ratingReducer,
  commentReducer,
  replyReducer,
  getCommentsReducer,
});

export default rootReducer;
