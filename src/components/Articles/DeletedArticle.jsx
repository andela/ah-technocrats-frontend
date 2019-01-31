import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const DeletedArticle = ({ history }) => {
  const hanldeOnClick = () => (
    history.go('/myarticles')
  );
  return (
    <div className="ui break">
      <div className="ui grid column space" />
      <div className="space" />
      <div className="ui">
        <div className="ui two column very centered relaxed stackable grid">
          <form className="ui form">
            <p className="green"><i className="icon red check circle outline tick" /></p>
            <h2 className="ui green">The article was successfully deleted</h2>
            <br />
            <div className="field" />
            <Button fluid color="green" type="button" onClick={hanldeOnClick}>Back to my articles</Button>
            <div className="space" />
          </form>
        </div>
      </div>
    </div>
  );
};

DeletedArticle.propTypes = {
  history: PropTypes.shape().isRequired,
};
export default DeletedArticle;

export const ArticleNotFound = (props) => {
  const hanldeOnClick = () => {
    const { history } = props;
    history.push('/new_article');
  };
  return (
    <div className="ui break">
      <div className="ui grid column space" />
      <div className="space" />
      <div className="ui">
        <div className="ui two column very centered relaxed stackable grid">
          <form className="ui form">
            <p className="green"><Icon name="exclamation triangle" size="huge" color="red" /></p>
            <h2 className="ui green">No Articles Found</h2>
            <br />
            <div className="field" />
            <Button fluid color="green" type="button" onClick={hanldeOnClick}>Publish Article</Button>
            <div className="space" />
          </form>
        </div>
      </div>
    </div>
  );
};

ArticleNotFound.propTypes = {
  history: PropTypes.shape().isRequired,
};
