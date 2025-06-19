import { useState } from 'react'
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

import styles from './App.module.css'


import { TodoContext } from './context/TodoContext'; 

function App() {

  const [todos, setTodos]=useState([{title:"go to gym", description:"after 1 years"}]);
  
  

  return (
    <TodoContext.Provider value = {{todos,setTodos}}>
    <div className={styles.app}>
      <h1>Todo App</h1>
      <AddTodo ></AddTodo>
      <Todos todos={todos}></Todos>
    </div>
    </TodoContext.Provider>
  )
}

export default App
