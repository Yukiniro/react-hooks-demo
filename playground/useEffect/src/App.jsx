import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#ed5736"); // #ED5736 rgb(127,236,173)
  const titleRef = useRef(null);
  const handleClick = () =>
    setTimeout(() => {
      setColor(color => (color === "#ed5736" ? "#7fecad" : "#ed5736"));
    });

  window.testClick = handleClick;

  // const handleClick = () =>
  //   setColor(color => (color === "#ed5736" ? "#7fecad" : "#ed5736"));

  useEffect(() => {
    // console.time();
    // let i = 0;
    // while (i < 1000000000) {
    //   i++;
    // }
    // console.timeEnd();
    titleRef.current.style.background = "#ed5736";
  });

  const style = { background: color };

  return (
    <div className="App">
      <h1 style={style} ref={titleRef}>
        useEffect
      </h1>
      <p style={style}>Current color is: {color}</p>
      <button onClick={handleClick}>Change Color</button>
    </div>
  );
}

export default App;
