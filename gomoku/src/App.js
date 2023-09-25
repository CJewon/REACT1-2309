import logo from "./logo.svg";
import "./App.css";
import "./css/reset.css";
import "./css/gomoku.css";
import LineContainer from "./LineContainer";
import CellContainer from "./CellContainer";

function App() {
  const 칸수 = 19;

  return (
    <div className="App">
      <div className="board">
        <LineContainer 칸수={칸수}></LineContainer>
        <CellContainer></CellContainer>
      </div>
    </div>
  );
}

export default App;
