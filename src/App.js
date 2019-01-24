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
import SearchResultsPageContainer from './components/Search/SearchResultsPage';
import UserSpecificArticlesContainer from './components/Articles/UserSpecificArticlesContainer';
import IsAuthenticated from './common/IsAuthenticated';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LoginContainer} />
            <Route exact path="/articles/:slug" component={ViewSingleArticleComponent} />
            <Route path="/" component={ArticleContainerComponent} exact />
            <Route path="/articles" component={ArticleContainerComponent} exact />
            <Route path="/register" component={RegistrationPageComponent} exact />
            <IsAuthenticated path="/profile" exact component={Profile} />
            <Route path="/search" component={SearchResultsPageContainer} exact />
            <IsAuthenticated exact path="/myarticles" component={UserSpecificArticlesContainer} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
