import { connect } from 'react-redux';
import { forgotSubmitForm } from '../actions/forgotPassword';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';
import commonResetForgot from './commonResetForgot';

const mapStateToProps = state => commonResetForgot(state.forgotPassword);

const mapDispatchToProps = dispatch => (
  {
    forgotPasswordForm: email => (
      dispatch(forgotSubmitForm(email))
    ),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotPassword);
