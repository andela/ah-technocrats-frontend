import React from 'react';
import './profile.scss';
import {
  Sidebar,
  Container,
  Header,
  Segment,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import SideBarMenu from '../Menu/Menu';
import DetailsContainer from './ProfileDetails';

const Profile = (props) => {
  const {
    refreshDetails,
  } = props;
  const handleOnModalClose = () => {
    const token = Cookies.get('access_token');
    const username = Cookies.get('username');
    refreshDetails(username, token);
  };
  return (
    <React.Fragment>
      <Sidebar.Pushable as={Segment} attached="bottom">
        <SideBarMenu />
        <Sidebar.Pusher id="pusher" className="pusher-height">
          <Container>
            <div className="ui borderless space">
              <Header as="h3" size="medium">
              Your Profile:
              </Header>
              <DetailsContainer {...props} handleOnModalClose={handleOnModalClose} />
            </div>
          </Container>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </React.Fragment>
  );
};

Profile.propTypes = {
  refreshDetails: PropTypes.func.isRequired,
};
export default Profile;
