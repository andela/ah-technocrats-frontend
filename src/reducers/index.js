import { combineReducers } from 'redux';
import registrationReducer from './registrationReducer';

// combines reducers for the application
const rootReducer = combineReducers({
  registrationReducer,
});

export default rootReducer;
