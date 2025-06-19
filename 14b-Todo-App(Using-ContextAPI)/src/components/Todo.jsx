import React from "react";
import styles from "./Todo.module.css";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Todo = ({ todo }) => {

  const {todos, setTodos} = useContext(TodoContext);

 

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
