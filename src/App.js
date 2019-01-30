import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Route } from 'react-router';
import { Switch, BrowserRouter } from 'react-router-dom';
import SearchResultsPageComponent from './components/Search/SearchResultsPage';
import Error from './components/ErrorHandlers/MissingPageError';
import ViewSingleArticleComponent from './container/viewArticleContainer';
import ArticleContainerComponent from './components/Articles/ArticlesContainer';
import RegistrationPageComponent from './components/Authentication/Registration/RegistrationPage';
import LoginContainer from './components/Authentication/Login/LoginContainer';

import Profile from './containers/ProfileContainer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LoginContainer} />
            <Route path="/search" component={SearchResultsPageComponent} exact />
            <Route exact path="/articles/:slug" component={ViewSingleArticleComponent} />
            <Route path="/" component={ArticleContainerComponent} exact />
            <Route path="/articles" component={ArticleContainerComponent} exact />
            <Route path="/register" component={RegistrationPageComponent} exact />
            <Route path="/profile" exact component={Profile} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
