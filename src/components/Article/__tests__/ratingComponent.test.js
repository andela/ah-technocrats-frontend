import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import rateArticleComponent from '../ratingArticleComponent';
import ViewSingleArticleComponent from '../ViewSingleArticleComponent';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// snapshot
describe('Rating article component', () => {
  const wrapper = shallow(<rateArticleComponent />);
  it('should match the snapshot of the component.', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
// mount
describe('Rating on ViewSingleArticle tests', () => {
  const getArticle = jest.fn();
  const store = mockStore({
    ratingReducer: {
      rating: 0,
    },
    likeReducer: {
      error: {},
    },
  });
  const article = {
    message: 'Article found.',
    article: {
      id: 12,
      title: 'Hello hello',
      description: 'Testing testing',
      body: 'Where do I start',
      author: {
        username: 'Mbishai',
        email: 'mbishai@gmail.com',
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
      article_slug: 'Hello hello',
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
        slug: 'hello hello',
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

  it('should render star actions', () => {
    expect(wrapper.find('#star').exists()).toBe(true);
  });

  it('calls the star component', () => {
    wrapper.find('StarRatingComponent#star').simulate('click');
  });
});
