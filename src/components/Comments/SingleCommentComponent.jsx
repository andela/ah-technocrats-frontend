import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import ReplyComponent from './ReplyComponent';
import EditCommentComponent from './EditCommentComponent';
import * as editCommentActions from '../../actions/editCommentsActions';
import * as commentActions from '../../actions/commentActions';
import { formatDates } from '../Articles/SingleArticleComponent';
import EditReplyComponent from './EditReplyComponent';


export class SingleComment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.showReplies = this.showReplies.bind(this);
    this.renderReplies = this.renderReplies.bind(this);
  }


  onDelete(commentId) {
    const { actions } = this.props;
    const url = window.location.href.split('/');
    const slug = url[url.length - 1];
    actions.deleteComment(slug, commentId);
  }


  showReplies(commentId) {
    const { article, getCommentsActions } = this.props;
    getCommentsActions.fetchCommentsRepliesRequest(article.article.article_slug, commentId);
  }

  toggleReply() {
    const { showTextArea, showCommentEdit } = this.state;
    if (showCommentEdit) {
      this.setState({ showCommentEdit: false });
    }
    this.setState({ showTextArea: !showTextArea });
  }

  toggleEdit() {
    const { showCommentEdit, showTextArea } = this.state;
    if (showTextArea) {
      this.setState({ showTextArea: false });
    }
    this.setState({ showCommentEdit: !showCommentEdit });
  }

  toggleEditReply(id) {
    const { showCommentEditReply, showCommentEdit } = this.state;
    if (showCommentEdit) {
      this.setState({ showCommentEdit: false });
    }
    this.setState({ showCommentEditReply: !showCommentEditReply, replyId: id });
  }


  renderReplies(replies, renderLink, showCommentEditReply, commentId) {
    const { replyId } = this.state;
    return replies.replies.map(reply => (
      <div>
        <div className="comment">
          {renderLink('avatar',
            <img src={reply.author.avatar} alt="" />,
            `/profile/${reply.author.username}`)}
          <div className="content">
            {renderLink('author', reply.author.username,
              `/profile/${reply.author.username}`)}
            <div className="metadata">
              <span className="date">{formatDates(reply.created_at)}</span>
            </div>
            <div className="text">
              {reply.body}
            </div>
            { Cookies.get('username') === reply.author.username
              ? (
                <span>
                  <button type="button" className="actions editButton" onClick={() => this.toggleEditReply(reply.id)}>
            Edit
                  </button>
                  <button type="button" className="actions deleteButton">
            Delete
                  </button>
                </span>
              )
              : null
        }
          </div>
          { showCommentEditReply && reply.id === replyId
            ? (
              <EditReplyComponent
                commentId={commentId}
                replyId={reply.id}
                showCommentEditReply={showCommentEditReply}
                commentBody={reply.body}
              />
            )
            : null}
        </div>
      </div>
    ));
  }

  render() {
    const { renderLink, comment, replies } = this.props;
    const { showTextArea, showCommentEdit, showCommentEditReply } = this.state;
    return (
      <div data-test="SingleCommentComponent" className="comment">
        {renderLink('avatar',
          <img src={comment.author.avatar} alt="" />,
          `/profile/${comment.author.username}`)}
        <div className="content">
          {renderLink('author', comment.author.username,
            `/profile/${comment.author.username}`)}
          <div className="metadata">
            <span className="date">{formatDates(comment.created_at)}</span>
          </div>
          <div className="text">
            {comment.body}
            {' '}
            { Cookies.get('username') === comment.author.username ? (
              <span>
                <button type="button" className="editButton" onClick={() => this.toggleEdit(comment.id)}>
          Edit
                </button>
                <button type="button" className="deleteButton">
          Delete
                </button>
              </span>
            ) : null
          }
          </div>
          <div className="actions">
            <button type="button" className="commentButton" onClick={() => this.showReplies(comment.id)}>View Replies</button>
            <button type="button" className="commentButton" onClick={() => this.toggleReply()}>
              {' '}
              {!showTextArea ? 'Reply' : 'Hide'}
              {' '}
            </button>
          </div>
          {showTextArea
            ? (
              <ReplyComponent
                commentId={comment.id}
                showTextArea={false}
              />
            ) : null}
          {showCommentEdit
            ? (
              <EditCommentComponent
                commentId={comment.id}
                showCommentEdit={false}
                commentBody={comment.body}
              />
            ) : null}
          {comment.id === replies.parentId
            ? this.renderReplies(replies, renderLink, showCommentEditReply, comment.id) : null }
        </div>
      </div>
    );
  }
}

SingleComment.propTypes = {
  actions: PropTypes.shape({}),
  article: PropTypes.shape({}),
  renderLink: PropTypes.func,
  comment: PropTypes.shape({}),
  replies: PropTypes.shape({}),
  getCommentsActions: PropTypes.shape({}),
};

SingleComment.defaultProps = {
  actions: null,
  article: null,
  renderLink: null,
  comment: null,
  replies: null,
  getCommentsActions: null,
};

const mapStateToProps = (state, ownProps) => ({
  replies: state.getCommentsReducer.replies,
  ownProps,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(commentActions, dispatch),
  editCommentsActions: bindActionCreators(editCommentActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleComment);
