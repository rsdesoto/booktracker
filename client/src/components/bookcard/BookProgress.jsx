import React, { useState, useEffect } from 'react';

import '../stylesheets/BookProgress.css'

function BookProgress(props) {
  const { progress } = props

  const totalpages = progress?.totalpages || 0
  const pagesread = progress?.pagesread || 0
  const status = progress?.status || 'Unfinished'

  return (
    <div className="book-progress">
      <div>
        {`Total pages: ${totalpages}`}
      </div>
      <div>
        {`Pages read: ${pagesread}`}
      </div>
      <div>
        {`Status: ${status}`}
      </div>
    </div>
  );
}

export default BookProgress
