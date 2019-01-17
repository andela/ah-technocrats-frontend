import React from 'react';
import { Container } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';
import SingleArticleComponent from './SingleArticleComponent';

const AllArticlesComponent = ({ articles }) => (
  <Container>
    <div className="space">
      <div className="ui header medium">
        Latest Articles
      </div>
    </div>
    <div className="ui grid">
      <div className="twelve wide column">
        <div className="space">
          <div className="ui divided items">
            {articles.map(article => (
              <SingleArticleComponent key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
      <div className="two wide column" />
    </div>
  </Container>
);

AllArticlesComponent.propTypes = {
  articles: PropTypes.shape().isRequired,
};

export default AllArticlesComponent;
