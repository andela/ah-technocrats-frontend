import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import SideBarMenu from '../Menu';

Enzyme.configure({
  adapter: new Adapter(),
});
const mockStore = configureStore([thunk]);
const setupEnzymeWrapper = () => {
  const enzymeWrapper = shallow(<SideBarMenu />);
  return {
    enzymeWrapper,
  };
};

const setUpMountWrapper = () => {
  const store = mockStore(
    {
      loginReducer: {
        success: 'Login Successful',
      },
    },
  );
  const mountWrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <SideBarMenu />
      </BrowserRouter>
    </Provider>,
  );
  return {
    mountWrapper,
  };
};

describe('Menu', () => {
  it('should render correctly in "debug" mode', () => {
    const headerComponent = shallow(<SideBarMenu debug />);
    expect(headerComponent).toMatchSnapshot();
  });
});

describe('menu component', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setupEnzymeWrapper();
    expect(enzymeWrapper.exists()).toEqual(true);
    enzymeWrapper.unmount();
  });
  it('should mount self and subcomponents', () => {
    const { mountWrapper } = setUpMountWrapper();
    expect(mountWrapper.exists()).toEqual(true);
    mountWrapper.unmount();
  });
});
