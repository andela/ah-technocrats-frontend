import React from 'react';
import { shallow } from 'enzyme';
import { SearchResultsPage, mapStateToProps } from '../SearchResultsPage';
import SearchResultsComponent from '../SearchResultsComponent';


function setup() {
  const props = {
    results: [],
  };
  return shallow(<SearchResultsPage {...props} />);
}

describe('Search Results component', () => {
  it('renders without error', () => {
    const wrapper = setup();
    const searchBox = wrapper.find("[data-test='searchResultsComponent']");
    expect(searchBox.length).toBe(1);
  });

  it('renders search component without error', () => {
    const results = [{ title: 'title', author: 'author', article_slug: 'article-slug' }];
    const wrapper = shallow(<SearchResultsComponent noResults={false} results={results} />);
    const searchResults = wrapper.find("[data-test='searchResult']");
    expect(searchResults.length).toBe(1);
  });

  it('renders search no Results without error', () => {
    const wrapper = shallow(<SearchResultsComponent noResults results={[]} />);
    const noResults = wrapper.find("[data-test='noResults']");
    expect(noResults.length).toBe(1);
  });

  it('search map to props', () => {
    const ownProps = {};
    const state = {
      searchReducer: {
        results: [],
        keyWords: 'hello',
        loading: false,
        noResults: true,
      },
    };
    const expectedState = {
      results: [],
      keyWords: 'hello',
      loading: false,
      noResults: true,
      ownProps: {},
    };
    expect(mapStateToProps(state, ownProps)).toEqual(expectedState);
  });
});
