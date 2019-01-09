import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './components/Authentication/LoginDummy';
import Error from './components/ErrorHandlers/MissingPageError';
import Home from './Home';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div>
          <div className="App">
            <Header />
          </div>
          <Switch>
            {/* exact looks for the exact path,
            it prevents the home page from being rendered in all the pages */}
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
