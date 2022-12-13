import { useState, useEffect } from "react";

function useCursor() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const func = e => {
      setCursor({
        x: e.x,
        y: e.y,
      });
    };
    window.addEventListener("mousemove", func);
    return () => {
      window.removeEventListener("mousemove", func);
    };
  }, []);

  return cursor;
}

export default useCursor;
