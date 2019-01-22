import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchResultsComponent = ({ results, noResults }) => (
  <div>
    <div className="ui searchResults items">
      { results
        ? results.map(result => (
          <div key={result.article_slug} data-test="searchResult" className="ui searchResult item">
            <div className="ui small image">
              <img className="searchResultImage" src={result.image || 'https://i1.wp.com/thefrontline.org.uk/wp-content/uploads/2018/10/placeholder.jpg?ssl=1'} alt={result.image} />
            </div>
            <div className=" content">
              <div className="header">
                <Link to={`/articles/${result.article_slug}`}>{result.title}</Link>
              </div>
              <div className="meta">
                <span>{result.description}</span>
              </div>
              <div className="meta">
                             Written By:
                {' '}
                <b>{result.author.username}</b>
              </div>
            </div>

          </div>
        ))
        : null
         }
      { noResults
        ? (
          <div className="ui item">
            <div data-test="noResults" className="content">
              <div className="header">No results Found.</div>
            </div>
          </div>
        )
        : null
         }
    </div>
  </div>
);

SearchResultsComponent.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({})),
  noResults: PropTypes.bool,
};

SearchResultsComponent.defaultProps = {
  results: null,
  noResults: null,
};


export default SearchResultsComponent;
