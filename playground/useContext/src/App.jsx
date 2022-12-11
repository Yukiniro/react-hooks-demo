import { useState } from "react";
import "./App.css";
import { themes, ThemeContext } from "./ThemoContext";
import { TextContext } from "./TextContext";
import Text from "./Text";

function App() {
  const [theme, setTheme] = useState(themes.light);
  const [text, setText] = useState("hello world");

  const handleClick = () => {
    if (theme === themes.light) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };

  const handleChange = e => setText(e.target.value);

  return (
    <ThemeContext.Provider value={theme}>
      <TextContext.Provider value={text}>
        <div className="App">
          <h1>useContext</h1>
          <button onClick={handleClick}>Toggle Theme</button>
          <input onChange={handleChange} value={text} />
          <Text />
        </div>
      </TextContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
