import React, { useState, useEffect } from 'react';
import axios from 'axios'

function AuthorCard(props) {
  const [author, setAuthor] = useState({});

  useEffect(() => {
    axios.get(`/api/authors/${props.id}`).then(response => {
      // setBook(response.data)
      setAuthor(response.data)
    })
  }, [props])

  return (
    <div>
      {author.name}
    </div>
  );
}

export default AuthorCard
