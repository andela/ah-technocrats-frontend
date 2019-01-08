import React, { Component } from 'react';
import ahLogo from './ah-logo-wide.svg';
import './header.scss';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={ahLogo} alt="" />
      </div>
    );
  }
}

export default Header;
