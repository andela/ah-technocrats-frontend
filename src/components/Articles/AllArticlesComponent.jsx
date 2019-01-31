import React from 'react';
import { Container, Pagination } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';
import SingleArticleComponent from './SingleArticleComponent';

let number;

const AllArticlesComponent = ({
  articles, pagination, getNewPage,
}) => (
  <Container className="allArticles">
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
        <div className="small-space pagination-button">
          <div className="ui pagination menu ">
            <Pagination
              boundaryRange={0}
              defaultActivePage={1}
              ellipsisItem={null}
              firstItem={null}
              lastItem={null}
              siblingRange={1}
              onClick={(e) => {
                number = e.target.innerText;
                return getNewPage(e.target.innerText);
              }}
              totalPages={Math.ceil(pagination / 10)}
            />
          </div>
        </div>
        <div className="small-margin tagline">
          <span>
            {number}
            {' '}
        of
            {' '}
            {Math.ceil(pagination / 10)}
          </span>
        </div>

      </div>
      <div className="two wide column" />

    </div>
  </Container>
);
AllArticlesComponent.defaultProps = {
  pagination: null,
  getNewPage: null,
};

AllArticlesComponent.propTypes = {
  articles: PropTypes.shape().isRequired,
  pagination: PropTypes.number,
  getNewPage: PropTypes.shape({}),
};

export default AllArticlesComponent;
