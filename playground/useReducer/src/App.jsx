import { useReducer } from "react";
import "./App.css";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const handleIncreamentClick = () => dispatch({ type: "increment" });
  const handleDecreamentClick = () => dispatch({ type: "decrement" });
  return (
    <div className="App">
      <h1>useReducer</h1>
      <p>Count: {state.count}</p>
      <button onClick={handleDecreamentClick}>-</button>
      <button onClick={handleIncreamentClick}>+</button>
    </div>
  );
}

export default App;
