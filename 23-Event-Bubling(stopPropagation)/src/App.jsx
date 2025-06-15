import { useState } from "react";
import "./App.css";

// When a button inside a parent div is clicked, the event first triggers the button's onClick,
// then "bubbles up" to the parent div's onClick (event bubbling).
// To prevent the parent from also reacting to the child's click event, use e.stopPropagation() in the child handler.

function App() {
  const [count, setCount] = useState(0);

  const handleChildClick = (e) => {
    setCount(count + 1);
    console.log(e);
    e.stopPropagation();
  };

  const handleParentClick = (e) => {
    console.log(e);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "pink",
          padding: "40px",
          textAlign: "center",
        }}
        onClick={handleParentClick}
      >
        <h1>Parent div</h1>
        <button onClick={(e) => handleChildClick(e)}>Count:{count}</button>
      </div>
    </>
  );
}

export default App;
