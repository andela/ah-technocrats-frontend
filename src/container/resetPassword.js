import { connect } from 'react-redux';
import { resetSubmitForm } from '../actions/resetPassword';
import ResetPasswordComponent from '../components/ResetPassword/ResetPasswordComponent';
import commonResetForgot from './commonResetForgot';

const mapStateToProps = state => commonResetForgot(state.resetPassword);

const mapDispatchToProps = dispatch => (
  {
    resetPasswordForm: (newPass, token) => (
      dispatch(resetSubmitForm(newPass, token))
    ),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResetPasswordComponent);
