import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItems from "./components/TodoItems";
import ShowMessage from "./components/ShowMessage";
import "./App.css";
import { useState } from "react";

import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const initialTodoItems = [];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems([...todoItems, { name: itemName, date: itemDueDate }]);
  };

  const  deleteItem = (todoName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoName);

    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider value={{todoItems:todoItems,addNewItem: addNewItem, deleteItem:deleteItem}}>
      <center className="todo-container">
        <AppName></AppName>
        <AddToDo addNewItem={addNewItem}></AddToDo>
        <ShowMessage></ShowMessage>
        <TodoItems
          todoItems={todoItems}
          onDeleteItem={deleteItem}
        ></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
