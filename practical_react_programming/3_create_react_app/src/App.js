import logo from './logo.svg';
import './App.css';
import data from './data.json'

function App() {
  function onClick() {
    console.log({data})
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={onClick}>데이터 보여주세요! </button>
        <p>
          Hello :) I am Lin!! 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
