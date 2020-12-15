import FileUpload from 'components/FileUpload';

import { MAX_AGE } from 'constants/index';
import logo from 'assets/images/logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <img src={logo} alt="React Logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      Max Age is {MAX_AGE}.<FileUpload></FileUpload>
      <hr></hr>
    </div>
  );
}

export default App;
