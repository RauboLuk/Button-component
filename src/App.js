import "./App.css";
import Button from "./Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Buttons</h1>
      </header>
      <main className="Main">
        <section>
          <p>{`<Button />`}</p>
          <Button />
        </section>
        <section>
          <p>{`<Button variant=”outline” />`}</p>
          <Button variant="outline" />
        </section>
        <section>
          <p>{`<Button variant=”text” />`}</p>
          <Button variant="text" />
        </section>
        <section>
          <p>{`<Button disableShadow />`}</p>
          <Button disableShadow />
        </section>
        <section>
          <p>{`<Button disabled />`}</p>
          <Button disabled />
        </section>
        <section>
          <p>{`<Button variant="text" disabled />`}</p>
          <Button variant="text" disabled />
        </section>
        <section>
          <p>{`<Button startIcon="access_alarm" />`}</p>
          <Button startIcon="access_alarm" />
        </section>
        <section>
          <p>{`<Button endIcon="local_grocery_store" />`}</p>
          <Button endIcon="local_grocery_store" />
        </section>
        <section>
          <p>{`<Button size="sm" />`}</p>
          <Button size="sm" />
        </section>
        <section>
          <p>{`<Button size="md" />`}</p>
          <Button size="md" />
        </section>
        <section>
          <p>{`<Button size="lg" />`}</p>
          <Button size="lg" />
        </section>
        <section>
          <p>{`<Button color="default" />`}</p>
          <Button color="default" />
        </section>
        <section>
          <p>{`<Button color="primary" />`}</p>
          <Button color="primary" />
        </section>
        <section>
          <p>{`<Button color="secondary" />`}</p>
          <Button color="secondary" />
        </section>
        <section>
          <p>{`<Button color="danger" />`}</p>
          <Button color="danger" />
        </section>
        <section>
          <p>{`<Button color="secondary" variant=”outline” />`}</p>
          <Button color="secondary" variant="outline" />
        </section>
        <section>
          <p>{`<Button color="danger" disableShadow />`}</p>
          <Button color="danger" disableShadow />
        </section>
        <section>
          <p>{`<Button color="primary" variant="text" />`}</p>
          <Button color="primary" variant="text" />
        </section>
      </main>
    </div>
  );
}

export default App;
