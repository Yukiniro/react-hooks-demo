import { useState, useEffect } from "react";
import "./App.css";
import Section from "../../../common/Section";
import Row from "../../../common/Row";

function App() {
  const [name, setName] = useState("Jack");
  const [surname, setSurname] = useState("Tom");
  const [width, setWidth] = useState(0);

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleSurnameChange = e => {
    setSurname(e.target.value);
  };

  useEffect(() => {
    const updateWidth = () => {
      const width = document.body.getBoundingClientRect().width;
      setWidth(width);
    };
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <Section>
      <h1 className="title">Function Based Component</h1>
      <h2 className="section-title">Window Width: {width}px</h2>
      <Row title="Name">
        <input value={name} onChange={handleNameChange} />
      </Row>
      <Row title="Surname">
        <input value={surname} onChange={handleSurnameChange} />
      </Row>
    </Section>
  );
}

export default App;
