import React from 'react';
import { shallow } from 'enzyme';
import { CommentContainerClass } from '../CommentContainer';


function setup() {
  const props = {
    article: {
      author: '',
      title: '',
      body: '',
    },
    renderLink: jest.fn(),
  };
  return shallow(<CommentContainerClass {...props} />);
}

describe('it renders the comment container component', () => {
  it('renders without error', () => {
    const wrapper = setup();
    const CommentContainerBox = wrapper.find("[data-test='CommentContainer']");
    expect(CommentContainerBox.length).toBe(1);
  });
});
