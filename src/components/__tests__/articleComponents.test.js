import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { ArticleContainer } from '../Articles/ArticlesContainer';
import SingleArticleComponent from '../Articles/SingleArticleComponent';
import AllArticlesComponent from '../Articles/AllArticlesComponent';

Enzyme.configure({ adapter: new Adapter() });

const article = {
  id: 1,
  title: 'How to train your dragon3',
  description: 'Ever wonder how?',
  body: 'You have to believe',
  author: {
    username: 'Jacob',
    email: 'jake@jake.jake',
    created_at: '2019-01-16T11:22:08.569092Z',
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
  rating: 0,
  image: '',
  article_slug: 'how-to-train-your-dragon3',
  created_at: '2019-01-16T11:22:39.439567Z',
  updated_at: '2019-01-16T11:22:39.439615Z',
  favorite: [],
};

describe('<AllItemsComponent />', () => {
  it('should match the snapshot of all articles component', () => {
    const articlesMock = [{}];
    const wrapper = shallow(<AllArticlesComponent articles={articlesMock} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<ArticleContainer />', () => {
  it('should match the snapshot of the container', () => {
    const wrapper = shallow(<ArticleContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<SingleArticleComponent />', () => {
  it('should match the snapshot of a single article component', () => {
    const wrapper = shallow(<SingleArticleComponent article={article} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('All articles', () => {
  const props = {
    articles: [],
  };

  it('Renders articles', () => {
    const articlesMock = [{}];
    const wrapper = shallow(<AllArticlesComponent articles={articlesMock} />);
    expect(wrapper.find('.ui divided items')).toBeDefined();
  });

  it('Articles container', () => {
    const wrapper = shallow(<ArticleContainer {...props} />);
    expect(wrapper.find('.pusher-height')).toBeDefined();
  });

  it('Single Article component', () => {
    const wrapper = shallow(<SingleArticleComponent article={article} />);
    expect(wrapper.find('.item')).toBeDefined();
  });
});
