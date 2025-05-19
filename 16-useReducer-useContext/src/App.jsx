import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItems from "./components/TodoItems";
import ShowMessage from "./components/ShowMessage";
import "./App.css";
import { useReducer, useState } from "react";

import { todoItemContext } from "./store/todo-item-store";

const reducer = (currTodoItems, action) => {
  let todoItems = currTodoItems;

  if (action.type === "ADD_TODO_ITEM") {
    todoItems = [...currTodoItems, { itemName: action.payload.itemName, itemDueDate: action.payload.itemDueDate}];

  }else if(action.type === "DELETE_ITEM"){
    todoItems = currTodoItems.filter((item) => item.itemName !== action.payload.todoName);
  }


  return todoItems;
};

function App() {
  // const initialTodoItems = [];

  // const [todoItems, setTodoItems] = useState(initialTodoItems);

  const [todoItems, dispatch] = useReducer(reducer, []);

  const handleNewItem = (itemName, itemDueDate) => {
    //ordinary way to set value
    // setTodoItems([...todoItems, {name:itemName, date: itemDueDate}])

    //--->>>Functional updates: Updated values are recieved and returned
    // setTodoItems((currValue) => {
    //   const newTodoItems =  [...currValue, {name : itemName, date:itemDueDate}];

    //   return newTodoItems;
    // })

    //another way of above code portion
    const addItemsAction = {
      type: "ADD_TODO_ITEM",
      payload: {
        itemName: itemName,
        itemDueDate: itemDueDate,
      }
    };
    dispatch(addItemsAction);
  };

  const handleDeleteItem = (todoName) => {

    const itemDeleteAction = {
      type: "DELETE_ITEM",
      payload: {
        todoName: todoName
      }
    };

    dispatch(itemDeleteAction);
  };

  return (
    <todoItemContext.Provider
      value={{ todoItems, handleNewItem, handleDeleteItem }}
    >
      <center className="todo-container">
        <AppName></AppName>
        <AddToDo></AddToDo>
        <ShowMessage></ShowMessage>
        <TodoItems></TodoItems>
      </center>
    </todoItemContext.Provider>
  );
}

export default App;
