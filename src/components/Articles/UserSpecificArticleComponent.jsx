
import React from 'react';
import './Articles.scss';
import propTypes from 'prop-types';
import Moment from 'react-moment';
import EditButton from './EditArticleContainer';

const UserSpecificArticleComponent = (props) => {
  const {
    article_slug: articleSlug, history, body, onDelete, modalOpen, openModal, name, setName,
  } = props;
  const editArticle = (e) => {
    const parentArticle = e.target.parentElement.parentElement.parentElement;
    const articleDesc = parentArticle.querySelector('.excerpt').innerHTML;
    const articleTitle = parentArticle.querySelector('.header').innerHTML;

    localStorage.setItem('description', articleDesc);
    localStorage.setItem('title', articleTitle);
    localStorage.setItem('body', body);
    history.push(`/myarticles/${articleSlug}`);
  };
  return (
    <div className="item">
      <Details {...props} />
      <div className="right float">
        <EditButton setName={setName} articleSlug={articleSlug} openModal={openModal} modalOpen={modalOpen} onDelete={onDelete} name={name} />
        <Buttons editArticle={editArticle} />
      </div>
    </div>
  );
};

const Buttons = (props) => {
  const { editArticle } = props;
  return (
    <React.Fragment>
     &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={editArticle} className="edit-button" type="button" id="submit"><i className="icon green edit outline " /></button>
          &nbsp;&nbsp;&nbsp;&nbsp;
      <a href="progile"><i className="icon green chart line" /></a>
          &nbsp;&nbsp;&nbsp;&nbsp;
    </React.Fragment>
  );
};

Buttons.propTypes = {
  editArticle: propTypes.func.isRequired,
};

UserSpecificArticleComponent.propTypes = {
  article_slug: propTypes.string.isRequired,
  modalOpen: propTypes.bool.isRequired,
  openModal: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  setName: propTypes.func.isRequired,
  onDelete: propTypes.func.isRequired,
  image: propTypes.string.isRequired,
};

const Details = (props) => {
  const {
    title, description, author, created_at: createdAt,
    article_slug: articleSlug, image,
  } = props;
  return (
    <React.Fragment>
      <div className="image">
        <img alt="" className="article-image" src={image || 'https://i1.wp.com/thefrontline.org.uk/wp-content/uploads/2018/10/placeholder.jpg?ssl=1'} />
      </div>
      <div className="top aligned content">
        <a className="header" href={`/articles/${articleSlug}`}>{title}</a>
        <div className="excerpt">{description}</div>
        <div className="small-margin tagline">
          <span className="date"><Moment fromNow>{createdAt}</Moment></span>
        </div>
        <div className="tagline">
          <span className="date">
            By:
            {' '}
            {author.username}
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

Details.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  created_at: propTypes.string.isRequired,
  article_slug: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
};

export default UserSpecificArticleComponent;
