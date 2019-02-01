import React from 'react';
import './Articles.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Sidebar, Segment, Loader } from 'semantic-ui-react';
import Cookies from 'js-cookie';
import Header from '../Header/Header';
import SideBarMenu from '../Menu/Menu';
import UserSpecificArticleComponent from './UserSpecificArticleComponent';
import { deleteArticle, fetchAuthorArticles } from '../../actions/deleteArticleAction';
import DeletedArticle, { ArticleNotFound } from './DeletedArticle';
import Footer from '../Footer/Footer';
import { updated } from '../../actions/updateArticles';

export class UserSpecificArticleContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      confirmDeleteOpen: false,
      name: '',
    };
  }

  componentWillMount() {
    const { fetchOwnArticles, resetUpdated } = this.props;
    document.title = 'AuthorsHaven | My Articles';
    const author = Cookies.get('username');
    fetchOwnArticles(author);
    resetUpdated(false);
  }

  setName =(name) => {
    this.setState({ name });
  }

  onDeleteSlug = (articleSlug, confirmed) => {
    const { onDelete } = this.props;
    this.setState({ confirmDeleteOpen: false });
    if (confirmed) {
      onDelete(articleSlug);
    }
  }

  openModal =() => {
    this.setState({ confirmDeleteOpen: true });
  }

  articlesFound = (articles, components, history) => (
    articles.length ? (
      <div className="ui divided items">
        { components }
      </div>
    ) : (
      <div className="ui divided items">
        <ArticleNotFound history={history} />
      </div>
    )
  )

  ArticlesComponents = () => {
    const { articles, history } = this.props;
    const { confirmDeleteOpen, name } = this.state;
    return articles.map(
      article => (
        <UserSpecificArticleComponent
          {...article}
          onDelete={this.onDeleteSlug}
          modalOpen={confirmDeleteOpen}
          key={article.id}
          openModal={this.openModal}
          history={history}
          name={name}
          setName={this.setName}
        />
      ),
    );
  }

  Component = () => {
    const {
      deleteSuccessful, history, loading, articles,
    } = this.props;
    const MyArticles = () => (
      <React.Fragment>
        <div className="space">
          <div className="ui header medium">
            <h3>My Publications</h3>
          </div>
        </div>
        <div className="ui grid">
          <div className="twelve centered wide column">
            <div className="space">
              {loading ? <Loader active />
                : this.articlesFound(articles, this.ArticlesComponents(), history)
              }
              { loading ? <Loader active /> : null }
            </div>
          </div>
        </div>
      </React.Fragment>
    );
    return (
      <React.Fragment>
        <Header history={history} />
        <React.Fragment>
          <Sidebar.Pushable as={Segment} attached="bottom" className="body-cont">
            <SideBarMenu />
            <Sidebar.Pusher id="pusher" className="pusher-height">
              <div className="ui container">
                {deleteSuccessful.status ? <DeletedArticle history={history} /> : <MyArticles />}
              </div>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </React.Fragment>
        <div className="space" />
        <Footer />
      </React.Fragment>
    );
  }

  render() {
    return this.Component();
  }
}

UserSpecificArticleContainer.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
  articles: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func.isRequired,
  deleteFailed: PropTypes.shape().isRequired,
  deleteSuccessful: PropTypes.shape().isRequired,
  fetchOwnArticles: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
  resetUpdated: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

UserSpecificArticleContainer.defaultProps = {
  articles: [],
};

const mapStateToProps = state => ({
  articles: state.ownArticles.articles,
  deleteSuccessful: state.ownArticles.deleteSuccessful,
  loading: state.ownArticles.loading,
  updated: state.updateArticlesReducer.updated,
  deleteFailed: state.ownArticles.deleteFailed,
});

const mapDispatchToProps = dispatch => (
  {
    onDelete: articleSlug => (
      dispatch(deleteArticle(articleSlug))
    ),
    fetchOwnArticles: author => dispatch(fetchAuthorArticles(author)),
    resetUpdated: status => dispatch(updated(status)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(UserSpecificArticleContainer);
