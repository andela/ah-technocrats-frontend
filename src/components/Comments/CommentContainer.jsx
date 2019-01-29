import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SingleCommentComponent from './SingleCommentComponent';

export default class CommentContainer extends Component {
  render() {
    const { article, renderLink } = this.props;
    return (
      <div data-test="CommentContainer" className="ui space space-bottom comments">
        <h3 className="ui dividing header">Comments</h3>
        <SingleCommentComponent article={article} renderLink={renderLink} />
        <form className="ui reply form">
          <div className="field">
            <textarea />
          </div>
          <div className="ui green small labeled submit icon button">
            <i className="icon edit" />
            {' '}
              Add Reply
          </div>

        </form>
      </div>
    );
  }
}

CommentContainer.propTypes = {
  article: PropTypes.shape({}).isRequired,
  renderLink: PropTypes.func.isRequired,
};
