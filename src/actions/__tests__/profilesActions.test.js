/* eslint-disable comma-dangle */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import {
  FETCH_PROFILES, PROFILES_LOADING,
  FETCH_PROFILES_FAILED, FETCH_PROFILE_FOLLOWERS,
  FETCH_SINGLE_PROFILE, FETCH_SINGLE_PROFILE_SUCCESS,
  FETCH_SINGLE_PROFILE_FAILED, FETCH_PROFILES_SUCCESSFUL
} from '../actionTypes';
import {
  fetchUserProfiles, getUserFollowers,
  fetchSingleProfile,
} from '../profilesActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetch profiles actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('creates FETCHPROFILES action after successfuly fetching profiles details', () => {
    const profiles = [
      {
        avatar: 'https://libertv.com/wp-content/uploads/2018/03/user-avatar-placeholder-1.png',
        bio: 'Hello world',
        country: 'Kenya',
        email: 'verencelola@icloud.com',
        phone: '0987654342',
        username: 'verencelola',
        website: 'google.com',
      },
      {
        avatar: 'https://libertv.com/wp-content/uploads/2018/03/user-avatar-placeholder-1.png',
        bio: 'Hello world',
        country: 'Kenya',
        email: 'kamya@icloud.com',
        phone: '0987654342',
        username: 'kamya',
        website: 'google.com',
      },
    ];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: profiles,
      });
    });

    const expectedAction = [
      {
        type: PROFILES_LOADING,
        status: true,
      },
      {
        type: FETCH_PROFILES_SUCCESSFUL,
        status: true,
      },
      {
        type: FETCH_PROFILES,
        profiles,
      },
      {
        type: PROFILES_LOADING,
        status: false,
      },
    ];
    const store = mockStore({ profileReducer: {} });
    const token = 'token';
    return store.dispatch(fetchUserProfiles(token)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('creates FETCH_PROFILE_FAILED after failing to fetch user profiles', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 403,
        response: 'Token Expired',
      });
    });
    const expectedAction = [
      {
        type: PROFILES_LOADING,
        status: true,
      },
      {
        type: FETCH_PROFILES_FAILED,
        reason: 'Token Expired'
      },
      {
        type: PROFILES_LOADING,
        status: false,
      }
    ];
    const store = mockStore({ profileReducer: {} });
    const token = 'token';
    return store.dispatch(fetchUserProfiles(token)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('creates FETCH_PROFILE_FOLLOWERS once followers found', () => {
    const data = {
      following: [
        {
          avatar: 'https://libertv.com/wp-content/uploads/2018/03/user-avatar-placeholder-1.png',
          bio: 'Hello world',
          country: 'Kenya',
          email: 'verencelola@icloud.com',
          phone: '0987654342',
          username: 'verencelola',
          website: 'google.com',
        },
        {
          avatar: 'https://libertv.com/wp-content/uploads/2018/03/user-avatar-placeholder-1.png',
          bio: 'Hello world',
          country: 'Kenya',
          email: 'kamya@icloud.com',
          phone: '0987654342',
          username: 'kamya',
          website: 'google.com',
        },
      ]
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: data
      });
    });
    const expectedAction = [
      {
        type: FETCH_PROFILE_FOLLOWERS,
        followers: data.following
      },
    ];
    const store = mockStore({ profileReducer: {} });
    const token = 'token';
    const currentUser = 'me';
    return store.dispatch(getUserFollowers(currentUser, token)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('should create FETCH_SINGLE_PROFILE action after successfully getting a profile', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 403,
        response: 'Token Expired'
      });
    });
    const expectedAction = [
      {
        type: PROFILES_LOADING,
        status: true
      },
      {
        type: PROFILES_LOADING,
        status: false
      },
      {
        type: FETCH_SINGLE_PROFILE_FAILED,
        reason: 'Token Expired'
      },
    ];
    const store = mockStore({ profileReducer: {} });
    const token = 'token';
    const profile = 'me';
    return store.dispatch(fetchSingleProfile(profile, token)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('should create FETCH_SINGLE_PROFILE action after successfully getting a profile', () => {
    const data = {
      profile: {
        avatar: 'https://libertv.com/wp-content/uploads/2018/03/user-avatar-placeholder-1.png',
        bio: 'Hello world',
        country: 'Kenya',
        email: 'verencelola@icloud.com',
        phone: '0987654342',
        username: 'verencelola',
        website: 'google.com',
      },
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: data
      });
    });
    const expectedAction = [
      {
        type: PROFILES_LOADING,
        status: true
      },
      {
        type: PROFILES_LOADING,
        status: false
      },
      {
        type: FETCH_SINGLE_PROFILE,
        details: data.profile
      },
      {
        type: FETCH_SINGLE_PROFILE_SUCCESS,
        status: true
      },
    ];
    const store = mockStore({ profileReducer: {} });
    const token = 'token';
    const profile = 'me';
    return store.dispatch(fetchSingleProfile(profile, token)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
