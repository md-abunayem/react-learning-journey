import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({todoItems}) => {
  return (
    <div className={styles["items-container"]}>
        {todoItems.map((item) => <TodoItem todoName = {item.name} todoDate = {item.date}  key= {item.name} ></TodoItem>)} 
    </div>
  );
};

export default TodoItems;
