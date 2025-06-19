import React from 'react';
import styles from "./AddTodo.module.css";
import { useState,useContext } from 'react';


import { TodoContext } from '../context/TodoContext';


const AddTodo = () => {


  const {todos, setTodos} = useContext(TodoContext);

  const [todo,setTodo] = useState({title:"", description:""});
  
  const handleTodoChange=(event)=>{
    setTodo({...todo, [event.target.name] : event.target.value});

  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    addTodos(todo);
    event.target.value="";
  }

   const addTodos = (todo) =>{
    setTodos([...todos,todo]);
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