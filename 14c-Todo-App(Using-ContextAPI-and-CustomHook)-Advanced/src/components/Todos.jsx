import styles from "./Todos.module.css";
import Todo from "./Todo";
import { useTodoContext } from "../custom-hooks/useTodoContext";




const Todos = () => {

  const {todos} = useTodoContext();

  return <div className={styles.todosContainer}>
    <h2>Todos</h2>
    {todos.map((todo, index)=>(<Todo key={index} todo={todo} ></Todo>))}
  </div>;
};

export default Todos;
