import React from 'react';
import { toast } from 'react-semantic-toasts';

const LikeDislikeArticleComponent = likeFailing => (
  <div className="right float same-line">
    { likeFailing.likeFailing ? toast({
      type: 'warning',
      icon: 'sign-in',
      title: 'Session has Expired.',
      description: 'Please Log in to Continue.',
      time: 3000,
    }) : null }
  </div>
);

export default LikeDislikeArticleComponent;
