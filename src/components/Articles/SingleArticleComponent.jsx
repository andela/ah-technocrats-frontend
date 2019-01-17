import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const SingleArticleComponent = ({ article }) => (
  <div className="item" key={article.id}>
    <div className="image">
      <img src="https://placeimg.com/640/480/nature" alt="andela" />
    </div>
    <div className="top aligned content">
      {/* to="article.htm" to be replaced with link to single
        article after its implementation */}
      <Link className="header" to="article.html">{article.title}</Link>
      <div className="excerpt">
        {article.description}
        <br />
        {article.body}
      </div>
      <div className="small-margin tagline">
        <span className="date">{article.created_at}</span>
      </div>
      <div className="tagline">
        <span className="date">
            By:
          {article.author.username}
        </span>
      </div>
    </div>
  </div>
);

SingleArticleComponent.propTypes = {
  article: PropTypes.shape().isRequired,
};

export default SingleArticleComponent;
