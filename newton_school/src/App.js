import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "Peter";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Hello {name} this is my first react application
      </header>
    </div>
  );
}

export default App;
