import React from 'react';
import './Articles.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Sidebar,
  Segment,
} from 'semantic-ui-react';

import fetchArticlesAct from '../../actions/articleActions';
import Footer from '../Footer/Footer';
import SideBarMenu from '../Menu/Menu';
import AllArticlesComponent from './AllArticlesComponent';
import Header from '../Header/Header';

export class ArticleContainer extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentWillMount() {
    const { fetchArticles } = this.props;
    fetchArticles();
  }

  render() {
    const { articles } = this.props;
    return (
      <React.Fragment>
        <Header />
        <Sidebar.Pushable as={Segment} attached="bottom">
          <SideBarMenu />
          <Sidebar.Pusher id="pusher" className="pusher-height">
            <AllArticlesComponent articles={articles} />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        <Footer />
      </React.Fragment>
    );
  }
}

ArticleContainer.propTypes = {
  fetchArticles: PropTypes.func,
  articles: PropTypes.arrayOf(PropTypes.object),
};

ArticleContainer.defaultProps = {
  fetchArticles: () => {},
  articles: [],
};

const mapStateToProps = state => ({
  articles: state.articles.items,
});

export default connect(mapStateToProps, {
  fetchArticles: fetchArticlesAct,
})(ArticleContainer);
