import React, { Component } from 'react';
import {
  Loader, Rating, Segment, Sidebar,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SideBarMenu from '../Menu/Menu';
import Header from '../Header/Header';


import Footer from '../Footer/Footer';

class ViewSingleArticleComponent extends Component {
  componentDidMount() {
    const { getArticle } = this.props;
    const { match } = this.props;
    getArticle(match.params.slug);
  }

  renderActionButton = (buttonClass, content, iconClass) => (
    <button type="button" className={buttonClass}>
      <i className={iconClass} />
      <span>
        {' '}
        {content}
      </span>
    </button>
  );

  renderActionButtons(article) {
    return (
      <div className=" ui right floated column inline" style={{ display: 'contents' }}>
        {this.renderActionButton(
          'ui tiny toggle circular green button',
          `Like   ${article.article.like.likeCount}`,
          'thumbs up icon',
        )}
        {this.renderActionButton(
          'ui tiny toggle circular red button',
          `Dislike   ${article.article.dislike.dislikeCount}`,
          'thumbs down icon',
        )}
        {this.renderActionButton('ui tiny circular yellow button', 'Favorite', 'star icon')}
        {this.renderActionButton('ui tiny circular yellow button', 'Bookmark', 'bookmark icon')}
        {this.renderLink(
          '',
          this.renderActionButton(
            'ui tiny circular blue icon button',
            'Report',
            'eye icon',
          ), `/report/${article.article.article_slug}`,
        )}
      </div>
    );
  }

  renderComment = article => (
    <div className="comment">
      {this.renderLink('avatar',
        <img src="https://semantic-ui.com/images/avatar/large/joe.jpg" alt="" />,
        `/profile/${article.article.author.username}`)}
      <div className="content">
        {this.renderLink('author', 'Joe Henderson',
          `/profile/${article.article.author.username}`)}
        <div className="metadata">
          <span className="date">5 days ago</span>
        </div>
        <div className="text">
            Dude, this is awesome. Thanks so much (
          {this.renderLink('ui red text',
            'Edited',
            `/profile/${article.article.author.username}`)}
            ) &nbsp;&nbsp;&nbsp;
          {this.renderLink('',
            'Edit',
            `/profile/${article.article.author.username}`)}
        </div>
        <div className="actions">
          {this.renderLink('reply',
            'Reply',
            `/profile/${article.article.author.username}`)}
        </div>
      </div>
    </div>
  );

  renderComments(article) {
    return (
      <div className="ui space space-bottom comments">
        <h3 className="ui dividing header">Comments</h3>
        {this.renderComment(article)}
        <form className="ui reply form">
          <div className="field">
            <textarea />
          </div>
          <div className="ui green small labeled submit icon button">
            <i className="icon edit" />
            {' '}
              Add Reply
          </div>
        </form>
      </div>
    );
  }

  renderLink = (classname, content, to) => (
    <Link className={classname} to={to}>
      {content}
    </Link>
  );

  renderUiGrid(article) {
    return (
      <div className="ui grid">
        <div className="ui four column row">
          <div className="ui left floated column">
            <div className="ui divided items">
              <div className="item">
                <div className="ui tiny image">
                  <img src={article.article.author.avatar} alt="" />
                </div>
                <div className="middle aligned content">
                    Written by:
                  {' '}
                  {this.renderLink('',
                    article.article.author.username,
                    `/profile/${article.article.author.username}`)}
                </div>
              </div>
            </div>

          </div>
          {this.renderActionButtons(article)}
        </div>
      </div>
    );
  }

  renderCenteredGrid = article => (
    <div className="ui centered grid ">
      <div className="space article justified column">
        <p className="paragraph">
          {article.article.body}
        </p>
      </div>
    </div>
  );

  renderTagSpace() {
    return (
      <div className="tag space">
          Tags:
        {this.renderLink('ui tag label red', 'New', '/articles/?tag=new')}
      </div>
    );
  }

  renderArticleCover = article => (
    <img
      src={
              article.article.image === '' ? 'https://i1.wp.com/thefrontline.org.uk/'
                  + 'wp-content/uploads/2018/10/placeholder.jpg?ssl=1' : article.article.image}
      alt=""
      className="ui space centered fluid image cover"
    />
  );

  renderSameLine = () => (
    <div className="right float same-line">
      <p className="bold">Rate article</p>
      <Rating maxRating={5} clearable />
    </div>
  );

  renderFollow(article) {
    return this.renderLink('follow',

      <div className="ui label space-bottom">
        <i className="users icon" />
        {' '}
          31 Followers
      </div>, `/${article.article.author.username}/followers`);
  }

  renderReadTime = article => (
    <p className="small">
      <strong><i className="clock icon" /></strong>
      {article.article.read_time}
      {' '}
          min
    </p>
  );

  renderWrittenBy = article => (
    <p className="small">
      <strong>Written By: </strong>
      {article.article.author.username}
    </p>
  );

  renderContainer(article) {
    return (
      <div className="ui container">

        <div className="ui space borderless">

          <h1 className="increase-size">{article.article.title}</h1>
          {this.renderWrittenBy(article)}
          {this.renderReadTime(article)}
          {this.renderFollow(article)}
          {this.renderSameLine()}
          {this.renderArticleCover(article)}
          {this.renderCenteredGrid(article)}
          {this.renderUiGrid(article)}
          {this.renderTagSpace()}
          {this.renderComments(article)}
        </div>
      </div>
    );
  }

  renderOnSuccess(article, success) {
    return success
      ? (
        this.renderContainer(article)
      ) : '';
  }

  render() {
    const {
      processing, article, success, reason, history,
    } = this.props;
    return (
      <React.Fragment>
        <Header history={history} />
        <Sidebar.Pushable as={Segment} attached="bottom">
          <SideBarMenu />
          <Sidebar.Pusher id="pusher" className="pusher-height">
            <div className="cont">
              {(processing && reason === '')
                ? (
                  <div className="article-page-inner">
                    <Loader active inline="centered" size="massive" />
                  </div>
                ) : ''}
              {this.renderOnSuccess(article, success)}
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        <Footer />
      </React.Fragment>
    );
  }
}
ViewSingleArticleComponent.propTypes = {
  getArticle: PropTypes.func.isRequired,
  article: PropTypes.shape().isRequired,
  reason: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
  processing: PropTypes.bool.isRequired,
  match: PropTypes.shape().isRequired,
  history: PropTypes.shape(),
};
ViewSingleArticleComponent.defaultProps = {
  history: null,
};
export default ViewSingleArticleComponent;
