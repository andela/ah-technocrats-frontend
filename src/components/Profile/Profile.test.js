import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import expect from 'expect';
import jest from 'jest-mock';
import Adapter from 'enzyme-adapter-react-16';
import Profile from './Profile';

Enzyme.configure({
  adapter: new Adapter(),
});

const setup = () => {
  const props = {
    details: {
      username: '', avatar: '', country: '', bio: '', phone: '', website: '', email: '',
    },
    refreshDetails: jest.fn(),
    following: 9,
    followers: 8,
    handleOnChange: jest.fn(),
    handleUpdateProfile: jest.fn(),
    fields: {},
    updating: true,
    errors: {},
    updated: false,
    updateProfileImage: jest.fn(),
  };
  const enzymeWrapper = shallow(<Profile {...props} />);
  return {
    props,
    enzymeWrapper,
  };
};

describe('Profile Container', () => {
  it('should render correctly', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper).toMatchSnapshot();
  });
});
