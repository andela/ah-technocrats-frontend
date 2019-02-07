import React from 'react';
import { shallow } from 'enzyme';
import { SingleComment } from '../SingleCommentComponent';


function setup() {
  const props = {
    article: {
      article: {
        author: { username: '' },
        title: '',
        body: '',
      },
    },
    comment: {
      author: '',
      body: '',
      avatar: '',
    },
    renderLink: jest.fn(),
    replies: {
      replies: [],
      parentId: '',
    },
  };
  
  return shallow(<SingleComment {...props} />);
}

describe('it renders the comment container component', () => {
  it('renders without error', () => {
    const wrapper = setup();
    const SingleCommentComponentBox = wrapper.find("[data-test='SingleCommentComponent']");
    expect(SingleCommentComponentBox.length).toBe(1);
  });
});
