import React from 'react';
import { shallow } from 'enzyme';
import CommentContainer from '../CommentContainer';


function setup() {
  const props = {
    article: {
      author: '',
      title: '',
      body: '',
    },
  };
  return shallow(<CommentContainer {...props} />);
}

describe('it renders the comment container component', () => {
  it('renders without error', () => {
    const wrapper = setup();
    const CommentContainerBox = wrapper.find("[data-test='CommentContainer']");
    expect(CommentContainerBox.length).toBe(1);
  });
});
