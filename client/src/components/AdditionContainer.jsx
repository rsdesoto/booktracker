import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './stylesheets/AdditionContainer.css'

// will include add book and add author buttons
function AdditionContainer() {
  // get the full list of books and put into containers
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('/api/books').then(response => {
      setBooks(response.data)
    })
  }, [])

  console.log(books)

  return (
    <div className="addition-container">
      <div>
        Add Author
      </div>
      <div>
        Add Book
      </div>
    </div>
  );
}

export default AdditionContainer
