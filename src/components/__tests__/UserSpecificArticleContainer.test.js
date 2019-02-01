import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import UserSpecificArticlesContainer from '../Articles/UserSpecificArticlesContainer';

Enzyme.configure({
  adapter: new Adapter(),
});

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

let shallowWrapper;
let mountWrapper;
describe('UserSpecifc Container', () => {
  beforeEach(() => {
    shallowWrapper = shallow(<UserSpecificArticlesContainer />);
    const store = mockStore({
      ownArticles: {
        articles: [],
        deleteSuccessful: {},
        deleteFailed: {},
        fetchOwnArticlesFailed: false,
      },
      updateArticlesReducer: {
        updated: {},
      },
    });

    const props = {
      fetchArticles: jest.fn(),
      onDelete: jest.fn(),
      updated: {
      },
    };
    mountWrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <UserSpecificArticlesContainer {...props} />
        </Provider>
      </BrowserRouter>,
    );
  });
  describe('it should render correctly', () => {
    it('should render itself and children correctly', () => {
      expect(shallowWrapper.exists()).toEqual(true);
    });
  });
});
