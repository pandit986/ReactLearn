import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    if (counter >= 20) return;
    counter = counter + 1;
    setCounter(counter);
  };
  const removeValue = () => {
    // counter = counter - 1;
    if (counter < 1) return;
    setCounter(--counter);
  };
  return (
    <>
      <h1>Chai Aur Code</h1>
      <h2> Counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
