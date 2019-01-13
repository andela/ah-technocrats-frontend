import React from 'react';
import {
  Menu, Icon,
  Sidebar,
} from 'semantic-ui-react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuItem = (props) => {
  const { to, icon, label } = props;
  return (
    <Menu.Item as={Link} to={to}>
      <Icon name={icon} />
      {label}
    </Menu.Item>
  );
};

const SideBarMenu = () => (
  <Sidebar
    as={Menu}
    icon="labeled"
    inverted
    width="thin"
    vertical
    color="green"
    id="sidebar"
  >
    <MenuItem to="profile" label="Profile" icon="user" />
    <MenuItem to="articles" label="Articles" icon="clone" />
  </Sidebar>

);

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};


export default SideBarMenu;
