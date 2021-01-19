import React, { useState, useEffect } from 'react';
import axios from 'axios'

// will include add book and add author buttons
function NewAuthor() {
  // get the full list of books and put into containers
  const [newAuthorName, setNewAuthorName] = useState('');

  const updateAuthorName = (e) => {
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
    <div>
      <input
        type="text"
        id="new-author"
        name="new-author"
        value={newAuthorName}
        onChange={updateAuthorName}
      />
      <div
        onClick={sendAuthorName}
      >
        Add Author
      </div>
    </div>
  );
}

export default NewAuthor
