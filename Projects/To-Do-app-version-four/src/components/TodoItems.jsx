import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({todoItems, onDeleteItem}) => {
  return (
    <div className={styles["items-container"]}>
        {todoItems.map((item) => <TodoItem todoName = {item.name} todoDate = {item.date}  onDeleteItem = {onDeleteItem} key= {item.name} ></TodoItem>)} 
    </div>
  );
};

export default TodoItems;
