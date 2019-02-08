import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as updateArticleActions from '../../actions/updateArticles';
import UpdateComponent from './UpdateComponent';
import './Articles.scss';

class UpdateContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: '',
      description: '',
      body: '',
    };

    // binds the methods to the component instance
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange =(e) => {
    localStorage.setItem(e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { updateArticle, match } = this.props;
    const article_slug = match.params.article_slug;
    updateArticle({
      article: this.updatedData(),
    }, article_slug);
  }

  updatedData = () => {
    const currentState = this.state;
    return Object.keys(this.state).reduce((object, key) => {
      if (currentState[key] !== '') {
        object[key] = currentState[key];
      }
      return object;
    }, {});
  }

  handleCloudinary = () => {
    this.cloudinaryWidget().open();
  }

    onChangeMDE =(value) => {
      this.setState({ body: value });
    }

  cloudinaryWidget = () => window.cloudinary.createUploadWidget({
    cloudName: 'verencelola',
    uploadPreset: 'verencelola',
    multiple: false,
    maxFiles: 1,
    showAdvancedOptions: false,
  }, (error, result) => {
    if (result && result.event === 'success') {
      const uploadedImage = result.info.url;
      document.getElementById('article_image').src = uploadedImage;
      this.setState({ image: uploadedImage });
    }
  });

  render() {
    const {
      error, loading, success,
      resetUpdated, updated, previousData, match,

    } = this.props;
    const loginError = { ...error.error };
    return (
      <div>
        <UpdateComponent
          onChange={this.onChange}
          onChangeMDE={this.onChangeMDE}
          onSubmit={this.onSubmit}
          handleChange={this.handleChange}
          error={loginError}
          loading={loading}
          success={success}
          article_slug={match.params.article_slug}
          updated={updated}
          resetUpdated={resetUpdated}
          handleCloudinary={this.handleCloudinary}
          previousData={previousData}
        />
      </div>

    );
  }
}

UpdateContainer.propTypes = {
  error: PropTypes.shape(),
  success: PropTypes.bool,
  loading: PropTypes.bool,
  article_slug: PropTypes.string,
  resetUpdated: PropTypes.string,
  updated: PropTypes.string,
  previousData: PropTypes.string,
  match: PropTypes.string,
};

UpdateContainer.defaultProps = {
  error: null,
  success: null,
  loading: null,
  article_slug: null,
  resetUpdated: null,
  updated: null,
  previousData: null,
  match: null,

};

function mapStateToProps(state) {
  return {
    article: state.updateArticlesReducer,
    error: state.updateArticlesReducer,
    success: state.updateArticlesReducer.successfulMessage,
    successToast: state.updateArticlesReducer.successToast,
    updated: state.updateArticlesReducer.updated,
    previousData: state.articles,
  };
}

const mapDispatchToProps = dispatch => (
  {
    updateArticle: (articleData, article_slug) => (
      dispatch(updateArticleActions.updateArticle(articleData, article_slug))
    ),
    resetUpdated: status => (
      dispatch(updateArticleActions.updated(status))
    ),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(UpdateContainer);
