import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button />
        <Button variant="outline" />
        <Button variant="text" />
        <Button disableShadow />
      </header>
    </div>
  );
}

export default App;
