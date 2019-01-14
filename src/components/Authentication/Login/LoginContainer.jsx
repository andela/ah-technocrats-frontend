import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as loginActions from '../../../actions/loginActions';
import LoginComponent from './LoginComponent';
import './login.scss';


class LoginContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      email: '',
      password: '',
    };

    // binds the methods to the component instance
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const { actions } = this.props;
    actions.loginUser({
      user: { email, password },
    });
  }

  redirect() {
    const { router } = this.context;
    router.push('/articles');
  }

  render() {
    const { error, loading, success } = this.props;
    const loginError = Object.assign({}, error.error);
    return (
      <div>
        <LoginComponent
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          redirect={this.redirect}
          error={loginError}
          loading={loading}
          success={success}
        />
      </div>

    );
  }
}

LoginContainer.propTypes = {
  actions: PropTypes.shape().isRequired,
  error: PropTypes.shape().isRequired,
  success: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
};

LoginContainer.defaultProps = { success: null };

function mapStateToProps(state) {
  return {
    user: state.loginReducer,
    error: state.loginReducer,
    loading: state.loginReducer.loading,
    success: state.loginReducer.successfulMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
