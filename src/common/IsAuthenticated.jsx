import {
  Route,
  Redirect,
} from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
//   import { ReactComponent } from '*.svg';
import Cookies from 'js-cookie';

const IsAuthenticated = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={properties => (
      Cookies.get('username') ? <Component {...properties} />
        : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location },
          }}
          />
        )
    )}
  />
);


IsAuthenticated.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.shape().isRequired,
};

export default IsAuthenticated;
