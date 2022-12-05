import { useState } from "react";

function App() {
  const [info, setInfo] = useState({ name: "Yuki", age: 18 });
  const handleNameChange = e => {
    setInfo({ ...info, name: e.target.value });
  };
  const handleAgeChange = e => {
    setInfo({ ...info, age: e.target.value });
  };

  const { name, age } = info;

  return (
    <div>
      <p>Name: {name}</p>
      <p>age: {age}</p>
      <input onChange={handleNameChange} value={name} />
      <input type="number" onChange={handleAgeChange} value={age} />
    </div>
  );
}

export default App;
