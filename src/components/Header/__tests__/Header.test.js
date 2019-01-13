import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../Header';

Enzyme.configure({
  adapter: new Adapter(),
});

const setupEnzymeWrapper = () => {
  const enzymeWrapper = shallow(<Header />);
  return {
    enzymeWrapper,
  };
};

describe('Header component', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setupEnzymeWrapper();
    expect(enzymeWrapper.exists()).toEqual(true);
  });
});
