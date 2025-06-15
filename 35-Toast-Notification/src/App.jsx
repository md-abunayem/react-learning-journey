import React from "react";

import { ToastContainer, toast } from "react-toastify";

function App() {
  const addTodo = () => {
    toast("New todo is added")
  };

  const deleteTodo = () => {
    toast("Deleted todo")
  };


  return (
    <>
      <h3>Todo App</h3>
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={deleteTodo}>Delete Todo</button>
      <br/>
      <ToastContainer/>
    </>
  );
}

export default App;
