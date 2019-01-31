
import React from 'react';
import './Articles.scss';
import propTypes from 'prop-types';
import { Modal, Button, Icon } from 'semantic-ui-react';
import Moment from 'react-moment';

const UserSpecificArticleComponent = (props) => {
  const {
    article_slug: articleSlug, onDelete, modalOpen, openModal, name, setName,
  } = props;
  return (
    <div className="item">
      <Details {...props} />
      <div className="right float">
        <Modal
          trigger={(
            <Icon name="trash" id="open-modal" className="delete-icon" color="red" onClick={() => { setName(articleSlug); openModal(); }} />
            )}
          size="tiny"
          open={modalOpen}
        >
          <Modal.Header>Delete Your Article</Modal.Header>
          <Modal.Content><p>Are you sure you want to delete this article</p></Modal.Content>
          <Modal.Actions>
            <Button positive id="cancel-delete" onClick={() => onDelete(null, false)}>Cancel</Button>
            <Button negative id="confirm-delete" onClick={() => { onDelete(name, true); }}>Delete</Button>
          </Modal.Actions>
        </Modal>
        <Buttons />
      </div>
    </div>
  );
};

const Buttons = () => (
  <React.Fragment>
     &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="editarticle"><i className="icon green edit outline" /></a>
          &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="progile"><i className="icon green chart line" /></a>
          &nbsp;&nbsp;&nbsp;&nbsp;
  </React.Fragment>
);

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
