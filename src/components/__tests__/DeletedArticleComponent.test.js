import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import expect from 'expect';
import jest from 'jest-mock';
import Adapter from 'enzyme-adapter-react-16';
import DeletedArticle from '../Articles/DeletedArticle';

Enzyme.configure({
  adapter: new Adapter(),
});
const go = jest.fn();
const history = {
  go,
};
const setupEnzymeWrapper = () => {
  const enzymeWrapper = shallow(<DeletedArticle />);
  return {
    enzymeWrapper,
  };
};

describe('DeletedArticle component', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setupEnzymeWrapper();
    expect(enzymeWrapper.exists()).toEqual(true);
  });
  it('should redirect to /myticles when clicked', () => {
    const enzymeWrapper = mount(<DeletedArticle history={history} />);
    enzymeWrapper.find('button').simulate('click');
    expect(enzymeWrapper.exists()).toEqual(true);
    expect(go).toHaveBeenCalled();
  });
});
