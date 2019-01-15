import React from 'react';
import { shallow } from 'enzyme';
import RegistrationForm from '../RegistrationForm';
import FormField from '../FormField';

/**
 * Factory function for the __tests__. It creates and returns a shallow wrapper
 * for the __tests__.
 * @function setup
 * @return {ShallowWrapper}
 */
function setup() {
  const props = {
    onSubmit: jest.fn(),
    onChange: jest.fn(),
    error: { email: ['email-error'], password: ['password-error'], username: ['username-error'] },
    successMessage: 'success-message',
    loading: true,
    password: '',
    repeatPassword: '',
    toastOptions: {},
  };
  return shallow(<RegistrationForm {...props} />);
}

describe('Registration Form test', () => {
  it('renders the submit buttons', () => {
    const wrapper = setup();
    const submitButton = wrapper.find('#submit');
    expect(submitButton.length).toBe(0);
  });

  it('renders the loader', () => {
    const wrapper = setup();
    const loader = wrapper.find("[data-test='loader-component']");
    expect(loader.length).toBe(1);
  });
});

describe('Formfield', () => {
  it('renders the form fields', () => {
    const props = {
      onChange: () => {},
      inputName: 'email',
      type: 'text',
      error: { email: ['email-error'] },

    };
    const formField = shallow(<FormField {...props} />);
    expect(formField.find("[data-test='email-error']").length).toBe(1);
  });
});
