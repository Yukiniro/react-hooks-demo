import { useDeferredValue, useState, useEffect, startTransition } from "react";
import "./App.css";
import { comelog } from "comelog";

function App() {
  const [text, setText] = useState("hello world");
  const handleChange = e => {
    setText(e.target.value);
  };
  const deferrdValue = useDeferredValue(text);

  useEffect(() => {
    if (deferrdValue !== text) {
      comelog.warn("isDeferred");
    } else {
      comelog.info("isEqual");
    }
  });

  const handleClick = e => startTransition(() => setText(e.target.value));

  return (
    <div className="App">
      <h1>useDeferredValue</h1>
      <p>Deferred: {deferrdValue}</p>
      <p>Real Time: {text}</p>
      <div>
        <input value={text} onChange={handleChange} />
      </div>
      <button onClick={handleClick}>Transition Reset</button>
    </div>
  );
}

export default App;
