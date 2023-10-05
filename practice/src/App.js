import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Page1() {
  return (
    <div>
      <h1>페이지1 입니다.</h1>
    </div>
  );
}

function Page2() {
  return (
    <div>
      <h1>페이지1 입니다.</h1>
    </div>
  );
}

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
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/Page1">1번페이지로</Link>
          </li>
          <li>
            <Link to="/Page2">2번페이지로</Link>
          </li>
        </ul>
      </nav>

      <Route>
        <Route path="/Page1" Component={Page1}></Route>
        <Route path="/Page2" Component={Page2}></Route>
      </Route>
    </div>
  );
}

export default App;
