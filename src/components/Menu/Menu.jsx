import React from 'react';
import {
  Menu, Icon,
  Sidebar,
} from 'semantic-ui-react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../actions/loginActions';

const MenuItem = (props) => {
  const {
    to, onClick, icon, label,
  } = props;
  return (
    <Menu.Item as={Link} to={to} onClick={onClick}>
      <Icon name={icon} />
      {label}
    </Menu.Item>
  );
};

class SideBarMenu extends React.Component {
  render() {
    const { logoutUser } = this.props;
    return (
      <Sidebar as={Menu} icon="labeled" inverted width="thin" vertical color="green" id="sidebar">
        <MenuItem to="/profile" label="Profile" icon="user outline" />
        <MenuItem to="/articles" label="Articles" icon="clone" />
        <MenuItem to="/myarticles" label="Mine" icon="user" />
        <MenuItem to="/new_article" label="Publish" icon="plus circle" />
        <MenuItem to="/profiles/" label="Profiles" icon="users" />
        {Cookies.get('username') ? (
          <MenuItem
            to="/login"
            label="Logout"
            onClick={logoutUser}
            icon="sign-out"
          />
        ) : <MenuItem to="/login" label="Login" icon="sign-in" /> }
      </Sidebar>

    );
  }
}

const mapStateToProps = state => ({
  state: state.loginReducer,
});


const mapDispatchToprops = dispatch => (
  {
    logoutUser: () => (
      dispatch(logout())
    ),
  }
);

SideBarMenu.propTypes = {
  logoutUser: PropTypes.func.isRequired,
};

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

MenuItem.defaultProps = {
  onClick: undefined,
};


export default connect(mapStateToProps, mapDispatchToprops)(SideBarMenu);
