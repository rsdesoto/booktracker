import React, { useState, useEffect } from 'react';
import axios from 'axios'
import AuthorCard from './AuthorCard'

function BookCard(props) {
  const { title, author, rating, review } = props

  return (
    <div>
      <div>
        {title}
      </div>
      <div>
        {author}
      </div>
      <div>
        {rating}
      </div>
      <div>
        {review}
      </div>
    </div>
  );
}

export default BookCard
