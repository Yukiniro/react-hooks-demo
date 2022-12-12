import { useState } from "react";
import "./App.css";
import useCount from "./Counter";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, handleIncreamentClick2, handleDecreamentClick2] = useCount();
  const handleIncreamentClick1 = () => setCount1(count => count + 1);
  const handleDecreamentClick1 = () => setCount1(count => count - 1);
  return (
    <div className="App">
      <h1>useDebugValue</h1>
      <p>Count: {count1}</p>
      <button onClick={handleDecreamentClick1}>-</button>
      <button onClick={handleIncreamentClick1}>+</button>
      <p>Count: {count2}</p>
      <button onClick={handleDecreamentClick2}>-</button>
      <button onClick={handleIncreamentClick2}>+</button>
    </div>
  );
}

export default App;
