import React from 'react';
import { shallow } from 'enzyme';
import DeleteButton from '../Articles/DeleteButtonArticleContainer';

describe('DeleteButton', () => {
  const props = {
    onDelete: jest.fn(),
  };
  it('render the component if success is truthy', () => {
    const wrapper = shallow(<DeleteButton {...props} />);
    wrapper.find('#cancel-delete').simulate('click');
    wrapper.find('#confirm-delete').simulate('click');
  });
});
