import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  //React hooks updates the UI but varable can not update the UI only can update value and the upadated value can see only on console
  const addValue = () => {
    setCounter(counter + 1); // 0 + 1 → schedules update to 1
    setCounter(counter + 1); // 0 + 1 → schedules update to 1
    setCounter(counter + 1); // 0 + 1 → schedules update to 1
    setCounter(counter + 1); // 0 + 1 → schedules update to 1
    setCounter(counter + 1); // 0 + 1 → schedules update to 1

    /*When you call setCounter(counter + 1) multiple times in the same synchronous function, all the calls will use the same initial value of counter because React state updates are asynchronous and batched.*/

    setCounter((prev) => prev + 1); // 1 (from previous batch) + 1 → 2
    setCounter((prev) => prev + 1); // 2 + 1 → 3
    setCounter((prev) => prev + 1); // 3 + 1 → 4
  };

  const removeValue = () => {
    if (counter < 0) {
      setCounter(0);
    } else {
      // setCounter(counter - 1);
      setCounter((prevCounter) => prevCounter + 1); // use functional update
    }
    console.log("From removeValue:", counter);
  };

  return (
    <>
      <h1>Counter</h1>
      <p>Value: {counter}</p>
      <button onClick={addValue}>add value: {counter}</button>
      <br />
      <br></br>
      <button onClick={removeValue}>remove value: {counter}</button>
    </>
  );
}

export default App;
