import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SemanticToastContainer, toast } from 'react-semantic-toasts';
import {
  Form,
  Button,
  Container,
  Grid,
  GridColumn,
  Loader,
} from 'semantic-ui-react';
import FormField from './FormField';
import logo from './ah.logo-square.svg';
import './registrationPage.scss';

const RegistrationForm = ({
  onSubmit, onChange, error, successMessage, loading, password,
  repeatPassword, toastOptions,
}) => (
  <Container className="top-margin">
    <SemanticToastContainer position="top-left" />
    <Grid centered>
      <GridColumn className="ui form-display-area ten wide column segment">
        <div className="ui grid column">
          <img className="image" src={logo} alt="Authors Haven Logo" />
        </div>
        <div className="ui">
          <div className="ui column centered grid">
            <div className="ui ten wide column">
              <Form onSubmit={onSubmit} className="ui left space-bottom aligned form">
                <h3>
                Please
                  <b> Sign Up</b>
                  {' '}
                or
                  {' '}
                  <Link to="/login">
                    <b>Login</b>
                  .
                  </Link>
                </h3>
                {successMessage ? toast(toastOptions) : null}

                <FormField onChange={onChange} inputName="username" error={error} type="text" />
                <FormField onChange={onChange} inputName="email" error={error} type="text" />
                <FormField onChange={onChange} inputName="password" error={error} type="password" />

                <Form.Field>
                  <label htmlFor="password">
                    Repeat Password:
                    <input
                      onChange={onChange}
                      id="password"
                      type="password"
                      name="repeatPassword"
                      placeholder="Repeat Password"
                    />
                  </label>
                  {password !== repeatPassword ? <small className="error">Passwords do not match.</small> : null}
                </Form.Field>

                {loading || password !== repeatPassword
                  ? <Button positive disabled fluid type="submit">Submit</Button>
                  : <Button id="submit" positive fluid type="submit">Submit</Button>
              }
                {loading
                  ? (
                    <div data-test="loader-component" className="loader">
                      <Loader active inline="centered" />
                    </div>
                  )
                  : null
              }
              </Form>
            </div>
          </div>
        </div>
      </GridColumn>
    </Grid>
  </Container>
);

RegistrationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  successMessage: PropTypes.string,
  error: PropTypes.shape({}),
  loading: PropTypes.bool,
  toastOptions: PropTypes.shape({}).isRequired,
  password: PropTypes.string.isRequired,
  repeatPassword: PropTypes.string.isRequired,
};

RegistrationForm.defaultProps = {
  error: null,
  successMessage: null,
  loading: null,
};

export default RegistrationForm;
