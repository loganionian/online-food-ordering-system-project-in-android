// reviewsComponent.js
import React from 'react';

const ReviewsComponent = ({ reviews }) => {
    const totalReviews = reviews.length;
    const positiveReviews = reviews.filter(review => review.rating >= 4).length;
    const percentage = totalReviews ? (positiveReviews / totalReviews) * 100 : 0;

    return (
        <div>
            <h2>Reviews</h2>
            <p>{totalReviews} total reviews</p>
            <p>{percentage.toFixed(2)}% of reviews are positive</p>
        </div>
    );
};

export default ReviewsComponent;