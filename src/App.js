import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          TODO: update app by following{" "}
          <a
            className="App-link"
            href="https://youtu.be/UP6MfkU3Bkg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Moralis tutorial
          </a>
          .
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
