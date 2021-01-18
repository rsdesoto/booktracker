import React, { useState, useEffect } from 'react';
import axios from 'axios'
import BookTitle from './BookTitle'
import BookReview from './BookReview'
import BookProgress from './BookProgress'

import '../stylesheets/BookCard.css'

function BookCard(props) {
  const { title, author, rating, review, progress } = props

  return (
    <div className="book-card">
      <div>
        <BookTitle
          title={title}
          author={author}
        />
      </div>
      <div>
        <BookReview
          review={review}
          rating={rating}
        />
      </div>
      <div>
        <BookProgress
          progress={progress}
        />
      </div>
    </div>
  );
}

export default BookCard
