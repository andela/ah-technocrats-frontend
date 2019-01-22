import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import CreateArticleFormContainer from '../CreateArticleFormContainer';
import CreateArticleForm from '../CreateArticleFormComponent';

Enzyme.configure({ adapter: new Adapter() });
const middleWares = [thunk];
const mockStore = configureStore(middleWares);
let mountWrapper;
let mountWrapperContainer;

global.document = {
  documentElement: {
    classList: { add: jest.fn() },
  },
  getElementByClassname: jest.fn({id:'mde'}),
};

describe('Article creation form component/>', () => {
  const wrapper = shallow(<CreateArticleForm />);
  it('should match the snapshot new article creation form', () => { 
    expect(wrapper).toMatchSnapshot();
  });
  it('should find class pusher-height', () => { 
    expect(wrapper.find('.pusher-height')).toBeDefined();
  });
  it('should find SimpleMDE', () => { 
    expect(wrapper.find('SimpleMDE')).toBeDefined();
  });
});

describe('Article creation form container/>', () => {
  const wrapper = shallow(<CreateArticleFormContainer />);
  it('should match the snapshot new article creation form', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should find the react component.', () => {
    expect(wrapper.find('React.Fragment')).toBeDefined();
  });
  it('should find the editor', () => {
    expect(wrapper.find('SimpleMDE')).toBeDefined();
  });
});

describe('create article container', () => {
  beforeEach(() => {
    const store = mockStore({
      articles: {
        items: [],
        item: {},
        createSuccess: false,
      },
    });
    mountWrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <CreateArticleFormContainer />
        </Provider>
      </BrowserRouter>,
    );
    mountWrapperContainer = mount(
      <CreateArticleFormContainer />,
    );
  });
  global.document = {
    getElementsByClassName: document.getElementsByClassName,
  };
});
