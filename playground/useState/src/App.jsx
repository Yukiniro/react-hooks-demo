import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count => count + 1);
  return (
    <div className="App">
      <h1>useState</h1>
      <p>Count is {count}</p>
      <button onClick={increase}>Click me to increase count</button>
    </div>
  );
}

export default App;
