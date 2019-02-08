import React, { Component } from 'react';
import { Button, Input, Form } from 'semantic-ui-react';
import propTypes from 'prop-types';
import './forgotpassword.scss';
import logo from './ah_square.svg';
import commonResetForgot from '../CommonResetForgot/CommonResetForgot';

class ForgotPassword extends Component {
    state = {
      error: null,
    };
    static propTypes = {
       forgotPasswordForm: propTypes.func.isRequired,
       reason: propTypes.string.isRequired,
       processing: propTypes.bool.isRequired,
       message: propTypes.bool.isRequired,
    };
    sendMail = () => {
      const { forgotPasswordForm } = this.props;
      const email = document.getElementById('email').value;
      if (this.checkChange()) {
        return;
      }
      forgotPasswordForm(email);
    };

    checkChange = () => {
      const email = document.getElementById('email').value;
      if (email === '') {
        this.setState({ error: 'This field cannot be blank' });
        return true;
      }
      this.setState({ error: null });
      return false;
    };

    renderSuccess = () => (
      <div className="ui positive message">
        <i className="close icon" />
        <div className="header">
                    Reset request success
        </div>
        <p>
Go to your
          <b>email</b>
                  and click on the reset link to reset you password
        </p>
      </div>
    );

    renderForm(reason, processing, message, error) {
      return (
        <Form className="center ui form" onSubmit={e => e.preventDefault()}>
          <p><b>Please Enter your email address to get a link to reset your password.</b></p>
          {message ? this.renderSuccess() : ''}
          {commonResetForgot(error, reason)}
          {this.renderInputField()}
          {processing ? (
            <Button
              content="Sending link..."
              className="ui fluid blue button"
              disabled
            />
          )
            : (
              <Button
                positive
                content="Submit"
                onClick={this.sendMail}
                className="ui fluid green button"
              />
            )}
          <div className="space" />
        </Form>
      );
    }

    renderInputField() {
      return (
        <div className="field">
          <Input
            placeholder="Your Email"
            type="email"
            id="email"
            onChange={this.checkChange}
          />
        </div>
      );
    }

    render() {
      const { reason, processing, message } = this.props;
      const { error } = this.state;
      return (
        <div className="ui container top-margin">
          <div className="ui segment">
            <div className="ui grid column">
              <img className="image-login" src={logo} alt="Logo" />
            </div>
            <div className="ui">
              <div className="ui two column very centered relaxed stackable grid">
                {this.renderForm(reason, processing, message, error)}
              </div>
            </div>
          </div>
        </div>
      );
    }
}


export default ForgotPassword;
