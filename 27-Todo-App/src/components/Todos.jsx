import styles from "./Todos.module.css";
import Todo from "./Todo";
const Todos = ({todos,deleteTodo }) => {
  return <div className={styles.todosContainer}>
    <h2>Todos</h2>
    {todos.map((todo, index)=>(<Todo key={index} todo={todo} deleteTodo={deleteTodo}></Todo>))}
  </div>;
};

export default Todos;
