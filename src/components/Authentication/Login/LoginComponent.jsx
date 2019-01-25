import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import 'react-semantic-toasts/styles/react-semantic-alert.css';
import { Link, Redirect } from 'react-router-dom';
import logo from '../../../common/ah.logo-square.svg';
import './login.scss';
import FormInput from './FormInput';
import SuccessComponent from './SuccessComponent';
import SocialLoginComponent from '../SocialLogin/SocialLoginComponent';

const Errors = props => (
  props.field.map(err => (<div className="errorMessage"><small className="error">{err}</small></div>))
);

const LoginComponent = ({
  onSubmit,
  onChange,
  error,
  loading,
  success,
}) => (

  <div className="ui container top-margin">
    <div className="ui centered grid">
      <div className="ui ten wide column segment">
        <div className="ui grid column">
          <img className="image-login" alt="logo" src={logo} />
        </div>
        <div className="ui">
          <div className="ui column centered grid">
            <div className="ui ten wide column">

              <SuccessComponent success={success} />
              { success ? <Redirect to="/articles" /> : null }

              <div className="ui center aligned basic segment">
                <h3>
                 Please Login or
                  <Link to="/register"> Sign Up</Link>
                </h3>

                {error.error ? <Errors field={error.error} /> : null}
                <form onSubmit={onSubmit} className="ui left aligned form">
                  <FormInput
                    label="email"
                    fieldName="Email:"
                    fieldType="email"
                    id="email"
                    htmlFor="email"
                    className="form-label"
                    onChange={onChange}
                    inputName="email"
                    placeholder="Email"
                    error={error}
                  />
                  {error.email ? <Errors field={error.email} /> : null}

                  <FormInput
                    label="password"
                    fieldName="Password:"
                    fieldType="password"
                    id="password"
                    htmlFor="password"
                    className="form-label"
                    onChange={onChange}
                    inputName="password"
                    placeholder="Password"
                  />
                  {error.password ? <Errors field={error.password} /> : null}

                  { loading
                    ? <Button loading positive disabled fluid type="submit">Login</Button>
                    : <Button positive fluid type="submit">Login</Button>
                  }
                </form>
                <div className="small-space">
                  <p>
If you forgot your password,
                    <b><Link to="/forgot-password"> Click Here</Link></b>
.
                  </p>
                </div>
                <div className="ui horizontal divider">
                                OR
                </div>
                <p><small>Use your social accounts to login</small></p>
                <SocialLoginComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

LoginComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.shape().isRequired,
  success: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
};

LoginComponent.defaultProps = { success: null };

export default LoginComponent;
