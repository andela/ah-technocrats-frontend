import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';


const formatDates = (date) => {
  const dateFormat = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
  };
  const formattedDate = new Date(date).toLocaleDateString('en-US', dateFormat);
  return formattedDate;
};
const SingleArticleComponent = ({ article }) => (
  <div className="item" key={article.id}>
    <div className="image">
      <img src="https://placeimg.com/640/480/nature" alt="andela" />
    </div>
    <div className="top aligned content">
      {/* to="article.htm" to be replaced with link to single
        article after its implementation */}
      <Link className="header" to={`/articles/${article.article_slug}`}>{article.title}</Link>
      <div className="excerpt">
        {article.description}
        <br />
      </div>
      <div className="small-margin tagline">
        <span className="date">{formatDates(article.created_at)}</span>
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
