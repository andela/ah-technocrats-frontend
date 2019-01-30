/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import {
  Form, Input, Image, Message, Header,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import COUNTRY_OPTIONS from './countriesData';

const Error = props => (
  props.field.map(err => (<small className="error">{err}</small>))
);
const Field = (props) => {
  const {
    name, value, handleOnChange, errors, fields,
  } = props;
  return (
    <Form.Field>
      <label htmlFor="username" className="capitalize">
        {`${name}:`}
        {' '}
        <br />
        {errors[name] ? <Error field={errors[name]} /> : null}
        <Input name={name} id={name} onChange={handleOnChange} type="text" value={fields[name]} placeholder={value} />

      </label>
    </Form.Field>
  );
};

Field.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  errors: PropTypes.shape().isRequired,
  fields: PropTypes.shape().isRequired,
};


const Fields = (props) => {
  const {
    email, username, fields, errors, handleOnChange,
  } = props;
  const details = [
    {
      name: 'email',
      value: email,
    },
    {
      name: 'username',
      value: username,
    },
  ];
  return details.map(detail => (
    <Field
      name={detail.name}
      value={detail.value}
      key={detail.name}
      fields={fields}
      errors={errors}
      handleOnChange={handleOnChange}
    />
  ));
};

const ProfileForm = ({
  details, handleOnChange, handleUpdateProfile,
  handleCloudinaryOpen, fields, updating, errors, updated,
}) => {
  const token = Cookies.get('access_token');
  const updateProfile = () => {
    handleUpdateProfile(token);
  };
  return (
    <Form onSubmit={updateProfile} loading={updating} className={errors ? 'success' : 'error'}>
      {updated ? <Message success header="Profile Updated" content="Your profile details have been updated successfully." /> : null}
      <Header as="h3">Edit Your Profile</Header>
      <Header.Subheader className="edit-profile" as="h6" size="tiny">
        <p id="upload_widget" onClick={handleCloudinaryOpen}>Change Profile Picture</p>
      </Header.Subheader>
      <Form.Field as={Image} id="profile-image" centered size="medium" src={details.avatar} circular className="profile-image" />
      <Fields
        email={details.email}
        username={details.username}
        handleOnChange={handleOnChange}
        fields={fields}
        errors={errors}
      />
      <Form.Field>
        <label htmlFor="phone">
            Phone:
          {' '}
          <br />
          {errors.phone ? <Error field={errors.phone} /> : null}
          <Input name="phone" value={fields.phone} error={errors.phone} onChange={handleOnChange} placeholder={details.phone} type="text" />
        </label>
      </Form.Field>
      <Form.Input label="Website:" type="url" name="website" value={fields.website} onChange={handleOnChange} placeholder={details.website} />
      <Form.Select options={COUNTRY_OPTIONS} name="country" onChange={handleOnChange} defaultValue={details.country} label="Country" />
      <Form.TextArea label="Bio:" autoHeight name="bio" onChange={handleOnChange} value={fields.bio} placeholder={details.bio} />
      <Form.Button color="green" type="submit" inverted>Save Changes</Form.Button>
    </Form>
  );
};

ProfileForm.propTypes = {
  details: PropTypes.shape().isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleUpdateProfile: PropTypes.func.isRequired,
  fields: PropTypes.shape().isRequired,
  updating: PropTypes.bool.isRequired,
  handleCloudinaryOpen: PropTypes.func.isRequired,
  errors: PropTypes.shape().isRequired,
  updated: PropTypes.bool.isRequired,
};

export default ProfileForm;
