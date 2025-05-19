import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItems = ({ onDeleteItem }) => {

  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;

  return (
    <div className={styles["items-container"]}>
      {todoItems.map((item) => (
        <TodoItem
          todoName={item.name}
          todoDate={item.date}
          onDeleteItem={onDeleteItem}
          key={item.name}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
