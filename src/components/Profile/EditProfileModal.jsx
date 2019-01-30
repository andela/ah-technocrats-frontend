import React from 'react';
import './profile.scss';
import {
  Image, GridColumn,
  Grid, Segment, Container,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ahLogoSquare from './ah.logo-square.svg';
import ProfileForm from './EditProfileFields';

const cloudinaryWidget = updateProfileImage => window.cloudinary.createUploadWidget({
  cloudName: 'verencelola',
  uploadPreset: 'verencelola',
  multiple: false,
  maxFiles: 1,
  showAdvancedOptions: false,
}, (error, result) => {
  if (result && result.event === 'success') {
    const uploadedImage = result.info.url;
    document.getElementById('profile-image').src = uploadedImage;
    updateProfileImage(uploadedImage);
  }
});

const EditProfileModal = (props) => {
  const {
    updateProfileImage,
  } = props;
  const handleCloudinaryOpen = () => {
    cloudinaryWidget(updateProfileImage).open();
  };

  return (
    <Container>
      <Grid.Column as={Segment} width="10">
        <GridColumn as={Grid}>
          <Image className="image-login centered aligned" src={ahLogoSquare} />
        </GridColumn>
        <Grid.Column as={Grid} centered>
          <GridColumn width="ten">
            <ProfileForm {...props} handleCloudinaryOpen={handleCloudinaryOpen} />
          </GridColumn>
        </Grid.Column>
      </Grid.Column>
    </Container>
  );
};

EditProfileModal.propTypes = {
  updateProfileImage: PropTypes.func.isRequired,

};

export default EditProfileModal;
