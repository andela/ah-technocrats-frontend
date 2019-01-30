import React from 'react';
import {
  Item, Label, Icon, Modal, Header,
} from 'semantic-ui-react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import EditProfileModal from './EditProfileModal';

const ProfileDetail = (props) => {
  const { name, value } = props;
  return (
    <React.Fragment>
      <Item.Meta content={name} />
      <Item.Description
        as="p"
        content={value}
      />
    </React.Fragment>
  );
};
const Details = (props) => {
  const details = [
    {
      name: 'Bio',
      value: props.bio,
    },
    {
      name: 'Email',
      value: props.email,
    },
    {
      name: 'Country',
      value: props.country,
    },
    {
      name: 'Phone',
      value: props.phone,
    },
    {
      name: 'Website',
      value: props.website,
    },
  ];
  return details.map(detail => (
    <ProfileDetail {...detail} key={detail.name} />
  ));
};
const Follow = (props) => {
  const { followers, following } = props;
  return (
    <Item.Group>
      <Label>
        <Icon name="users">
          {' '}
          {followers}
          {' '}
        Followers
        </Icon>
      </Label>
      <Label>
        <Icon name="user">
          {' '}
          {following}
          {' '}
        Following
        </Icon>
      </Label>
    </Item.Group>
  );
};
const ProfileModal = (props) => {
  const { handleOnModalClose } = props;
  return (
    <Modal
      trigger={<p className="trigger_modal"><small>Edit your Profile</small></p>}
      content={<EditProfileModal {...props} />}
      closeIcon
      onClose={handleOnModalClose}
      size="tiny"
    />
  );
};

ProfileModal.propTypes = {
  handleOnModalClose: propTypes.func.isRequired,
};

const DetailsContainer = (props) => {
  const {
    details, followers, following,
  } = props;
  return (
    <Item.Group>
      <Item>
        <Item.Image className="profile-avatar" src={details.avatar} />
        <Item.Content>
          <Item.Content as={Header}>
            <Header
              as={Link}
              to="/profile"
              size="huge"
              className="capitalize"
            >
              {details.username}
            </Header>
          </Item.Content>
          <ProfileModal {...props} />
          <Details {...details} />
          <Follow followers={followers} following={following} />
        </Item.Content>
      </Item>
    </Item.Group>
  );
};

DetailsContainer.propTypes = {
  details: propTypes.shape().isRequired,
  followers: propTypes.number.isRequired,
  following: propTypes.number.isRequired,
};

ProfileDetail.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.string,
};

ProfileDetail.defaultProps = {
  value: '',
};

Follow.propTypes = {
  followers: propTypes.number.isRequired,
  following: propTypes.number.isRequired,
};


export default DetailsContainer;
