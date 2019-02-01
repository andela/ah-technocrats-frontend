import React from 'react';
import './Articles.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Sidebar,
  Segment,
} from 'semantic-ui-react';
import { fetchArticles, pageData, getPage } from '../../actions/articleActions';
import SideBarMenu from '../Menu/Menu';
import AllArticlesComponent from './AllArticlesComponent';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export class ArticleContainer extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentWillMount() {
    const { fetchAllArticles, fetchpageData } = this.props;
    fetchAllArticles();
    fetchpageData();
    document.title = 'Authors Haven';
  }


  render() {
    const {
      articles, history, pagination, getNewPage,
    } = this.props;

    return (
      <React.Fragment>
        <Header history={history} />
        <Sidebar.Pushable as={Segment} attached="bottom">
          <SideBarMenu />
          <Sidebar.Pusher id="pusher" className="pusher-height">
            <AllArticlesComponent
              articles={articles}
              pagination={pagination}
              getNewPage={getNewPage}
            />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        <Footer />
      </React.Fragment>
    );
  }
}

ArticleContainer.defaultProps = {
  pagination: null,
  getNewPage: null,
};

ArticleContainer.propTypes = {
  fetchAllArticles: PropTypes.func,
  fetchpageData: PropTypes.func,
  getNewPage: PropTypes.shape({}),
  articles: PropTypes.arrayOf(PropTypes.object),
  history: PropTypes.shape({}),
  pagination: PropTypes.arrayOf(PropTypes.object),
};

ArticleContainer.defaultProps = {
  fetchAllArticles: () => {},
  fetchpageData: () => {},
  articles: [],
  history: null,
};

const mapStateToProps = state => ({
  articles: state.articles.items,
  pagination: state.articles.count,
  // set state for article data
  articleData: state.articles,
});

export default connect(mapStateToProps, {
  fetchAllArticles: fetchArticles,
  fetchpageData: pageData,
  getNewPage: getPage,
})(ArticleContainer);
