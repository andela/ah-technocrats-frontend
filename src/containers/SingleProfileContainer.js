import React from 'react';
import { Sidebar, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import SideBarMenu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';
import {
  fetchSingleProfile, followProfile, getUserFollowers,
  unFollowProfile, fetchProfileFollowersFollowing,
} from '../actions/profilesActions';
import SingleProfileComponent from '../components/Profiles/SingleProfileComponent';

class SingleProfileContainer extends React.Component {
  componentDidMount() {
    const {
      fetchProfile, match, fetchFollowers, getFollowingFollowers,
    } = this.props;
    const { params: { profile } } = match;
    const token = Cookies.get('access_token');
    const currentUser = Cookies.get('username');
    fetchProfile(profile, token);
    fetchFollowers(currentUser, token);
    getFollowingFollowers(profile, token);
    document.title = `${profile} Profile`;
  }

  updateFollowers = () => {
    const { fetchFollowers } = this.props;
    fetchFollowers(Cookies.get('username'), Cookies.get('access_token'));
  }

  render() {
    const { history } = this.props;
    return (
      <React.Fragment>
        <Header history={history} />
        <Sidebar.Pushable as={Segment} attached="bottom" className="body-cont">
          <SideBarMenu />
          <Sidebar.Pusher id="pusher" className="pusher-height">
            <Container {...this.props} />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        <Footer />
      </React.Fragment>
    );
  }
}

const Container = ({
  match, details, followers, follow, update,
  profileFollowers, profileFollowing, unFollow, message, fetchSuccess,
}) => {
  const { params: { profile } } = match;
  return (
    <div className="ui container">
      <div className="ui space borderless">
        <h3 className="ui header medium">
          {profile}
          {' '}
          Profile
        </h3>
        <div className="ui items">
          <hr />
          <div className="item">
            <SingleProfileComponent
              {...details}
              followers={followers}
              followProfile={follow}
              refreshDetails={update}
              unFollowProfile={unFollow}
              profileFollowing={profileFollowing}
              profileFollowers={profileFollowers}
              message={message}
              fetchSuccess={fetchSuccess}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Container.propTypes = {
  profileFollowing: PropTypes.number.isRequired,
  profileFollowers: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  followers: PropTypes.instanceOf(Array).isRequired,
  update: PropTypes.bool.isRequired,
  fetchSuccess: PropTypes.bool.isRequired,
  details: PropTypes.instanceOf(Array).isRequired,
  loading: PropTypes.bool.isRequired,
  fetchProfile: PropTypes.func.isRequired,
  follow: PropTypes.func.isRequired,
  match: PropTypes.shape().isRequired,
  fetchFollowers: PropTypes.func.isRequired,
  unFollow: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    details: state.singleProfileReducer.profile,
    loading: state.singleProfileReducer.loading,
    fetchFailed: state.singleProfileReducer.fetchSingleProfileFailed,
    fetchSuccess: state.singleProfileReducer.fetchSingleProfileSuccess,
    followers: state.singleProfileReducer.followers,
    message: state.singleProfileReducer.followUnfollowMessage,
    profileFollowers: state.singleProfileReducer.profileFollowers,
    profileFollowing: state.singleProfileReducer.profileFollowing,
  }
);

SingleProfileContainer.propTypes = {
  profileFollowing: PropTypes.number.isRequired,
  profileFollowers: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  followers: PropTypes.instanceOf(Array).isRequired,
  fetchFailed: PropTypes.bool.isRequired,
  fetchSuccess: PropTypes.bool.isRequired,
  details: PropTypes.instanceOf(Array).isRequired,
  loading: PropTypes.bool.isRequired,
  fetchProfile: PropTypes.func.isRequired,
  follow: PropTypes.func.isRequired,
  fetchFollowers: PropTypes.func.isRequired,
  unFollow: PropTypes.func.isRequired,
  getFollowingFollowers: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
  match: PropTypes.shape().isRequired,
};

const mapDispatchToProps = dispatch => (
  {
    fetchProfile: (currentUser, token) => (
      dispatch(fetchSingleProfile(currentUser, token))
    ),
    follow: (currentUser, user, token) => (
      dispatch(followProfile(currentUser, user, token))
    ),
    fetchFollowers: (currentUser, token) => (
      dispatch(getUserFollowers(currentUser, token))
    ),
    unFollow: (currentUser, user, token) => (
      dispatch(unFollowProfile(currentUser, user, token))
    ),
    getFollowingFollowers: (profile, token) => (
      dispatch(fetchProfileFollowersFollowing(profile, token))
    ),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SingleProfileContainer);
