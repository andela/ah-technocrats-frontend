import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import ViewSingleArticleComponent from '../ViewSingleArticleComponent';

Enzyme.configure({ adapter: new Adapter() });


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('ViewSingleArticle  tests', () => {
  const getArticle = () => new Promise(resolve => {});
  const store = mockStore({
    likeReducer: {
      loading: false,
      successfulMessage: null,
    },
    ratingReducer: {},
    commentReducer: {
      error: '',
    },
    getCommentsReducer: {
      comments: { comments: [] },
    },
  });
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
      image: 'goodimage',
      article_slug: 'a-must-read-article-that-could-be-about-anything-really',
      created_at: '2019-01-24T10:15:01.767746Z',
      updated_at: '2019-01-24T10:15:01.767804Z',
      favorite: [],
      read_time: 1,
    },
  };
  const success = true;
  const props = {
    match: {
      params: {
        slug: 'hey',
      },
    },
    article,
    getArticle,
    success,
    
  };
  const wrapper = mount(
    <BrowserRouter>
      <Provider store={store}>
        <ViewSingleArticleComponent {...props} />
      </Provider>
    </BrowserRouter>,
  );

  it('should render like and dislike buttons correctly', () => {
    expect(wrapper.find('#like').exists()).toBe(true);
  });
  it('should render like and dislike buttons correctly', () => {
    expect(wrapper.find('#dislike').exists()).toBe(true);
  });

  it('calls like button', () => {
    wrapper.find('button#like').simulate('click');
  });
  it('calls dislike button', () => {
    wrapper.find('button#dislike').simulate('click');
  });
});
