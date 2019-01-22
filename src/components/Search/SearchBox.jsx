import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { searchAction } from '../../actions/searchActions';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKeyWords: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { search, history } = this.props;
    const { searchKeyWords } = this.state;
    search(searchKeyWords);
    history.push('/search');
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} data-test="searchBoxComponent">
          <div className="ui icon centered input">
            <Input onChange={this.handleChange} name="searchKeyWords" placeholder="Search" />
            <i className="search icon" />
          </div>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  search: PropTypes.func,
  history: PropTypes.shape({}),
};

SearchBar.defaultProps = {
  search: null,
  history: null,
};

function mapDispatchToProps(dispatch) {
  return {
    search: keyword => (
      dispatch(searchAction(keyword))
    ),
  };
}

export default connect(null, mapDispatchToProps)(SearchBar);
