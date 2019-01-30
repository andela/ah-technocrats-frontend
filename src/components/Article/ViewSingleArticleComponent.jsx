import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loader, Segment, Sidebar } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../ResetPassword/resetpassword.scss';
import './viewsinglearticle.scss';
import PropTypes from 'prop-types';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton, FacebookIcon, WhatsappIcon, TwitterIcon, GooglePlusIcon, EmailIcon,
} from 'react-share';
import Cookies from 'js-cookie';
import SideBarMenu from '../Menu/Menu';
import Header from '../Header/Header';
import * as likingActions from '../../actions/likeActions';
import * as dislikeActions from '../../actions/dislikeActions';
import renderActionButtons from './LikeDislikeContainer';
import { rateArticle } from '../../actions/ratingActions';
import rateArticleComponent from './ratingArticleComponent';
import Footer from '../Footer/Footer';
import CommentContainer from '../Comments/CommentContainer';

class ViewSingleArticleComponent extends Component {
  constructor() {
    super();
    this.state = {
      rating: 0,
    };
    this.onStarClick = this.onStarClick.bind(this);
  }

  componentDidMount() {
    const { getArticle, getComments, match } = this.props;
    getArticle(match.params.slug).then(() => {
      getComments(match.params.slug);
    });
  }

  // rating
  onStarClick(nextValue) {
    this.setState({ rating: nextValue });
    const { match } = this.props;
    const articleSlug = match.params.slug;
    const payload = {
      slug: articleSlug, rating: { rating: nextValue },
    };
    const { rateArticle } = this.props;
    const token = Cookies.get('access_token');
    rateArticle(payload, token);
  }

  renderActionButton = (buttonClass, id, content, iconClass, onClick) => (
    <button type="button" className={buttonClass} id={id} onClick={onClick}>
      <i className={iconClass} />
      <span>
        {content}
      </span>
    </button>
  );

  likeArticle = () => {
    const { like, match } = this.props;
    like(match.params.slug);
  }

  dislikeArticle = () => {
    const { match, dislike } = this.props;
    dislike(match.params.slug);
  }

  setInitialState(article) {
    const value = article.article.rating.average;
    this.state.rating = value;
  }

  renderComments(article) {
    return (
      <CommentContainer article={article} renderLink={this.renderLink} />
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
                  {this.renderLink('',
                    article.article.author.username,
                    `/profiles/${article.article.author.username}`)}
                </div>
              </div>
            </div>
          </div>
          {renderActionButtons(article,
            this.likeArticle, this.dislikeArticle, this.renderActionButton, this.renderLink)}
        </div>
        <div>
          <br />
          <div style={{ clear: 'both' }}>
            <h4>Share article:</h4>
          </div>
          <br />
          <div>
            {this.renderShareButtons(window.location.href, article)}
          </div>
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

  renderShareButton = (ButtonToShare, ButtonIcon, props) => (
    <>
      <ButtonToShare className="share-button" {...props}>
        <ButtonIcon size={32} round />
      </ButtonToShare>
    </>
  );

  renderShareButtons = (url, article) => {
    const snippet = `${article.article.title}
${article.article.description}`;
    return (
      <>
        {
          this.renderShareButton(FacebookShareButton,
            FacebookIcon,
            { url, quote: snippet })
        }
        {
      this.renderShareButton(TwitterShareButton,
        TwitterIcon,
        { url, title: snippet, hashtags: ['AuthorsHaven', 'Technocrats'] })
    }
        {
      this.renderShareButton(WhatsappShareButton,
        WhatsappIcon,
        { url, title: snippet })
    }
        {
      this.renderShareButton(GooglePlusShareButton,
        GooglePlusIcon,
        { url, title: snippet })
    }
        {
      this.renderShareButton(EmailShareButton,
        EmailIcon,
        {
          url,
          subject: article.article.title,
          body: `${article.article.description}
${window.location.href}`,
        })
    }
      </>
    );
  };

  renderTagSpace() {
    return (
      <div className="tag space">
          Tags:
        {this.renderLink('ui tag label', 'New', '/articles/?tag=new')}
        {this.renderLink('ui tag label red', 'Upcoming', '/articles/?tag=upcoming')}
        {this.renderLink('ui tag label teal', 'Featured', '/articles/?tag=featured')}
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

  renderFollow(article) {
    return this.renderLink('follow',

      <div className="ui label space-bottom">
        <i className="users icon" />
          31 Followers
      </div>, `/${article.article.author.username}/followers`);
  }

  renderReadTime = article => (
    <p className="small">
      <strong><i className="clock icon" /></strong>
      {article.article.read_time}
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
    const { rating } = this.state;
    const { history, failing } = this.props;

    return (
      <div className="ui container">
        <div className="ui space borderless">
          <h1 className="increase-size">{article.article.title}</h1>
          {this.renderWrittenBy(article)}
          {this.renderReadTime(article)}
          {this.renderFollow(article)}
          {rateArticleComponent(this.onStarClick, rating, history, failing)}
          {this.renderArticleCover(article)}
          {this.renderCenteredGrid(article)}
          {this.renderUiGrid(article)}
          {this.renderTagSpace()}
          {this.renderComments(article)}
          {this.setInitialState(article)}
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
    document.title = success ? article.article.title : '';
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
  rateArticle: PropTypes.func.isRequired,
  ratingReset: PropTypes.func.isRequired,
  getArticle: PropTypes.func.isRequired,
  getComments: PropTypes.func,
  article: PropTypes.shape().isRequired,
  dislike: PropTypes.shape().isRequired,
  like: PropTypes.func.isRequired,
  reason: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
  processing: PropTypes.bool.isRequired,
  match: PropTypes.shape().isRequired,
  history: PropTypes.shape(),
  url: PropTypes.string.isRequired,
  failing: PropTypes.bool.isRequired,
};

ViewSingleArticleComponent.defaultProps = {
  history: null,
  getComments: null,
};

const matchDispatchToProps = dispatch => (
  {
    like: slug => (
      dispatch(likingActions.likeAction(slug))
    ),
    dislike: slug => (
      dispatch(dislikeActions.dislikeArticle(slug))
    ),

    rateArticle: (articlesData, token) => (
      dispatch(rateArticle(articlesData, token))
    ),
  }
);

function mapStateToProps(state) {
  return {
    likeReducer: state.likeReducer,
    dislikeReducer: state.dislikeReducer,
    failing: state.ratingReducer.failing,

  };
}

export default connect(mapStateToProps, matchDispatchToProps)(ViewSingleArticleComponent);
