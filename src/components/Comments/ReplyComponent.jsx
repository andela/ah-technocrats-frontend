import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as fetchRepliesActions from '../../actions/getCommentsActions';
import * as replyActions from '../../actions/commentActions';

class ReplyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.formatReply = this.formatReply.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit() {
    const { actions, commentId, getReplies } = this.props;
    const url = window.location.href.split('/');
    const slug = url[url.length - 1];
    actions.postReply(this.formatReply(), slug, commentId).then(() => {
      actions.createCommentReset();
      getReplies.fetchCommentsRepliesRequest(slug, commentId);
      this.setState({ body: '' });
    });
  }

  formatReply() {
    const { body } = this.state;
    return { reply: { body } };
  }

  render() {
    const { body } = this.state;
    return (

      <form className="ui form commentTextBox">
        <div className="field">
          <textarea
            onChange={this.onChange}
            type="text"
            body="body"
            id="body"
            name="body"
            rows="2"
            value={body}
          />
        </div>
        {body.trim() !== '' ? (
          <button type="button" labelPosition="left" icon="edit" className="ui primary button" onClick={this.onSubmit}>
            <i className="edit icon" />
            Add Reply
            {' '}
          </button>
        ) : null}
      </form>
    );
  }
}

ReplyComponent.propTypes = {
  article: PropTypes.shape({}),
  actions: PropTypes.shape({}),
  getReplies: PropTypes.shape({}),
  commentId: PropTypes.string,
};

ReplyComponent.defaultProps = {
  article: null,
  actions: null,
  getReplies: null,
  commentId: null,
};

export function mapStateToProps(state, ownProps) {
  return {
    error: state.replyReducer.error,
    successMessage: state.replyReducer.message,
    loading: state.replyReducer.loading,
    ownProps,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(replyActions, dispatch),
    getReplies: bindActionCreators(fetchRepliesActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReplyComponent);
