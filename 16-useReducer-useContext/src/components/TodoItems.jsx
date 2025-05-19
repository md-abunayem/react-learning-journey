import { todoItemContext } from "../store/todo-item-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { useContext } from "react";

const TodoItems = () => {

  const {todoItems}=useContext(todoItemContext)
  return (
    <div className={styles["items-container"]}>
        {todoItems.map((item) => <TodoItem todoName = {item.itemName} todoDate = {item.itemDueDate} key= {item.name} ></TodoItem>)} 
    </div>
  );
};

export default TodoItems;
