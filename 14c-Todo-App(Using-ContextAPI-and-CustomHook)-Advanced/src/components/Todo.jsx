import React from "react";
import styles from "./Todo.module.css";

import { useTodoContext } from "../custom-hooks/useTodoContext";

const Todo = ({ todo }) => {

  const {todos, setTodos} = useTodoContext();

 

  const deleteTodo =(title)=>{
    const newTodos = todos.filter((todo)=>todo.title!== title);
    setTodos(newTodos);
  }


  return (
    <div className={styles.todoContainer}
    >
      <div >
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
      </div>
      <button className={styles.submitBtn} onClick={()=>deleteTodo(todo.title)}>
        delete
      </button>
    </div>
  );
};

export default Todo;
