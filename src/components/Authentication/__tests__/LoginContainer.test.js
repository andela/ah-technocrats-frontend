import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import LoginContainer from '../Login/LoginContainer';

Enzyme.configure({ adapter: new Adapter() });


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Login Container tests', () => {
  const loginUser = jest.fn();
  const onSubmit = jest.fn();
  const store = mockStore({
    loginReducer: {
      loading: false,
      successfulMessage: null,
    },
  });
  const props = {
    error: {
      error: [],
    },
    actions: {
      loginUser,
    },
    onSubmit,
  };
  const wrapper = mount(
    <BrowserRouter>
      <Provider store={store}>
        <LoginContainer {...props} />
      </Provider>
    </BrowserRouter>,
  );

  it('should render login page correctly', () => {
    expect(wrapper.find('#password').exists()).toBe(true);
    expect(wrapper.find('#email').exists()).toBe(true);
  });

  it('calls loginUser on submit', () => {
    wrapper.find('input#email').simulate('change', {
      target: {
        value: 'salma@test.com',
      },
    });
    wrapper.find('form').simulate('submit');
  });
});
