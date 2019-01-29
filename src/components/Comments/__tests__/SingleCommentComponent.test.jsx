import React from 'react';
import { shallow } from 'enzyme';
import SingleCommentComponent from '../SingleCommentComponent';


function setup() {
  const props = {
    article: {
      article: {
        author: { username: ''},
        title: '',
        body: '',
      },

    },

    renderLink: jest.fn(),

  };
  return shallow(<SingleCommentComponent {...props} />);
}

describe('it renders the comment container component', () => {
  it('renders without error', () => {
    const wrapper = setup();
    const SingleCommentComponentBox = wrapper.find("[data-test='SingleCommentComponent']");
    expect(SingleCommentComponentBox.length).toBe(1);
  });
});
