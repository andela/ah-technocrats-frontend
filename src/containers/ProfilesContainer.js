import React from 'react';
import {
  Segment, Sidebar, Card, Loader,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import Header from '../components/Header/Header';
import ProfileCard from '../components/Profiles/ProfileCard';
import SideBarMenu from '../components/Menu/Menu';
import { fetchUserProfiles } from '../actions/profilesActions';
import Footer from '../components/Footer/Footer';

class ProfilesContainer extends React.Component {
  componentDidMount() {
    const { fetchProfiles } = this.props;
    const token = Cookies.get('access_token');
    fetchProfiles(token);
  }

  render() {
    const { history, profiles, fetching } = this.props;
    const currentUser = Cookies.get('username');
    const ProfileCards = profiles.filter(
      profile => (profile.username !== currentUser),
    ).map(
      profile => (
        <ProfileCard {...profile} />
      ),
    );
    return (
      <React.Fragment>
        <Header history={history} />
        <Sidebar.Pushable as={Segment} attached="bottom" className="body-cont">
          <SideBarMenu />
          <Sidebar.Pusher id="pusher" className="pusher-height">
            <Container fetching={fetching} cards={ProfileCards} />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        <Footer />
      </React.Fragment>
    );
  }
}
const Container = ({ fetching, cards }) => (
  <div className="ui container">
    <div className="ui space borderless">
      <h3 className="ui header medium">All Authors Profiles:</h3>
      <div className="ui items">
        <div className="item">
          {fetching ? <Loader active /> : (
            <Card.Group itemsPerRow={4}>
              {cards}
            </Card.Group>
          )}
        </div>
      </div>
    </div>
  </div>
);

Container.propTypes = {
  fetching: PropTypes.bool.isRequired,
  cards: PropTypes.instanceOf(React.Component).isRequired,
};

ProfilesContainer.propTypes = {
  history: PropTypes.shape().isRequired,
  fetchProfiles: PropTypes.func.isRequired,
  profiles: PropTypes.instanceOf(Array),
  fetching: PropTypes.bool.isRequired,
};

ProfilesContainer.defaultProps = {
  profiles: [],
};

const mapStateToProps = state => (
  {
    profiles: state.profilesReducer.profiles,
    fetching: state.profilesReducer.fetching,
    fetchFailed: state.profilesReducer.fetchFailed,
    fetchSuccess: state.profilesReducer.fetchSuccess,
  }
);

const mapDispatchToProps = dispatch => (
  {
    fetchProfiles: token => (
      dispatch(fetchUserProfiles(token))
    ),
  }
);

export default connect(
  mapStateToProps, mapDispatchToProps,
)(ProfilesContainer);
