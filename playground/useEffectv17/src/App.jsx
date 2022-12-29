import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#ed5736"); // #ED5736 rgb(127,236,173)
  const titleRef = useRef(null);
  const handleClick = () =>
    setColor(color => (color === "#ed5736" ? "#7fecad" : "#ed5736"));

  window.handleClick = handleClick;

  useEffect(() => {
    titleRef.current.style.background = "#000000";
  });

  const style = { background: color };

  return (
    <div className="App">
      <h1 style={style} ref={titleRef}>
        useEffect react@17
      </h1>
      <p style={style}>Current color is: {color}</p>
      <button onClick={handleClick}>Change Color</button>
    </div>
  );
}

export default App;
