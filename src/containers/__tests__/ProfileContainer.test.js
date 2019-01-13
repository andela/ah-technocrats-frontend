import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import expect from 'expect';
import jest from 'jest-mock';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ProfileContainer } from '../ProfileContainer';

Enzyme.configure({
  adapter: new Adapter(),
});

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let shallowWrapper;
let mountWrapper;

describe('Profile Container component', () => {
  const props = {
    details: {},
    updating: false,
    errors: {},
    updated: true,
    following: 2,
    followers: 3,
    getProfileDetailsFunc: jest.fn(),
    updateProfile: jest.fn(),
    requestStatus: {},
    history: {},
    getFollowersFunc: jest.fn(),
    getFollowingFunc: jest.fn(),
    resetUpdated: jest.fn(),
    newUrl: '',
  };

  beforeEach(() => {
    shallowWrapper = shallow(<ProfileContainer {...props} />);
    const store = mockStore({
      details: {},
      updating: false,
      errors: {},
      success: false,
      updated: false,
      following: 0,
      followers: 0,
      requestStatus: {
        status: false,
        type: '',
        message: '',
      },
    });
    mountWrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <ProfileContainer {...props} />
        </Provider>
      </BrowserRouter>,
    );
  });
  describe('it should render correctly', () => {
    it('should call getProfileDetailsFunc, getFollowers and getFollowing once component mounts', () => {
      expect(shallowWrapper.exists()).toEqual(true);
      expect(props.getProfileDetailsFunc).toHaveBeenCalled();
      expect(props.getFollowersFunc).toHaveBeenCalled();
      expect(props.getFollowingFunc).toHaveBeenCalled();
    });
    it('should render self and children correctly', () => {
      expect(mountWrapper.exists()).toEqual(true);
    });
  });
});


Enzyme.configure({
  adapter: new Adapter(),
});

describe('it should render correctly', () => {
  it('should render itself and children correctly', () => {
    expect(shallowWrapper.exists()).toEqual(true);
    expect(mountWrapper.exists()).toEqual(true);
    expect(mountWrapper).toMatchSnapshot();
  });
});
