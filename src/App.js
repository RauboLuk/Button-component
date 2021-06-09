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
        <Button disabled />
        <Button variant="text" disabled />
        <Button startIcon="access_alarm" />
        <Button endIcon="local_grocery_store" />
        <Button size="sm" />
        <Button size="md" />
        <Button size="lg" />
        <Button color="default" />
        <Button color="primary" />
        <Button color="secondary" />
        <Button color="danger" />
      </header>
    </div>
  );
}

export default App;
