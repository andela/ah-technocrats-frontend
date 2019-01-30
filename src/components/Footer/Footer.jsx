import React from 'react';
import './footer.scss';
import {
  GridColumn, Grid, Divider, Icon,
} from 'semantic-ui-react';

const Footer = () => (
  <div
    className="footer"
  >
    <GridColumn
      as={Grid}
      centered
      width="two"
    />
    <Divider
      as="h6"
      className="header full container"
      horizontal
    >
      <Icon name="clone" color="green" />
      Authors Haven &copy; 2018 All rights reserved.
    </Divider>
  </div>
);

export default Footer;
