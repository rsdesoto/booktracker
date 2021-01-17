import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  

  useEffect(() => {
    axios.get('/api/books').then(response => {
      setBooks(response.data)
    })
    axios.get('/api/authors').then(response => {
      setAuthors(response.data)
    })
  }, [])

  console.log(books)
  console.log(authors)

  return (
    <div>
      Testing some stuff
    </div>
  );
}

export default Example
