import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SingleCommentComponent extends Component {
  render() {
    const { article, renderLink } = this.props;
    return (
      <div data-test="SingleCommentComponent" className="comment">
        {renderLink('avatar',
          <img src="https://semantic-ui.com/images/avatar/large/joe.jpg" alt="" />,
          `/profile/${article.article.author.username}`)}
        <div className="content">
          {renderLink('author', 'Joe Henderson',
            `/profile/${article.article.author.username}`)}
          <div className="metadata">
            <span className="date">5 days ago</span>
          </div>
          <div className="text">
              Dude, this is awesome. Thanks so much (
            {renderLink('ui red text',
              'Edited',
              `/profile/${article.article.author.username}`)}
              ) &nbsp;&nbsp;&nbsp;
            {renderLink('',
              'Edit',
              `/profile/${article.article.author.username}`)}
          </div>
          <div className="actions">
            {renderLink('reply',
              'Reply',
              `/profile/${article.article.author.username}`)}
          </div>
        </div>
      </div>
    );
  }
}

SingleCommentComponent.propTypes = {
  article: PropTypes.shape({}),
  renderLink: PropTypes.func,
};

SingleCommentComponent.defaultProps = {
  article: null,
  renderLink: null,
};
