/* eslint-disable comma-dangle */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import {
  profileDetails,
  updating, errors,
  updated, followers,
  following, getProfileDetails, getFollowers,
  getFollowing,
  updateProfileDetails,
} from '../profileActions';
import * as types from '../profileActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('getPosts actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('creates PROFILEDETAILS action after successfuly fetching profile details', () => {
    const details = {
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
        response: details,
      });
    });

    const expectedAction = [{
      type: types.PROFILE_DETAILS,
      details: details.profile,
    }];
    const store = mockStore({ profileDetails: {} });

    return store.dispatch(getProfileDetails()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('create UPDATEPROFILEDETAILS action after successfully fetching profile', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
      });
    });

    const expectedAction = [
      { type: types.UPDATING, updating: true },
      { type: types.UPDATING, updating: false },
      { type: types.UPDATEPROFILE, status: true },
      { type: types.ERRORS, errors: {} }
    ];
    const store = mockStore({ profileDetails: {} });

    return store.dispatch(updateProfileDetails({ username: 'verencelola' })).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });


  it('create ERRORS action after failing to update profile details', () => {
    const errorDetails = {
      errors: {
        username: 'Username already exists',
      }
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: errorDetails,
      });
    });
    const expectedCatchActions = [
      { type: types.UPDATING, updating: true },
      { type: types.UPDATING, updating: false },
      { type: types.UPDATEPROFILE, status: false },
      { type: types.ERRORS, errors: { ...errorDetails.errors, username: ['Username already exists'] } },
    ];
    const store = mockStore({ profileDetails: {} });

    return store.dispatch(updateProfileDetails()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedCatchActions);
    });
  });

  it('create FOLLOWERS action after successfully getting followers', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          followers: []
        }
      });
    });
    const expectedAction = [
      { type: types.FOLLOWERS, followers: 0 },
    ];
    const store = mockStore({ profileDetails: {} });

    return store.dispatch(getFollowers()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('create FOLLOWING action after successfully getting following', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          following: []
        }
      });
    });
    const expectedAction = [
      { type: types.FOLLOWING, following: 0 },
    ];
    const store = mockStore({ profileDetails: {} });

    return store.dispatch(getFollowing()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});


describe('profile actions', () => {
  it('should create an action profileDetails', () => {
    const details = {
      details: {
        username: 'vincent',
        email: 'verencelola@icloud.com',
        bio: '',
        website: 'http://andela.com',
      },
    };
    const expectedAction = {
      type: types.PROFILE_DETAILS,
      details,
    };
    expect(profileDetails(details)).toEqual(expectedAction);
  });

  it('should create an action Updating', () => {
    const response = true;
    const expectedAction = {
      type: types.UPDATING,
      updating: response,
    };
    expect(updating(response)).toEqual(expectedAction);
  });

  it('should create an action Errors', () => {
    const data = {
      username: 'User with that username exists',
      email: 'Email already exists',
    };
    const expectedAction = {
      type: types.ERRORS,
      errors: data,
    };
    expect(errors(data)).toEqual(expectedAction);
  });

  it('should create an action Updated', () => {
    const status = true;
    const expectedAction = {
      type: types.UPDATEPROFILE,
      status,
    };
    expect(updated(status)).toEqual(expectedAction);
  });

  it('should create an action Followers', () => {
    const followersCount = 78;
    const expectedAction = {
      type: types.FOLLOWERS,
      followers: followersCount,
    };
    expect(followers(followersCount)).toEqual(expectedAction);
  });

  it('should create an action Followers', () => {
    const followingCount = 78;
    const expectedAction = {
      type: types.FOLLOWING,
      following: followingCount,
    };
    expect(following(followingCount)).toEqual(expectedAction);
  });
});


describe('async profile actions', () => {
  beforeEach(
    () => moxios.install()
  );

  afterEach(
    () => moxios.uninstall()
  );

  it('should create an async action GetprofileDetails', () => {
    const details = {
      avatar: 'https://libertv.com/wp-content/uploads/2018/03/user-avatar-placeholder-1.png',
      bio: 'Hello world',
      country: 'Kenya',
      email: 'verencelola@icloud.com',
      phone: '0987654342',
      username: 'verencelola',
      website: 'google.com',
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(
        {
          status: 200,
          response: details,
        }
      );
      const expectedAction = (
        {
          type: types.PROFILE_DETAILS,
          details,
        }
      );
      const store = mockStore({ profileDetails: {} });
      return store.dispatch(getProfileDetails()).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
  });

  it('should create an async action getFollowing', () => {
    const followersData = [
      {
        username: 'timothy.kamau',
        email: 'timothy.kamau@andela.com',
        last_login: null,
        country: '',
        website: '',
        phone: '',
        bio: '',
        created_at: '2019-01-16T16:45:13.795952Z',
        avatar: 'https://libertv.com/wp-content/uploads/2018/03/user-avatar-placeholder-1.png',
        notifications_enabled: true,
      },
      {
        username: 'verencelola',
        email: 'verencelola@icloud.com',
        last_login: '2019-01-16 18:39:46.727462+00:00',
        country: 'Kenya',
        website: 'google.com',
        phone: '0987654342',
        bio: 'Hello world',
        created_at: '2019-01-16T11:21:44.886744Z',
        avatar: 'https://libertv.com/wp-content/uploads/2018/03/user-avatar-placeholder-1.png',
        notifications_enabled: true,
      },
    ];
    moxios.wait(
      () => {
        const req = moxios.requests.mostRecent();
        req.respondWith(
          {
            status: 200,
            response: followers,
          }
        );
        const expectedAction = (
          {
            type: types.FOLLOWERS,
            followers: followersData,
          }
        );
        const store = mockStore(
          {
            profileDetails: {},
          }
        );
        return store.dispatch(getFollowers()).then(
          () => {
            expect(store.getActions()).toEqual(expectedAction);
          }
        );
      }
    );
  });

  it('should create an async action getFollowing', () => {
    const followingData = [
      {
        username: 'timothy.kamau',
        email: 'timothy.kamau@andela.com',
        last_login: null,
        country: '',
        website: '',
        phone: '',
        bio: '',
        created_at: '2019-01-16T16:45:13.795952Z',
        avatar: 'https://libertv.com/wp-content/uploads/2018/03/user-avatar-placeholder-1.png',
        notifications_enabled: true,
      },
    ];
    moxios.wait(
      () => {
        const req = moxios.requests.mostRecent();
        req.respondWith(
          {
            status: 200,
            response: following,
          }
        );
        const expectedAction = (
          {
            type: types.FOLLOWERS,
            following: followingData,
          }
        );
        const store = mockStore(
          {
            profileDetails: {},
          }
        );
        return store.dispatch(getFollowing()).then(
          () => {
            expect(store.getActions()).toEqual(expectedAction);
          }
        );
      }
    );
  });
});
