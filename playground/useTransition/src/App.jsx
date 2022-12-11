import { useState, useTransition } from "react";
import "./App.css";

function longCalcEffect() {
  let i = 0;
  while (i < 1000000000) {
    i++;
  }
}

function App() {
  const [text, setText] = useState("hello world");
  const [transitionText, setTransitionText] = useState(text);
  const [isPending, startTransition] = useTransition();

  const handleChange = e => {
    const value = e.target.value;
    setText(value);
    startTransition(() => {
      setTransitionText(value);
    });
  };

  return (
    <div className="App">
      <h1>useTransition</h1>
      {isPending ? <div>Loading</div> : <p>Transiton: {transitionText}</p>}
      <p>Realtime: {text}</p>
      <div>
        <input value={text} onChange={handleChange} />
      </div>
    </div>
  );
}

export default App;
