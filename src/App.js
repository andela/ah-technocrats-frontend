import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Error from './components/ErrorHandlers/MissingPageError';
import ArticleContainer from './components/Articles/ArticlesContainer';
import RegistrationPage from './components/Authentication/Registration/RegistrationPage';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ArticleContainer} exact />
            <Route path="/articles" component={ArticleContainer} exact />
            <Route path="/register" component={RegistrationPage} exact />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
