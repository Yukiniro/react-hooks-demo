import { useRef, useState } from "react";
import "./App.css";

function App() {
  const titleRef = useRef(null);
  const [titleWidth, setTitleWidth] = useState(0);

  const handleClick = () => {
    setTitleWidth(titleRef.current.clientWidth);
  };

  return (
    <div className="App">
      <h1 ref={titleRef}>useRef</h1>
      <button onClick={handleClick}>Update Width</button>
      <p>h1 width is: {titleWidth}</p>
    </div>
  );
}

export default App;
