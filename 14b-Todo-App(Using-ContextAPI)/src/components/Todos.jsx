import styles from "./Todos.module.css";
import Todo from "./Todo";

import { TodoContext } from '../context/TodoContext';
import { useContext } from 'react';



const Todos = () => {

  const {todos} = useContext(TodoContext);

  return <div className={styles.todosContainer}>
    <h2>Todos</h2>
    {todos.map((todo, index)=>(<Todo key={index} todo={todo} ></Todo>))}
  </div>;
};

export default Todos;
