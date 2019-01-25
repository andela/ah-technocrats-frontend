import { connect } from 'react-redux';
import { fetchArticle } from '../actions/viewArticleActions';
import ViewSingleArticleComponent from '../components/Article/ViewSingleArticleComponent';

const mapStateToProps = state => ({
  processing: state.getFetchArticle.processing,
  article: state.getFetchArticle.article,
  reason: state.getFetchArticle.reason,
  success: state.getFetchArticle.success,
});

const mapDispatchToProps = dispatch => (
  {
    getArticle: slug => (
      dispatch(fetchArticle(slug))
    ),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewSingleArticleComponent);
