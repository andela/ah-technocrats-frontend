import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


import LoginComponent from '../Login/LoginComponent';
import LoginContainer from '../Login/LoginContainer';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('<LoginContainer />', () => {
  it('should match the snapshot', () => {
    const component = shallow(<LoginContainer />);
    expect(component).toMatchSnapshot();
  });
});

describe('Login component form', () => {
  const store = mockStore({});
  let wrapper;
  const onSubmit = jest.fn();
  const props = {
    onChange: jest.fn(),
    error: {
      error: [],
    },
    onSubmit,
    loading: true,
  };

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <LoginComponent {...props} />
        </Provider>
      </BrowserRouter>,
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render register page correctly', () => {
    expect(wrapper.find('#password').exists()).toBe(true);
    expect(wrapper.find('#email').exists()).toBe(true);
  });

  it('should call onChange handler if form value changes', () => {
    const emailField = wrapper.find('input#email');
    emailField.simulate('change', {
      target: {
        value: 'salma@test.com',
      },
    });
    expect(props.onChange.mock.calls.length).toBe(1);
  });
});
