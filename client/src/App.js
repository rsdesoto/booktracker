import logo from './logo.svg';
import './App.css';

import BookContainer from './components/BookContainer.jsx'
import AdditionContainer from './components/AdditionContainer.jsx'

function App() {
  return (
    <div className="App">
      <AdditionContainer />
      <BookContainer />
    </div>
  );
}

// plan of attack -
// get the front page - call to /books to get book list
// for each bookcard, send in the book id
// for each bookcard, take the ID and make calls to authors, progresses, ratings to get the wheres based on individual Book info (where book_id = book_id, where id = author_id)

export default App;
