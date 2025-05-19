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
    //ordinary way to set value  
    // setTodoItems([...todoItems, {name:itemName, date: itemDueDate}])

    //--->>>Functional updates: Updated values are recieved and returned
    // setTodoItems((currValue) => {
    //   const newTodoItems =  [...currValue, {name : itemName, date:itemDueDate}];

    //   return newTodoItems; 
    // })


    //another way of above code portion
    setTodoItems((currValue) => [...currValue, {name: itemName, date : itemDueDate}])
 

  }


  const handleDeleteItem = (todoName) =>{
    const newTodoItems = todoItems.filter(item => item.name !== todoName)

    setTodoItems(newTodoItems);
  }

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddToDo onNewItem = {handleNewItem}></AddToDo>
      {todoItems.length === 0 && <ShowMessage todoItems={todoItems}></ShowMessage>}
      <TodoItems todoItems={todoItems} onDeleteItem={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
