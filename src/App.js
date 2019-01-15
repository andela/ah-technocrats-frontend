import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import RegistrationPage from './components/Authentication/Registration/RegistrationPage';
import Error from './components/ErrorHandlers/MissingPageError';
import Home from './Home';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="App" />
          <Switch>
            {/* exact looks for the exact path,
            it prevents the home page from being rendered in all the pages */}
            <Route path="/" component={Home} exact />
            <Route path="/register" component={RegistrationPage} exact />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
