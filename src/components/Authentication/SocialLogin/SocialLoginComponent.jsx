import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import 'react-semantic-toasts/styles/react-semantic-alert.css';
import { Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-semantic-toasts';
import * as loginActions from '../../../actions/socialAuthActions';
import {
  auth, GoogleProvider, FacebookProvider, TwitterProvider,
} from '../../../config/firebase';
import { FACEBOOK, GOOGLE, TWITTER } from '../../../actions/actionTypes';
import './socialLogin.scss';
import ButtonInput from './ButtonInput';

class SocialLoginComponent extends React.Component {
  state = {
    providers: [
      {
        provider: FacebookProvider, type: FACEBOOK, name: 'facebook', button_class: 'facebook', class_name: 'facebook',
      },
      {
        provider: GoogleProvider, type: GOOGLE, name: 'google-oauth2', button_class: 'google plus', class_name: 'google',
      },
      {
        provider: TwitterProvider, type: TWITTER, name: 'twitter', button_class: 'twitter', class_name: 'twitter',
      },
    ],
  }

  constructor(props) {
    super(props);
    this.onsubmitHandler = this.onsubmitHandler.bind(this);
    this.getSocialData = this.getSocialData.bind(this);
    this.dataFetcher = this.dataFetcher.bind(this);
  }

  onsubmitHandler(access) {
    let tokenData = null;
    if (access.provider === 'twitter') {
      tokenData = {
        provider: access.provider,
        access_token: access.accessToken,
        access_token_secret: access.accessSecret,
      };
    } else {
      tokenData = {
        provider: access.provider,
        access_token: access.accessToken,
      };
    }
    this.dataFetcher(tokenData);
  }

  getSocialData(oauthprovider, platform, authType) {
    const dataFetch = this.props;
    dataFetch.fetchUsers();
    auth.signInWithPopup(oauthprovider).then(result => ({
      type: authType,
      payload: {
        authData: {
          provider: platform,
          accessToken: result.credential.accessToken,
          accessSecret: result.credential.secret,
        },
        userDetails: {
          name: result.user.displayName,
          photo: result.user.photoURL,
          email: result.user.email,
        },
      },
    })).then((response) => {
      this.switch(response, dataFetch);
      this.onsubmitHandler(response.payload.authData);
    });
  }

  switch = (response, dataFetch) => {
    switch (response.type) {
      case FACEBOOK:
        dataFetch.FacebookAuth(response);
        break;
      case GOOGLE:
        dataFetch.GoogleAuth(response);
        break;
      case TWITTER:
        dataFetch.TwitterAuth(response);
        break;
      default:
        break;
    }
  }

  dataFetcher(tokenData) {
    const dataFetch = this.props;
    const url = 'http://ah-technocrats.herokuapp.com/api/social/login/';
    dataFetch.fetchUsers();
    axios.post(url, tokenData, {
      headers: {
        Accept: 'application/json',
      },
      crossDomain: true,
    })
      .then((response) => {
        const { token } = response.data.user;
        localStorage.setItem('email', response.data.user.email);
        document.cookie = `access_token=${token}`;
        dataFetch.receivedUsers(response.data);
      })
      .catch((err) => {
        dataFetch.getError(err);
      });
  }

  renderButton=providers => (
    <div className="ui fluid buttons">
      {providers.map(providerName => (
        <ButtonInput
          key={providerName.name}
          Provider={providerName.provider}
          providerName={providerName.name}
          type={providerName.type}
          className={providerName.class_name}
          buttonClass={providerName.button_class}
          getSocialData={() => {
            this.getSocialData(providerName.provider, providerName.name, providerName.type);
          }
              }
        />
      ))}
    </div>
  )

  render() {
    const { msg } = this.props;
    const { providers } = this.state;
    return (
      <div>
        { msg === 'success' ? toast({
          type: 'success',
          icon: 'check',
          description: `${localStorage.getItem('email')} logged in successfully`,
          time: 3000,
        }) : null}
        { msg === 'success' ? <Redirect to="/articles" /> : null }
        { msg === 'fetching' ? (
          <div className="loader">
            <Loader inline="centered" active />
          </div>
        ) : null }
        {this.renderButton(providers)}
      </div>
    );
  }
}
export function mapStateToProps(state, myProps) {
  if (state.socialAuth) {
    return {
      socialAuth: state.socialAuth,
      msg: state.socialAuth.message,
      myProps,
    };
  }
  return {};
}

export function mapDispatchToProps(dispatch) {
  return {
    FacebookAuth: data => dispatch(loginActions.FacebookAuth(data)),
    GoogleAuth: data => dispatch(loginActions.GoogleAuth(data)),
    TwitterAuth: data => dispatch(loginActions.TwitterAuth(data)),

    fetchUsers: data => dispatch(loginActions.fetchUsers(data)),
    getError: data => dispatch(loginActions.getError(data)),
    receivedUsers: data => dispatch(loginActions.receivedUsers(data)),
  };
}
SocialLoginComponent.defaultProps = {
  msg: '',
};

SocialLoginComponent.propTypes = {
  msg: PropTypes.string,
};
export default connect(mapStateToProps, mapDispatchToProps)(SocialLoginComponent);
