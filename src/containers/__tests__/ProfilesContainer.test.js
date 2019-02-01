import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ProfilesContainer from '../ProfilesContainer';
import ProfileCard from '../../components/Profiles/ProfileCard';

Enzyme.configure({
  adapter: new Adapter(),
});

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let shallowWrapper;
let mountWrapper;

describe('ProfilesContainer', () => {
  const profiles = [
    {
      avatar: 'https://libertv.com/wp-content/uploads/2018/03/user-avatar-placeholder-1.png',
      bio: '',
      country: '',
      created_at: '2019-01-24T10:00:36.266039Z',
      email: 'teamorekamau97@gmail.com',
      last_login: '2019-01-29 10:24:42.081230+00:00',
      notifications_enabled: true,
      phone: '',
      username: 'teamorekamau97',
      website: '',
    },
  ];

  beforeEach(() => {
    const store = mockStore(
      {
        profilesReducer: {
          fetching: false,
          fetchFailed: false,
          fetchSuccess: true,
          profiles,
        },
      },
    );
    mountWrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <ProfilesContainer />
        </Provider>
      </BrowserRouter>,
    );
    shallowWrapper = shallow(<ProfilesContainer />);
  });
  describe('render', () => {
    it('should render self and children correctly', () => {
      expect(mountWrapper.exists()).toEqual(true);
    });
    it('should match snapshot', () => {
      expect(mountWrapper).toMatchSnapshot();
    });
    it('should render right number of cards', () => {
      const cards = shallowWrapper.find(ProfileCard);
      expect(cards).toBeDefined();
    });
  });
});
