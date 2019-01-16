/* eslint-disable comma-dangle */
import React from 'react';

import Enzyme, { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import jest from 'jest-mock';
import LoginComponent, {
  mapDispatchToProps
} from '../SocialLoginComponent';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const fakeStore = configureStore(middlewares);

describe('Login Component snapshot', () => {
  it('should render the Login component as expected', () => {
    const component = shallow(<LoginComponent debug />);
    expect(component).toMatchSnapshot();
  });
});

describe('render the component and check if all items exist', () => {
  const store = fakeStore({
    socialAuth: {
      name: 'Timothy',
      message: 'fetching'
    }
  });
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <LoginComponent />
      </MemoryRouter>
    </Provider>
  );

  it('Should render all child elements correctly', () => {
    expect(wrapper.find('.loader').exists()).toBe(true);
    expect(wrapper.find('.facebook').exists()).toBe(true);
    expect(wrapper.find('.google').exists()).toBe(true);
    expect(wrapper.find('div').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
  });
});

describe('Testing all the props', () => {
  const dispatch = jest.fn();
  const authData = {
    username: 'Timo',
    token: 'YFGJKBHH'
  };
  const error = {
    msg: 'No name',
  };

  it('it should return data fit for facebook', () => {
    mapDispatchToProps(dispatch).fetchUsers();
    const expecteddata = { payload: { fetching: true, message: 'fetching' }, type: 'FETCHING' };
    expect(dispatch.mock.calls[0][0]).toEqual(expecteddata);
  });

  it('it should erro when trying to fetch', () => {
    mapDispatchToProps(dispatch).getError(error);
    const expecteddata = { payload: { fetching: true, message: 'fetching' }, type: 'FETCHING' };
    expect(dispatch.mock.calls[0][0]).toEqual(expecteddata);
  });

  it('it should return user data', () => {
    mapDispatchToProps(dispatch).receivedUsers(authData);
    const expecteddata = { payload: { fetching: true, message: 'fetching' }, type: 'FETCHING' };
    expect(dispatch.mock.calls[0][0]).toEqual(expecteddata);
  });

  it('it should return user data for FacebookAuth', () => {
    mapDispatchToProps(dispatch).FacebookAuth(authData);
    const expecteddata = { payload: { fetching: true, message: 'fetching' }, type: 'FETCHING' };
    expect(dispatch.mock.calls[0][0]).toEqual(expecteddata);
  });

  it('it should return user data for GoogleAuth', () => {
    mapDispatchToProps(dispatch).GoogleAuth(authData);
    const expecteddata = { payload: { fetching: true, message: 'fetching' }, type: 'FETCHING' };
    expect(dispatch.mock.calls[0][0]).toEqual(expecteddata);
  });

  it('it should return user data for TwitterAuth', () => {
    mapDispatchToProps(dispatch).TwitterAuth(authData);
    const expecteddata = { payload: { fetching: true, message: 'fetching' }, type: 'FETCHING' };
    expect(dispatch.mock.calls[0][0]).toEqual(expecteddata);
  });
});
