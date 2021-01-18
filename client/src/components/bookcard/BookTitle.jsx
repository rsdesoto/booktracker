import React, { useState, useEffect } from 'react';
import '../stylesheets/BookTitle.css'

function BookTitle(props) {
  const { title, author } = props

  return (
    <div className="title-box">
      <div>
        {title}
      </div>
      <div>
        {author}
      </div>
    </div>
  );
}

export default BookTitle
