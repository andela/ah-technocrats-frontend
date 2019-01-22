import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home', () => {
  it('render the home component', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('div').exists()).toBe(true);
  });
});
