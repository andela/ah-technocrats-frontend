import React, { Component } from 'react';
import { Input, Button, Form } from 'semantic-ui-react';
import { SemanticToastContainer, toast } from 'react-semantic-toasts';
import propTypes from 'prop-types';
import logoSquare from './ah_square.svg';
import './resetpassword.scss';
import commonResetForgot from '../CommonResetForgot/CommonResetForgot';
/* eslint-disable jsx-a11y/label-has-for */
class ResetPasswordComponent extends Component {
    state = {
      error_no_match: null,
      error_empty_confirm: null,
      error_empty_new: null,
      invalid_form: true,
    };

    getFields() {
      const field1 = {
        caption: 'Enter New Password:',
        func: this.checkNewPassword,
        id: 'new',
        placeholder: 'Password',
      };
      const field2 = {
        caption: 'Confirm Password',
        func: this.checkConfirm,
        id: 'confirm_new',
        placeholder: 'Confirm Password',
      };
      return { field1, field2 };
    }

    checkNewPassword = () => {
      this.checkNewPasswordEmpty();
      this.checkChanged();
    };

    checkConfirm = () => {
      this.checkEmptyConfirm();
      this.checkChanged();
    };

    checkChanged =() => {
      this.setState({ reason: null });
      const field = document.getElementById('new').value;
      const confField = document.getElementById('confirm_new').value;
      if (confField === '') {
        return;
      }
      if (confField !== field) {
        this.setState({ error_no_match: 'The password and the confirm MUST match' });
      } else {
        this.setState({ error_no_match: null });
      }
      if (this.invalidForm()) {
        return;
      }
      this.setState({ invalid_form: null });
    };

    invalidForm = () => {
      const element0 = document.getElementById('new');
      const element1 = document.getElementById('confirm_new');
      const field = element0 ? element0.value : '';
      const confField = element1 ? element1.value : '';
      if ((field === '') || (confField === '')) {
        this.setState({ invalid_form: true });
        return true;
      }
      if (field !== confField) {
        this.setState({ invalid_form: true });
        return true;
      }
      this.setState({ invalid_form: null });
      return false;
    };

    checkNewPasswordEmpty = () => {
      this.checkEmptyCommon('new');
      // const empty = this.checkEmptyCommon('new');
      // if(empty){
      //     return;
      // }
      if (this.invalidForm()) {
        return;
      }
      this.setState({ invalid_form: null });
    };

    checkEmptyConfirm = () => {
      this.checkEmptyCommon('confirm_new');
      if (this.invalidForm()) {
        return;
      }
      this.setState({ invalid_form: null });
    };

    sendChange =() => {
      const newPass = document.getElementById('new').value;
      const { resetPasswordForm } = this.props;
      const token = new URL(window.location).search.replace('?token=', '');
      resetPasswordForm(newPass, token);
    };

    checkEmptyCommon = (field) => {
      const fielder = document.getElementById(field).value;
      let invalid = false;
      const invalidMessage = 'This field may not be blank';
      const emptyConf = [{ error_empty_confirm: invalidMessage }, { error_empty_confirm: null }];
      const emptyNew = [{ error_empty_new: invalidMessage }, { error_empty_new: null }];
      const empties = [emptyConf, emptyNew];
      if (fielder === '') {
        invalid = true;
      }
      let state = {};
      if (invalid) {
        state = empties[(field === 'new') ? 1 : 0][(fielder !== '') ? 1 : 0];
        this.setState(state);
        return true;
      }
      state = empties[(field === 'new') ? 1 : 0][(fielder !== '') ? 1 : 0];
      this.setState(state);
      return invalid;
    };

    renderField = (errorEmpty, reason, others) => {
      const {
        caption, func, id, placeholder,
      } = others;
      return (
        <div className="field">
          <label htmlFor={id} className="form-label" id={`${id}-label`}>{caption}</label>
          <Input
            id={id}
            placeholder={placeholder}
            type="password"
            onChange={func}
          />
          <br />
          {commonResetForgot(errorEmpty, reason)}
        </div>
      );
    };

    renderToast = message => (message ? toast({
      type: 'success',
      icon: 'check circle',
      description: `The password was successfully changed.
                      you'll be redirected to the login shortly.`,
      time: 3000,
      onClose: () => {
        window.location = '/login';
      },
    }) : '');

    renderGrid = logo => (
      <div className="ui grid column">
        <SemanticToastContainer position="top-left" />
        <img className="image-login" src={logo} alt="Logo" />
      </div>
    );

    renderBottom(args) {
      if (args.invalid_form) {
        return (
          <Button
            content="Submit"
            className="ui fluid green button"
            disabled
          />
        );
      }
      return args.processing ? (
        <Button
          content="Request processing..."
          className="ui fluid green button positive"
          onClick={this.sendChange}
          disabled
        />
      ) : (
        <Button
          content="Submit"
          className="ui fluid green button positive"
          onClick={this.sendChange}
          onSubmit={this.sendChange}
        />
      );
    }

    renderForm(args) {
      return (
        <Form className="ui left aligned form" onSubmit={e => e.preventDefault()}>
          {this.renderToast(args.message)}
          <p><b>Please fill the form below to change your password.</b></p>
          {this.renderField(args.error_empty_new, args.reason, args.field1)}
          {this.renderField(args.error_empty_confirm,
            args.error_no_match,
            args.field2)}
          {this.renderBottom(args)}
          <div className="space" />
        </Form>
      );
    }

    render() {
      const args = Object.assign({}, this.state, this.props, this.getFields());
      return (
        <div className="ui container top-margin">
          <div className="ui segment">
            {this.renderGrid(logoSquare)}
            <div className="ui">
              <div className="ui two column very centered relaxed stackable grid">
                {this.renderForm(args)}
              </div>
            </div>
          </div>
        </div>
      );
    }
}

ResetPasswordComponent.propTypes = {
  resetPasswordForm: propTypes.func.isRequired,
};

export default ResetPasswordComponent;
