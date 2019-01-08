import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/storeConfiguration';

const store = configureStore;

ReactDOM.render(
  <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
);

serviceWorker.unregister();
