import React, { useState, useEffect } from 'react';
import axios from 'axios'

// will include add book and add author buttons
function NewBook() {
  // get the full list of books and put into containers
  const [authors, setAuthors] = useState([]);
  const [bookAuthor, setBookAuthor] = useState(0);
  const [newBookName, setNewBookName] = useState('');

  const [totalPages, setTotalPages] = useState(0);
  const [pagesRead, setPagesRead] = useState(0);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');


  const updateBookName = (e) => {
    setNewBookName(e.target.value)
  }

  const authorOnchange = (e) => {
    setBookAuthor(e.target.value)
  }

  const updateTotalPages = (e) => {
    setTotalPages(e.target.value)
  }

  const updatePagesRead = (e) => {
    setPagesRead(e.target.value)
  }

  const updateRating = (e) => {
    setRating(e.target.value)
  }

  const updateReview = (e) => {
    setReview(e.target.value)
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
      <div>
        Title:
        <input
          type="text"
          id="new-book"
          name="new-book"
          value={newBookName}
          onChange={updateBookName}
        />
      </div>
      <div>
        Pages:
        <input
          type="number"
          id="total-pages"
          name="total-pages"
          value={totalPages}
          onChange={updateTotalPages}
        />
      </div>
      <div>
        Pages Read:
        <input
          type="number"
          id="pages-read"
          name="pages-read"
          value={pagesRead}
          onChange={updatePagesRead}
        />
      </div>
      <div>
        Review:
        <input
          type="text"
          id="review"
          name="review"
          value={review}
          onChange={updateReview}
        />
      </div>
      <div>
        Rating:
        <input
          type="number"
          id="rating"
          name="rating"
          value={rating}
          onChange={updateRating}
        />
      </div>

      <div
        onClick={setBookName}
      >
        Add Book
      </div>
    </div>
  );
}

export default NewBook
