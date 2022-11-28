import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count => count + 1);

  useEffect(() => {
    console.log(`Render Count: ${count}`);
  }, [count]);

  return (
    <div className="App">
      <h1>useEffect</h1>
      <p>Open chrome devtools to check the log info.</p>
      <button onClick={increase}>Click me to increase count</button>
    </div>
  );
}

export default App;
