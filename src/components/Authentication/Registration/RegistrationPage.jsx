import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RegistrationForm from './RegistrationForm';
import * as registrationActions from '../../../actions/registrationActions';


export class RegistrationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.formatUserData = this.formatUserData.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit() {
    const { actions } = this.props;
    if (actions.registerUser) {
      actions.registerUser(this.formatUserData());
    }
  }

  formatUserData() {
    const { username, email, password } = this.state;
    return { user: { username, email, password } };
  }

  render() {
    const { error, successMessage, loading } = this.props;
    const errorMessages = Object.assign({}, error);
    const { password, repeatPassword } = this.state;
    const toastOptions = {
      type: 'success',
      icon: 'check',
      title: 'Registration Successful',
      description: successMessage,
      time: 3000,
      // eslint-disable-next-line no-return-assign
      onClose: () => window.location = '/login',
    };

    return (
      <div>
        <RegistrationForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          error={errorMessages}
          successMessage={successMessage}
          loading={loading}
          password={password}
          repeatPassword={repeatPassword}
          toastOptions={toastOptions}
        />
      </div>
    );
  }
}

export function mapStateToProps(state, ownProps) {
  return {
    error: state.registrationReducer.error,
    successMessage: state.registrationReducer.message,
    loading: state.registrationReducer.loading,
    redirect: state.registrationReducer.redirect,
    ownProps,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(registrationActions, dispatch),
  };
}

RegistrationPage.propTypes = {
  error: PropTypes.shape({}),
  successMessage: PropTypes.string,
  actions: PropTypes.shape({}),
  loading: PropTypes.bool,
};

RegistrationPage.defaultProps = {
  error: null,
  successMessage: null,
  actions: null,
  loading: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
