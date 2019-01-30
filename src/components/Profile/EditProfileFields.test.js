import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import expect from 'expect';
import jest from 'jest-mock';
import Adapter from 'enzyme-adapter-react-16';
import ProfileForm from './EditProfileFields';

Enzyme.configure({
  adapter: new Adapter(),
});

describe('EditProfileModal component', () => {
  const props = {
    details: {
      avatar: '',
      bio: '',
      website: '',
      country: '',
      phone: '',
      email: '',
      username: '',
    },
    handleOnChange: jest.fn(),
    handleUpdateProfile: jest.fn(),
    fields: {
      username: '',
      bio: '',
      phone: '',
      country: '',
      website: '',
      email: '',
      avatar: '',
    },
    updating: true,
    handleCloudinaryOpen: jest.fn(),
    errors: {},
    updated: true,
  };

  let shallowWrapper;
  beforeEach(() => {
    shallowWrapper = shallow(<ProfileForm {...props} />);
  });
  describe('it should render correctly', () => {
    it('should render correctly', () => {
      expect(shallowWrapper.exists()).toEqual(true);
    });
    it('should open cloudinary widget', () => {
      shallowWrapper.find('#upload_widget').simulate('click');
      expect(props.handleCloudinaryOpen).toHaveBeenCalled();
    });
    it('should call handleOnChange', () => {
      const event = { target: { name: 'bio', value: 'new bio' } };
      shallowWrapper.find("[name='bio']").simulate('change', event);
      expect(props.handleOnChange).toHaveBeenCalledWith(event);
    });
  });
});
