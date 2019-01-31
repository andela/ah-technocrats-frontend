import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import UserSpecificArticleComponent from '../Articles/UserSpecificArticleComponent';

Enzyme.configure({
  adapter: new Adapter(),
});


let mountWrapper;
const props = {
  title: 'article title',
  description: 'article description',
  author: 'verencelola',
  created_at: '2019-01-24T09:54:44.181585Z',
  article_slug: 'hello',
  modalOpen: false,
  openModal: jest.fn(),
  onDelete: jest.fn(),
  image: 'image url',
  name: 'verencelola',
  setName: jest.fn(),
};
describe('UserSpecifc Component', () => {
  beforeEach(() => {
    mountWrapper = mount(
      <UserSpecificArticleComponent {...props} />,
    );
  });
  describe('it should render correctly', () => {
    it('should render itself and children correctly', () => {
      expect(mountWrapper.exists()).toEqual(true);
      expect(mountWrapper).toMatchSnapshot();
    });
    it('opens the modal when delete clicked', () => {
      const deleteIcon = mountWrapper.find('#open-modal');
      deleteIcon.at(0).simulate('click');
      expect(props.openModal).toHaveBeenCalled();
    });
    it('deletes articles when clicked', () => {
      const deleteIcon = mountWrapper.find('#open-modal');
      deleteIcon.at(0).simulate('click');
      const confirmDelete = mountWrapper.find('Button');
      expect(confirmDelete).toBeDefined();
    });
  });
});
