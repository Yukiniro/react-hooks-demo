import { useState, useDebugValue } from "react";

function useCount() {
  const [count, setCount] = useState(0);
  const handleIncreamentClick = () => setCount(count => count + 1);
  const handleDecreamentClick = () => setCount(count => count - 1);
  useDebugValue(`Cunstom Count State: ${count}`);
  return [count, handleIncreamentClick, handleDecreamentClick];
}

export default useCount;
