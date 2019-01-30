import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Form,
  Button,
} from 'semantic-ui-react';
import { toast } from 'react-semantic-toasts';
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
      actions.createCommentReset();
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
      article, renderLink, comments, replies,
      getCommentsActions, createCommentFail, editCommentFail, history,
    } = this.props;
    const { body, commentId } = this.state;
    return (
      <div data-test="CommentContainer" className="ui space commentsContainer comments">
        { createCommentFail || editCommentFail
          ? toast({
            type: 'warning',
            icon: 'sign-in',
            title: 'Session Expired.',
            time: 0,
            description: 'Please Login to Continue.',
            onClose: () => history.push('/login'),
          })
          : null }
        <h3 className="ui dividing header">Comments</h3>
        <Form comment className="commentTextBox" data-test="commentForm">
          <Form.TextArea
            onChange={this.onChange}
            type="text"
            body="body"
            id="body"
            name="body"
            value={body}
          />
          {body.trim() !== '' ? <Button content="Add Comment" labelPosition="left" data-test="commentDisabledButton" icon="edit" primary onClick={this.onSubmit} />
            : <Button disabled content="Add Comment" labelPosition="left" icon="edit" data-test="commentButton" primary onClick={this.onSubmit} /> }
        </Form>
        {comments ? comments.map(comment => (
          <SingleCommentComponent
            data-test="SingleComment"
            commentId={commentId}
            key={comment.id}
            article={article}
            renderLink={renderLink}
            comment={comment}
            replies={replies}
            getCommentsActions={getCommentsActions}
            comments={comments}
          />
        )) : null }
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
    createCommentFail: state.commentReducer.error,
    editCommentFail: state.editCommentReducer.error,
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
  createCommentFail: PropTypes.shape({}),
  history: PropTypes.shape({}),
  editCommentFail: PropTypes.shape({}),
};

CommentContainerClass.defaultProps = {
  actions: null,
  comments: null,
  replies: null,
  getCommentsActions: null,
  createCommentFail: null,
  history: null,
  editCommentFail: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainerClass);
