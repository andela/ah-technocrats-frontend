import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <div>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/login">Login</NavLink>
  </div>
);

export default Navigation;
