import { useState } from "react";
import "./App.css";
import { themes, ThemeContext } from "./ThemoContext";
import Text from "./Text";

function App() {
  const [theme, setTheme] = useState(themes.light);

  const handleClick = () => {
    if (theme === themes.light) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <h1>useContext</h1>
        <button onClick={handleClick}>Toggle Theme</button>
        <Text />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
