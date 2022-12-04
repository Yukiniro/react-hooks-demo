import { useState, useLayoutEffect, useRef } from "react";
import "./App.css";
import rgbToHex from "rgb-hex";
import { comelog } from "comelog";

function App() {
  const [color, setColor] = useState("#ed5736"); // #ED5736 rgb(127,236,173)
  const titleRef = useRef(null);
  const handleClick = () =>
    setColor(color => (color === "#ed5736" ? "#7fecad" : "#ed5736"));

  useLayoutEffect(() => {
    const bkColor = `#${rgbToHex(titleRef.current.style.background)}`;
    if (bkColor === color) {
      comelog.info(bkColor);
    } else {
      comelog.error(bkColor);
    }
  });

  const style = { background: color };

  return (
    <div className="App">
      <h1 style={style} ref={titleRef}>
        useLayoutEffect
      </h1>
      <p style={style}>Current color is: {color}</p>
      <button onClick={handleClick}>Change Color</button>
    </div>
  );
}

export default App;
