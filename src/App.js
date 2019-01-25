import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Route } from 'react-router';
import { Switch, BrowserRouter } from 'react-router-dom';

import RegistrationPage from './components/Authentication/Registration/RegistrationPage';
import SearchResultsPage from './components/Search/SearchResultsPage';
import Error from './components/ErrorHandlers/MissingPageError';
import ArticleContainer from './components/Articles/ArticlesContainer';
import LoginContainer from './components/Authentication/Login/LoginContainer';
import ViewSingleArticleComponent from "./container/viewArticleContainer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ArticleContainer} exact />
            <Route path="/articles" component={ArticleContainer} exact />
            <Route path="/register" component={RegistrationPage} exact />
            <Route exact path="/login" component={LoginContainer} />
            <Route path="/search" component={SearchResultsPage} exact />
            <Route exact path='/articles/:slug' component={ViewSingleArticleComponent}/>
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
