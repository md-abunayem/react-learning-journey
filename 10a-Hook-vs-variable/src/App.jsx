import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  //React hooks updates the UI but varable can not update the UI only can update value and the upadated value can see only on console
  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
    console.log("From addValue", counter);
    

    //setCounter(prevCounter => (prevCounter > 0 ? prevCounter - 1 : 0));  we can also use this 
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
