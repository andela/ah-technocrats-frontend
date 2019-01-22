import React from 'react';
import { shallow } from 'enzyme';
import { SearchBar } from '../SearchBox';

function setup() {
  const props = {

  };
  return shallow(<SearchBar {...props} />);
}

describe('Search Box component', () => {
  it('renders without error', () => {
    const wrapper = setup();
    const searchBox = wrapper.find("[data-test='searchBoxComponent']");
    expect(searchBox.length).toBe(1);
  });

  it('captures user input', () => {
    const wrapper = setup();
    const event = { target: { name: 'search', value: 'newUser' } };
    wrapper.instance().handleChange(event);
    expect(wrapper.state().search).toBe('newUser');
  });
});
