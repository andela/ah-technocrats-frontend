import React from 'react';

const renderActionButtons = (article,
  likeArticle, dislikeArticle, renderActionButton, renderLink) => (
    <div className="ui right floated column inline" style={{ display: 'contents' }}>
      {renderActionButton(
        'ui tiny toggle circular green button',
        'like',
        `Like   ${article.article.like.likeCount}`,
        'thumbs up icon', likeArticle,
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
