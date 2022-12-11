import { useRef } from "react";
import "./App.css";
import Child from "./Child";

function App() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className="App">
      <h1>useReducer</h1>
      <div>
        <button onClick={handleClick}>Focus Child</button>
      </div>
      <Child ref={inputRef} />
    </div>
  );
}

export default App;
