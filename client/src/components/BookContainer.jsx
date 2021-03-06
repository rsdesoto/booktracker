import React, { useState, useEffect } from 'react';
import axios from 'axios'

import BookCard from './bookcard/BookCard'

import './stylesheets/BookContainer.css'

function BookContainer() {
  // get the full list of books and put into containers
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('/api/books').then(response => {
      setBooks(response.data)
    })
  }, [])

  console.log(books)

  return (
    <div className="book-container">
    {
      books.map((book, i) => {
        return(
          <BookCard
            title={book.title}
            author={book.author.name}
            rating={book?.rating?.rating || ''}
            review={book?.rating?.review || ''}
            progress={book?.progress || ''}
            key={book.id}
          />
        )
      })
    }
    </div>
  );
}

export default BookContainer
