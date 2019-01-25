import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
// import SuccessComponent from './components/Authentication/SocialLogin/SuccessComponent';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/storeConfiguration';
import SuccessComponent from './components/Authentication/Login/SuccessComponent';


const store = configureStore;

ReactDOM.render(
  <Provider store={store}>
    <SuccessComponent />
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
