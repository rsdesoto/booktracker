import React, { useState, useEffect } from 'react';
import axios from 'axios'

// will include add book and add author buttons
function NewBook() {
  // get the full list of books and put into containers
  const [authors, setAuthors] = useState([]);
  const [bookAuthor, setBookAuthor] = useState(0);
  const [newBookName, setNewBookName] = useState('');

  const updateBookName = (e) => {
    setNewBookName(e.target.value)
  }

  const authorOnchange = (e) => {
    setBookAuthor(e.target.value)
  }

  const setBookName = () => {
    axios.post('/api/books', {
      title: newBookName,
      author_id: bookAuthor
    }).then(
      setNewBookName('')
    )
  }

  useEffect(() => {
    axios.get('/api/authors').then(response => {
      setAuthors(response.data)
    })
  }, [])

  console.log(authors)

  return (
    <div>
      Select an author:
      <select onChange={authorOnchange} name="author-dropdown" id="author-dropdown">
        {authors.map((author) => {
          return(
            <option
              key={author.id}
              value={author.id}
            >
              {author.name}
            </option>
          )
        })}
      </select>

      <input
        type="text"
        id="new-book"
        name="new-book"
        value={newBookName}
        onChange={updateBookName}
      />

      <div
        onClick={setBookName}
      >
        Add Book
      </div>
    </div>
  );
}

export default NewBook
