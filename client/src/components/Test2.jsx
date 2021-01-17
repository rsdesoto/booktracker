import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [books, setBooks] = useState([]);

  console.log(count)

  useEffect(() => {
    axios.get('/api/books').then(response => {
      setBooks(response.data)
    })
  }, [])

  console.log(books)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example
