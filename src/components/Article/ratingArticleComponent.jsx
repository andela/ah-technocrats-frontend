import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { toast } from 'react-semantic-toasts';

const rateArticleComponent = (onStarClick, rating, history, failing) => (
  <div className="right float same-line" history={history}>
    <p className="bold">Rate article</p>
    { failing ? toast({
      type: 'warning',
      icon: 'sign-in',
      title: 'Session has Expired.',
      description: 'Please Log in to Continue.',
      time: 3000,
    }) : null }
    <StarRatingComponent
      id="star"
      name="rate1"
      starColor="black"
      emptyStarColor="grey"
      starCount={5}
      value={rating}
      onStarClick={onStarClick}
    />
  </div>
);

export default rateArticleComponent;
