import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, Image,
} from 'semantic-ui-react';
import Moment from 'react-moment';

const ProfileCard = (props) => {
  const {
    username, bio, avatar, created_at: createdAt,
  } = props;
  return (
    <Card href={`/profiles/${username}`} raised>
      <Image src={avatar} className="profile-image" />
      <Card.Content>
        <Card.Header className="username">{username}</Card.Header>
        <Card.Meta>
          <span className="date">
            Author Since
            {' '}
            <Moment format="DD-MM-YYYY">{createdAt}</Moment>
          </span>
        </Card.Meta>
        <Card.Description>{bio || 'Author on AuthorsHaven'}</Card.Description>
      </Card.Content>
    </Card>
  );
};

ProfileCard.propTypes = {
  username: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
};

export default ProfileCard;
