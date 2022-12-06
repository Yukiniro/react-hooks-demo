import { useState, useMemo, useEffect, useCallback } from "react";
import "./App.css";
import { comelog } from "comelog";

function longCalcEffect() {
  let i = 0;
  while (i < 1000000000) {
    i++;
  }
}

function getBigNumber(value) {
  longCalcEffect();
  longCalcEffect();
  return value * 10;
}

function App() {
  const [, setBaseNumber] = useState(1);

  // const handleClick = useCallback(() => {
  //   setBaseNumber(parseInt(Math.random(0, 1) * 100));
  // }, []);

  const handleClick = useCallback(() => {
    setBaseNumber(parseInt(Math.random(0, 1) * 100));
  }, []);

  const startTime = Date.now();
  const number = useMemo(() => getBigNumber(1), []);
  const endTime = Date.now();
  const usedTime = endTime - startTime;

  useEffect(() => {
    comelog.info("Render");
  });

  useEffect(() => {
    comelog.warn("Render only mount or handleClick changed");
  }, [handleClick]);

  return (
    <div className="App">
      <h1>useMemo && useCallback</h1>
      <button onClick={handleClick}>Refresh</button>
      <p>BigNumber is: {number}</p>
      <p>Used Time is: {usedTime}ms</p>
    </div>
  );
}

export default App;
