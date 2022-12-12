import { useState, useTransition } from "react";
import "./App.css";
import List from "./List";

function App() {
  const [number, setNumber] = useState(0);
  const [transitionNumber, setTransitionNumber] = useState(number);
  const [isPending, startTransition] = useTransition();

  const handleChange = e => {
    const value = e.target.value;
    setNumber(value);
    // setTransitionNumber(value);
    startTransition(() => {
      setTransitionNumber(value);
    });
  };

  return (
    <div className="App">
      <h1>useTransition</h1>
      <p>Realtime: {number}</p>
      <p>Transition: {transitionNumber}</p>
      <div>
        <input
          type="range"
          min={0}
          max={10000}
          value={number}
          onChange={handleChange}
        />
      </div>
      <p className="loading">{isPending ? "Loading..." : ""}</p>
      <List number={transitionNumber} />
    </div>
  );
}

export default App;
