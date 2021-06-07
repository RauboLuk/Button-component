import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button />
        <Button outline />
        <Button variant="text" />
      </header>
    </div>
  );
}

export default App;
