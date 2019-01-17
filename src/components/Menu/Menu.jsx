import React from 'react';
import {
  Menu, Icon,
  Sidebar,
} from 'semantic-ui-react';


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
    <Menu.Item as="a" href="profile.html">
      <Icon name="user" />
        Profile
    </Menu.Item>
    <Menu.Item as="a" href="/articles">
      <Icon name="clone" />
      Articles
    </Menu.Item>
  </Sidebar>

);


export default SideBarMenu;
