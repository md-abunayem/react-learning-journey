import { useState } from 'react'
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

import styles from './App.module.css'

function App() {

  const [todos, setTodos]=useState([{title:"go to gym", description:"after 1 years"}]);
  
  const addTodos = (todo) =>{
    setTodos([...todos,todo]);
  }

  const deleteTodo =(title)=>{
    const newTodos = todos.filter((todo)=>todo.title!== title);
    setTodos(newTodos);
  }

  return (
    <div className={styles.app}>
      <h1>Todo App</h1>
      <AddTodo addTodos={addTodos} todos={todos}></AddTodo>
      <Todos todos={todos} deleteTodo={deleteTodo}></Todos>
    </div>
  )
}

export default App
