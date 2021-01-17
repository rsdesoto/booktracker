import React, { useState, useEffect } from 'react';
import axios from 'axios'

import BookCard from './bookcard/BookCard'

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
    <div>
      Testing some stuff
      <BookCard />
    </div>
  );
}

export default BookContainer
