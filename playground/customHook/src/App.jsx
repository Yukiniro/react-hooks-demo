import "./App.css";
import useCursor from "./hooks/useCursor";

function App() {
  const { x, y } = useCursor();
  return (
    <div className="App">
      <h1>Custom Hook</h1>
      <p>x: {x}</p>
      <p>y: {y}</p>
    </div>
  );
}

export default App;
