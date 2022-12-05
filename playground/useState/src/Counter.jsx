import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count => count + 1);
  return (
    <>
      <h1>useState</h1>
      <p>Count is {count}</p>
      <button onClick={increase}>Click me to increase count</button>
    </>
  );
}

export default Counter;
