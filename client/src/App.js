import logo from './logo.svg';
import './App.css';

import Test from './components/Test.jsx'
import Example from './components/Test2.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Test />
        <Example />
      </header>
    </div>
  );
}

export default App;
