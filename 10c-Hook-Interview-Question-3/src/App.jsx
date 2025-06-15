import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(1);
  // const [multiply, setMultiply] = useState(counter);
  let multiply = counter * 4; //after counter updation--the value of mulltiply is newly updated at every rerender of App()--so, if we do not use useState for multiplivation---there is no issue --- because multiply is updated at every re-render

  const multiplybyfive = () => {
    // setMultiply(counter * 4);
    setCounter((counter) => counter + 1);
  };
  return (
    <>
      <h1>Counter</h1>
      <p>Main Value: {counter}</p>
      <p>Multiplied Value: {multiply}</p>
      <button onClick={multiplybyfive}>Multiplied by 4: {multiply}</button>
    </>
  );
}

export default App;
