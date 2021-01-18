import React, { useState, useEffect } from 'react';

import '../stylesheets/BookReview.css'

function BookCard(props) {
  const { review, rating } = props

  console.log(review)

  return (
    <div className="book-review">
      <div className="book-review-rating">
      {rating &&
        <div>
          {`${rating} / 5`}
        </div>
      }
      </div>
      <div>
        {review}
      </div>
    </div>
  );
}

export default BookCard
