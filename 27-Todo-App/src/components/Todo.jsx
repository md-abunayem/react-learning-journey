import React from "react";
import styles from "./Todo.module.css";

const Todo = ({ todo, deleteTodo }) => {


  const handleDelete =()=>{
    deleteTodo(todo.title);
  }


  return (
    <div className={styles.todoContainer}
    >
      <div >
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
      </div>
      <button className={styles.submitBtn} onClick={handleDelete}>
        delete
      </button>
    </div>
  );
};

export default Todo;
