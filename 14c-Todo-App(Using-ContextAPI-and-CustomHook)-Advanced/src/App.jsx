import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

import styles from "./App.module.css";

import { TodoContext } from "./context/TodoContext";
import TodoProvider from "./context/TodoContext";


function App() {
  return (
    <TodoProvider>
      <div className={styles.app}>
        <h1>Todo App</h1>
        <AddTodo></AddTodo>
        <Todos></Todos>
      </div>
    </TodoProvider>
  );
}

export default App;
