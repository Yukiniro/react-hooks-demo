import { useState, useEffect } from "react";
import "./App.css";

function longCalcEffect() {
  let i = 0;
  while (i < 1000000000) {
    i++;
  }
}

function getBigNumber(value) {
  // longCalcEffect();
  // longCalcEffect();
  return value * 10;
}

let renderCount = 0;

function App() {
  const [, setBaseNumber] = useState(1);
  const handleClick = () => {
    setBaseNumber(parseInt(Math.random(0, 1) * 100));
  };

  useEffect(() => {
    console.log("render");
  });

  renderCount++;
  const startTime = Date.now();
  const number = getBigNumber(1);
  const endTime = Date.now();
  const usedTime = endTime - startTime;

  return (
    <div className="App">
      <h1>useMemo && useCallback</h1>
      <button onClick={handleClick}>Refresh</button>
      <p>RenderCount is: {renderCount}</p>
      <p>BigNumber is: {number}</p>
      <p>Used Time is: {usedTime}ms</p>
    </div>
  );
}

export default App;
