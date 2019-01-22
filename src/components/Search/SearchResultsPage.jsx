import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Segment, Sidebar, Loader } from 'semantic-ui-react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideBarMenu from '../Menu/Menu';
import SearchResultsComponent from './SearchResultsComponent';
import './Search.scss';


export class SearchResultsPage extends Component {
  render() {
    const {
      results, history, keyWords, loading, noResults,
    } = this.props;
    return (
      <React.Fragment>
        <Header history={history} />
        <Sidebar.Pushable as={Segment} attached="bottom">
          <SideBarMenu />
          <Sidebar.Pusher id="pusher" className="pusher-height">
            <div className="ui container searchResultsPage" data-test="searchResultsComponent">
              <h3 className="searchResultsTitle">
                Search Results for:
                &ldquo;
                {keyWords}
                &rdquo;
              </h3>
              {loading ? <Loader active indeterminate><b>Searching</b></Loader> : null}
              <SearchResultsComponent results={results} noResults={noResults} />
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        <Footer />
      </React.Fragment>
    );
  }
}

SearchResultsPage.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({})),
  keyWords: PropTypes.string,
  history: PropTypes.shape({}),
  noResults: PropTypes.bool,
  loading: PropTypes.bool,
};
SearchResultsPage.defaultProps = {
  keyWords: '',
  results: null,
  history: null,
  noResults: null,
  loading: null,
};

export const mapStateToProps = (state, ownProps) => (
  {
    results: state.searchReducer.results,
    keyWords: state.searchReducer.keyWords,
    loading: state.searchReducer.loading,
    noResults: state.searchReducer.noResults,
    ownProps,
  }
);

export default connect(mapStateToProps, null)(SearchResultsPage);
