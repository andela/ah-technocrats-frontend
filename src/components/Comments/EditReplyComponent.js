import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as fetchComments from '../../actions/getCommentsActions';
import * as editActions from '../../actions/editCommentsActions';

class EditReplyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.formatReply = this.formatReply.bind(this);
    this.input = React.createRef();
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit() {
    const {
      actions, commentId, getComments, replyId,
    } = this.props;
    const url = window.location.href.split('/');
    const slug = url[url.length - 1];
    actions.editReply(this.formatReply(), slug, commentId, replyId).then(() => {
      actions.editCommentReset();
      getComments.fetchCommentsRepliesRequest(slug, commentId);
      this.setState({ body: '' });
    });
  }

  formatReply() {
    return { reply: { body: this.input.current.value } };
  }

  render() {
    const { body } = this.state;
    const { commentBody } = this.props;
    return (

      <form className="ui form commentTextBox">
        <div className="field">
          <textarea
            onChange={this.onChange}
            type="text"
            body="body"
            id="body"
            defaultValue={commentBody}
            name="body"
            rows="2"
            ref={this.input}
          />
        </div>
        {body
          ? (
            <button type="button" labelPosition="left" icon="edit" className="ui primary button" onClick={this.onSubmit}>
              <i className="edit icon" />
            Edit Comment
              {' '}
            </button>
          ) : null}
      </form>

    );
  }
}

EditReplyComponent.propTypes = {
  actions: PropTypes.shape({}),
  article: PropTypes.shape({}),
  commentBody: PropTypes.string,
  commentId: PropTypes.string,
  getComments: PropTypes.shape({}),
  replyId: PropTypes.string,

};

EditReplyComponent.defaultProps = {
  actions: null,
  article: null,
  commentBody: null,
  commentId: null,
  getComments: null,
  replyId: null,
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
    actions: bindActionCreators(editActions, dispatch),
    getComments: bindActionCreators(fetchComments, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditReplyComponent);