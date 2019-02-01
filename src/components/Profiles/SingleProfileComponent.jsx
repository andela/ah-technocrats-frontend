import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

const currentUser = Cookies.get('username');
const token = Cookies.get('access_token');

const SingleProfileComponent = (props) => {
  const {
    avatar, username, followProfile,
    followers, unFollowProfile,
  } = props;
  const handleOnFollow = () => { followProfile(currentUser, username, token); };
  const followingProfile = () => (
    followers.find(
      profile => (profile.username === username),
    )
  );
  const handleOnUnFollow = () => { unFollowProfile(currentUser, username, token); };
  return (
    <React.Fragment>
      <div className="image"><img alt="profile avatar" src={avatar} /></div>
      <div className="content">
        <p href="profile.html" className="ui header huge username">{username}</p>
        <div>
          <Button handleOnFollow={handleOnFollow} handleOnUnFollow={handleOnUnFollow} followingProfile={followingProfile} />
        </div>
        <Labels {...props} />
      </div>
    </React.Fragment>
  );
};

const Labels = ({
  profileFollowers, profileFollowing, phone, country, website, bio, created_at: createdAt,
}) => (
  <React.Fragment>
    <div className="meta">Bio:</div>
    <div className="bottom-padding description"><p>{bio || 'Author on AuthorsHaven'}</p></div>
    <div className="meta">Author Since:</div>
    <div className="bottom-padding description">
      <p><Moment format="DD-MM-YYYY">{createdAt}</Moment></p>
    </div>
    <div className="meta">Country:</div>
    <div className="bottom-padding description"><p>{country}</p></div>
    <div className="meta">Phone:</div>
    <div className="bottom-padding description"><p>{phone}</p></div>
    <div className="meta">Website:</div>
    <div className="bottom-padding description"><p><a>{website}</a></p></div>
    <div className="ui label">
      <i className="users icon" />
      {' '}
      {profileFollowers}
      {' '}
      Followers
    </div>
    <div className="ui label">
      <i className="user icon" />
      {' '}
      {profileFollowing}
      {' '}
      Following
    </div>
  </React.Fragment>
);

SingleProfileComponent.propTypes = {
  bio: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.instanceOf(Array).isRequired,
  followProfile: PropTypes.func.isRequired,
  unFollowProfile: PropTypes.func.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileFollowers: PropTypes.number.isRequired,
  profileFollowing: PropTypes.number.isRequired,
  created_at: PropTypes.string.isRequired,
};

Labels.propTypes = {
  bio: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  profileFollowers: PropTypes.number.isRequired,
  profileFollowing: PropTypes.number.isRequired,
  created_at: PropTypes.string.isRequired,
};

export default SingleProfileComponent;

const Button = (props) => {
  const { followingProfile, handleOnFollow, handleOnUnFollow } = props;
  return (
    <button id="followunfollow" type="button" onClick={followingProfile() ? handleOnUnFollow : handleOnFollow} className="ui mini green active button">
      <i className="user icon" />
      { followingProfile() ? 'Unfollow' : 'Follow'}
    </button>
  );
};

Button.propTypes = {
  followingProfile: PropTypes.func.isRequired,
  handleOnFollow: PropTypes.func.isRequired,
  handleOnUnFollow: PropTypes.func.isRequired,
};
