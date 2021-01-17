import React, { useState, useEffect } from 'react';
import axios from 'axios'
import AuthorCard from './AuthorCard'

function BookCard() {
  const id = 1
  const [book, setBook] = useState({});

  useEffect(() => {
    axios.get(`/api/books/${id}`).then(response => {
      // setBook(response.data)
      setBook(response.data)
    })
  }, [])



  return (
    <div>
      <div>
        {book.title}
      </div>
      <div>
        {book.id}
      </div>
      <div>
        {book.author_id}
      </div>
      {book.author_id &&
        <AuthorCard
        id={book.author_id}
        />
      }
    </div>
  );
}

export default BookCard
