import logo from 'assets/images/logo.svg';
import Button from 'components/Button';
import './App.css';
import { MAX_AGE } from 'constants/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        Max Age is {MAX_AGE}  
        <Button></Button>
      </header>
    </div>
  );
}

export default App;
