import { useState } from "react";
import Style from "./App.module.less";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className={Style.app}>
      <p className={Style.title}>Thank to use vite-react-template</p>
      <p>
        <button
          type="button"
          className={Style.button}
          onClick={() => setCount(count => count + 1)}
        >
          count is: {count}
        </button>
      </p>
    </div>
  );
}

export default App;
