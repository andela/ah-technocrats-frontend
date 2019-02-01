import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from '../../store/storeConfiguration';

import ViewSingleArticleComponent from '../Article/ViewSingleArticleComponent';

Enzyme.configure({ adapter: new Adapter() });


const article = {
  message: 'Article found.',
  article: {
    id: 12,
    title: 'A must read article that could be about anything, really.',
    description: 'Description of my life in the music band of wannabe',
    body: 'Sometimes in life things come somelife someday and sometimes they never seem to',
    author: {
      username: 'silaskenny',
      email: 'silaskenn@gmail.com',
      created_at: '2019-01-24T10:01:20.335672Z',
      bio: '',
      country: '',
      avatar: 'https://libertv.com/wp-content/uploads/2018/03/user-avatar-placeholder-1.png',
      phone: '',
      website: '',
    },
    tags: [],
    like: {
      likeCount: 0,
    },
    dislike: {
      dislikeCount: 0,
    },
    rating: {
      average: 0,
      distributions: {},
    },
    image: '',
    article_slug: 'a-must-read-article-that-could-be-about-anything-really',
    created_at: '2019-01-24T10:15:01.767746Z',
    updated_at: '2019-01-24T10:15:01.767804Z',
    favorite: [],
    read_time: 1,
  },
};

const getArticle = (args) => ({});
const success = true;
const fakeProps = {
  match: {
    params: {
      slug: 'Google was once here',
    },
  },
  article,
  getArticle,
  success,
};


describe('All articles', () => {
  it('Article container', () => {
    expect(typeof configureStore).toBe('object');
    const wrapper = shallow(<ViewSingleArticleComponent {...fakeProps} />);
    expect(wrapper.find('.share-button')).toBeDefined();
  });

  it('Single Article', () => {
    const wrapper = shallow(<ViewSingleArticleComponent {...fakeProps} />);
    expect(wrapper.find('.share-button')).toBeDefined();
  });
  it('Single Article no success', () => {
    const props = { ...fakeProps, success: false };
    const wrapper = shallow(<ViewSingleArticleComponent {...props} />);
    expect(wrapper.find('.share-button')).toBeDefined();
  });
  it('Single Article processing and no success', () => {
    const props = {
 ...fakeProps, reason: '', processing: true, success: false
 };
    const wrapper = shallow(<ViewSingleArticleComponent {...props} />);
    expect(wrapper.find('.share-button')).toBeDefined();
  });
  it('Single Article processing and no success with image', () => {
    const article = {
      message: 'Article found.',
      article: {
        id: 12,
        title: 'A must read article that could be about anything, really.',
        description: 'Description of my life in the music band of wannabe',
        body: 'Sometimes in life things come somelife someday and sometimes they never seem to',
        author: {
          username: 'silaskenny',
          email: 'silaskenn@gmail.com',
          created_at: '2019-01-24T10:01:20.335672Z',
          bio: '',
          country: '',
          avatar: 'https://libertv.com/wp-content/uploads/2018/03/user-avatar-placeholder-1.png',
          phone: '',
          website: '',
        },
        tags: [],
        like: {
          likeCount: 0,
        },
        dislike: {
          dislikeCount: 0,
        },
        rating: {
          average: 0,
          distributions: {},
        },
        image: 'google.png',
        article_slug: 'a-must-read-article-that-could-be-about-anything-really',
        created_at: '2019-01-24T10:15:01.767746Z',
        updated_at: '2019-01-24T10:15:01.767804Z',
        favorite: [],
        read_time: 1,
      },
    };
    const props = { ...fakeProps, article };
    const wrapper = shallow(<ViewSingleArticleComponent {...props} />);
    expect(wrapper.find('.share-button')).toBeDefined();
  });
});
