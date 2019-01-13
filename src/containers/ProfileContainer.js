import { connect } from 'react-redux';
/* eslint-disable comma-dangle */
import React from 'react';
import propTypes from 'prop-types';
import Cookies from 'js-cookie';
import {
  getProfileDetails, updateProfileDetails, getFollowers, getFollowing, updated as updatedFunc,
} from '../actions/profileActions';
import Profile from '../components/Profile/Profile';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SessionExpiredComponent from '../components/common/SessionExpiredComponent';

export class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      bio: '',
      phone: '',
      country: '',
      website: '',
      email: '',
      avatar: '',
    };
  }

  componentDidMount() {
    const { getFollowersFunc, getFollowingFunc } = this.props;
    document.title = 'Profile | AuthorsHaven'; // update document title
    const token = Cookies.get('access_token');
    const username = Cookies.get('username');
    this.dispatchFetchProfileData(username, token);
    getFollowersFunc(username, token);
    getFollowingFunc(username, token);
  }

  onChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  updatedDetails = () => {
    const stat = this.state;
    return Object.keys(this.state).reduce((object, key) => {
      if (stat[key] !== '') {
        object[key] = stat[key];
      }
      return object;
    }, {});
  }


  dispatchUpdateProfileDetails = (token) => {
    const { updateProfile } = this.props;
    updateProfile(this.updatedDetails(), token);
  }

  dispatchRefreshProfileDetails =(username, token) => {
    const { updated, resetUpdated } = this.props;
    if (updated) {
      this.dispatchFetchProfileData(username, token);
      this.setState({ // reset form fields after update
        username: '',
        bio: '',
        phone: '',
        country: '',
        website: '',
        email: '',
        avatar: '',
      });
    }
    resetUpdated();
  }

  dispatchFetchProfileData =(username, token) => {
    const { getProfileDetailsFunc } = this.props;
    getProfileDetailsFunc(username, token);
  }

  updateProfileImage = (newImage) => {
    this.setState({ avatar: newImage });
  }

  render() {
    const fields = this.state;
    const {
      details, errors, updating, updated, followers, following, requestStatus, history
    } = this.props;
    return (
      <React.Fragment>
        <Header history={history} />
        <SessionExpiredComponent
          history={history}
          requestStatus={requestStatus}
          promptLogin={this.promptLogin}
        />
        <Profile
          details={details}
          requestStatus={requestStatus}
          fields={fields}
          refreshDetails={this.dispatchRefreshProfileDetails}
          errors={errors}
          updating={updating}
          handleOnChange={this.onChange}
          updated={updated}
          handleUpdateProfile={this.dispatchUpdateProfileDetails}
          followers={followers}
          following={following}
          updateProfileImage={this.updateProfileImage}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

ProfileContainer.propTypes = {
  details: propTypes.shape().isRequired,
  errors: propTypes.shape().isRequired,
  updating: propTypes.bool.isRequired,
  updated: propTypes.bool.isRequired,
  followers: propTypes.number.isRequired,
  following: propTypes.number.isRequired,
  resetUpdated: propTypes.func.isRequired,
  updateProfile: propTypes.func.isRequired,
  getProfileDetailsFunc: propTypes.func.isRequired,
  getFollowersFunc: propTypes.func.isRequired,
  getFollowingFunc: propTypes.func.isRequired,
  requestStatus: propTypes.shape().isRequired,
  history: propTypes.shape().isRequired,
};

const mapStateToProps = (state) => {
  const profileDetails = ({
    details: state.profileDetails.details,
    updating: state.profileDetails.updating,
    errors: state.profileDetails.errors,
    updated: state.profileDetails.updated,
    following: state.profileDetails.following,
    followers: state.profileDetails.followers,
    requestStatus: state.profileDetails.requestStatus,
  });
  return profileDetails;
};

const mapDispatchToProps = dispatch => (
  {
    getProfileDetailsFunc: (username, token) => (
      dispatch(getProfileDetails(username, token))
    ),
    updateProfile: (details, token) => (
      dispatch(updateProfileDetails(details, token))
    ),
    getFollowersFunc: (username, token) => (
      dispatch(getFollowers(username, token))
    ),
    getFollowingFunc: (username, token) => (
      dispatch(getFollowing(username, token))
    ),
    resetUpdated: () => (
      dispatch(updatedFunc(false))
    ),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
