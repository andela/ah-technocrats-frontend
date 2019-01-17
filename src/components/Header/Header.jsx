import React from 'react';
import './header.scss';
import {
  Menu, Image, Sticky,
} from 'semantic-ui-react';
import ahLogoWide from './ah-logo-wide.svg';


export const toggleSideBar = () => {
  const sideBar = document.getElementById('sidebar');
  const pusher = document.getElementById('pusher');
  sideBar.classList.toggle('visible');
  sideBar.classList.toggle('uncover');
  pusher.classList.toggle('dimmed');
};


const Header = () => (
  <Sticky offset={0}>
    <Menu borderless attached="top">
      <Menu.Item name="Menu" icon="sidebar" id="menuBtn" onClick={toggleSideBar} link position="left" />
      <div className="ui centered">
        <Image src={ahLogoWide} className="logo" />
      </div>
    </Menu>
  </Sticky>
);

export default Header;
