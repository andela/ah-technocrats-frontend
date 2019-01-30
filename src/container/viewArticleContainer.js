import { connect } from 'react-redux';
import { fetchArticle } from '../actions/viewArticleActions';
import { fetchCommentsRequest, fetchCommentsRepliesRequest } from '../actions/getCommentsActions';
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
    getComments: slug => (
      dispatch(fetchCommentsRequest(slug))
    ),
    getCommentReplies: (slug, id) => (
      dispatch(fetchCommentsRepliesRequest(slug, id))
    ),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewSingleArticleComponent);
