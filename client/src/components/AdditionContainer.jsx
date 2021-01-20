import React, { useState, useEffect } from 'react';
import axios from 'axios'

import NewAuthor from './additions/NewAuthor'
import NewBook from './additions/NewBook'

import './stylesheets/AdditionContainer.css'

// will include add book and add author buttons
function AdditionContainer() {
  // get the full list of books and put into containers
  const [newAuthorName, setNewAuthorName] = useState('');

  const updateAuthorName = (e) => {
    // console.log("hello world")
    // console.log(e.target.value)
    setNewAuthorName(e.target.value)
  }

  const sendAuthorName = () => {
    console.log(newAuthorName)
    axios.post('/api/authors', {
      name: newAuthorName
    }).then(
      setNewAuthorName('')
    )
  }

  return (
    <div className="addition-container">
      <div>

        <NewAuthor />
      </div>
      <div>
        <NewBook />
      </div>
    </div>
  );
}

export default AdditionContainer
