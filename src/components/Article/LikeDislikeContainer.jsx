import React from 'react';
import LikeDislikeArticleComponent from './LikeDislikeErrorComponent';


const renderActionButtons = (article,
  likeArticle, dislikeArticle, renderActionButton, renderLink, likeFailing, dislikeFailing) => (
    <div className="ui right floated column inline" style={{ display: 'contents' }}>
      <LikeDislikeArticleComponent likeFailing={likeFailing} dislikeFailing={dislikeFailing} />
      {renderActionButton(
        'ui tiny toggle circular green button',
        'like',
        `Like   ${article.article.like.likeCount}`,
        'thumbs up icon',
        likeArticle,
      )}
      {renderActionButton(
        'ui tiny toggle circular red button',
        'dislike',
        `Dislike   ${article.article.dislike.dislikeCount}`,
        'thumbs down icon', dislikeArticle,
      )}
      {renderActionButton('ui tiny circular yellow button', 'favorite', 'Favorite', 'star icon')}
      {renderActionButton('ui tiny circular yellow button', 'favorite', 'Bookmark', 'bookmark icon')}
      {renderLink(
        '',
        renderActionButton(
          'ui tiny circular blue icon button',
          'Report',
          'Report',
          'eye icon',
        ), `/Report/${article.article.article_slug}`,
      )}
    </div>
);


export default renderActionButtons;
