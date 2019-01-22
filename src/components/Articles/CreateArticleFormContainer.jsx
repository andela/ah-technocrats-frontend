import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { createArticle } from '../../actions/articleActions';
import CreateArticleForm from './CreateArticleFormComponent';

class CreateArticleFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      body: '',
      image: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  onSubmit(e) {
    e.preventDefault();
    const {
      title, body, description, image,
    } = this.state;
    const article = {
      article: {
        title,
        body,
        description,
        image,
      },
    };
    // eslint-disable-next-line no-shadow
    const { createArticle } = this.props;
    // call create new article action here
    createArticle(article);
  }

  handleChange = (value) => {
    this.setState({ body: value });
  };

  handleCloudinary = () => {
    this.cloudinaryWidget().open();
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
      document.getElementById('image').src = uploadedImage;
      this.setState({ image: uploadedImage });
    }
  });

  // return form
  render() {
    const { createSuccess, history, loading } = this.props;
    const {
      textValue, description, title, body,
    } = this.state;
    const clean = body.split(' ');
    const words = clean.filter(word => word.length > 0 && (word.match(/\d/) || word.match(/[a-z]/i))).length;
    return (
    // form
      <React.Fragment>
        <CreateArticleForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          handleChange={this.handleChange}
          handleCloudinary={this.handleCloudinary}
          title={title}
          description={description}
          textValue={textValue}
          createSuccess={createSuccess}
          history={history}
          loading={loading}
          words={words}
        />
      </React.Fragment>
    );
  }
}

CreateArticleFormContainer.propTypes = {
  createArticle: PropTypes.func.isRequired,
  createSuccess: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  history: PropTypes.func.isRequired,

};

const mapStateToProps = state => ({
  createSuccess: state.articles.createSuccess,
  loading: state.articles.loading,

});
export default connect(mapStateToProps, { createArticle })(CreateArticleFormContainer);
