import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Form,
  Button,
} from 'semantic-ui-react';
import * as commentsActions from '../../actions/commentActions';
import * as fetchRepliesActions from '../../actions/getCommentsActions';
import SingleCommentComponent from './SingleCommentComponent';
import './commentsStyles.scss';

export class CommentContainerClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      commentId: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.formatComment = this.formatComment.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit() {
    const { actions, getCommentsActions } = this.props;
    const url = window.location.href.split('/');
    const slug = url[url.length - 1];
    actions.postComment(this.formatComment(), slug).then(() => {
      getCommentsActions.fetchCommentsRequest(slug);
      this.setState({ body: '' });
    });
  }

  formatComment() {
    const { body } = this.state;
    return { comment: { body } };
  }

  render() {
    const {
      article, renderLink, comments, replies, getCommentsActions,
    } = this.props;
    const { body, commentId } = this.state;
    return (
      <div data-test="CommentContainer" className="ui space commentsContainer comments">
        <h3 className="ui dividing header">Comments</h3>
        {comments ? comments.map(comment => (
          <SingleCommentComponent
            commentId={commentId}
            key={comment.id}
            article={article}
            renderLink={renderLink}
            comment={comment}
            replies={replies}
            getCommentsActions={getCommentsActions}
          />
        )) : null }

        <Form comment className="commentTextBox">
          <Form.TextArea
            onChange={this.onChange}
            type="text"
            body="body"
            id="body"
            name="body"
            value={body}
          />
          { body ? <Button content="Add Comment" labelPosition="left" icon="edit" primary onClick={this.onSubmit} />
            : <Button disabled content="Add Comment" labelPosition="left" icon="edit" primary onClick={this.onSubmit} /> }
        </Form>
      </div>
    );
  }
}

export function mapStateToProps(state, ownProps) {
  return {
    error: state.commentReducer.error,
    successMessage: state.commentReducer.message,
    loading: state.commentReducer.loading,
    comments: state.getCommentsReducer.comments.comments,
    replies: state.getCommentsReducer.replies,
    ownProps,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(commentsActions, dispatch),
    getCommentsActions: bindActionCreators(fetchRepliesActions, dispatch),
  };
}

CommentContainerClass.propTypes = {
  article: PropTypes.shape({}).isRequired,
  renderLink: PropTypes.func.isRequired,
  actions: PropTypes.shape({}),
  comments: PropTypes.arrayOf(PropTypes.shape({})),
  replies: PropTypes.shape({}),
  getCommentsActions: PropTypes.shape({}),
};

CommentContainerClass.defaultProps = {
  actions: null,
  comments: null,
  replies: null,
  getCommentsActions: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainerClass);
