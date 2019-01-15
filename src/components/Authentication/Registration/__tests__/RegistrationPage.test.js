import React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { RegistrationPage, mapStateToProps } from '../RegistrationPage';


const props = {
  error: { email: ['email-error'], password: ['password-error'], username: ['username-error'] },
  successMessage: 'success',
  loading: null,
  password: 'password',
  repeat_password: 'password',
  onSubmit: jest.fn(),
  actions: {},
};

describe('Registration Page __tests__', () => {
  it('Should render submit button', () => {
    const wrapper = mount(<BrowserRouter><RegistrationPage {...props} /></BrowserRouter>);
    expect(wrapper.find('#submit').exists()).toBe(true);
  });
});

describe('Registration Page class Methods', () => {
  it('formatUserData Function', () => {
    const wrapper = shallow(<RegistrationPage {...props} />);
    wrapper.setState({ username: 'MyUserName', email: 'email', password: 'password' });
    wrapper.instance().formatUserData();
    expect(wrapper.state().username).toBe('MyUserName');
  });

  it('onChange function', () => {
    const wrapper = shallow(<RegistrationPage {...props} />);
    const event = { target: { name: 'username', value: 'newUser' } };
    wrapper.instance().onChange(event);
    expect(wrapper.state().username).toBe('newUser');
  });

  it('mapStateToProps', () => {
    const state = {
      registrationReducer: { message: { message: 'hello' }, loading: false, error: 'some error' }
    };
    const ownProps = {};
    const expectdResult = {
      error: "some error",
      successMessage: { message: 'hello' },
      loading: false,
      ownProps: {}
    };
    expect(mapStateToProps(state, ownProps)).toEqual(expectdResult)

  });
});
