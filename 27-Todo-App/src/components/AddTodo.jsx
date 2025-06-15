import React from 'react';
import styles from "./AddTodo.module.css";
import { useState } from 'react';

const AddTodo = ({addTodos, todos}) => {

  const [todo,setTodo] = useState({title:"", description:""});
  
  const handleTodoChange=(event)=>{
    setTodo({...todo, [event.target.name] : event.target.value});

  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    addTodos(todo);
    event.target.value="";
  }
  return (
    <form className={styles.addTodoContainer} onSubmit={handleSubmit}>
        <div className={styles.titleContainer}>
            <label htmlFor="title">Title: </label>
        <input type="text" name="title" id="title" onChange={handleTodoChange}/>
        </div>
        <div className={styles.descriptionContainer}>
            <label htmlFor="description">Description: </label>
        <textarea name="description" id="description" onChange={handleTodoChange}/>
        </div>

        <button type="submit" className={styles.submitBtn}>Add Todo</button>
    </form>
  )
}

export default AddTodo;