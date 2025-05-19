import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItems from "./components/TodoItems";
import ShowMessage from "./components/ShowMessage";
import "./App.css";
import { useState } from "react";

function App() {
  const initialTodoItems = [
    
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate)=>{
    setTodoItems([...todoItems, {name:itemName, date: itemDueDate}])
  }


  const handleDeleteItem = (todoName) =>{
    const newTodoItems = todoItems.filter(item => item.name !== todoName)

    setTodoItems(newTodoItems);
  }

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddToDo onNewItem = {handleNewItem}></AddToDo>
      {todoItems.length === 0 && <ShowMessage></ShowMessage>}
      <TodoItems todoItems={todoItems} onDeleteItem={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
