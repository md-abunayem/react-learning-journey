import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItems from "./components/TodoItems";
import ShowMessage from "./components/ShowMessage";
import "./App.css";
import { useState } from "react";

import { TodoItemsContext } from "./store/todo-items-store";

import { useReducer } from "react";


const todoItemReducer =(state, action)=>{
  //action.type, action.payload
  let newTodoItems = state;
  if(action.type === "ADD_TODO_ITEM"){
     newTodoItems = [...state, {name:action.payload.itemName, date: action.payload.itemDueDate}];


  }else if(action.type === "DELETE_TODO_ITEM"){
        newTodoItems = state.filter((item)=>{
        item.name !== action.payload.itemName;
     })

  }

  return newTodoItems;
}


function App() {

  //const todoItems= [{name: "mango",date:"455-4-4"}];
  //const [todoItems, setTodoItems] = useState([]);

  

  const [todoItems,todoItemsDispatch] = useReducer(todoItemReducer, []);   //const [state, dispatch] = useReducer(reducer, initial state)
  

  const addNewItem = (itemName, itemDueDate) => {


    // const newItemAction = {
    //   type:"ADDTODOITEM",
    //   payload: {itemName,itemDueDate}
    // }

    todoItemsDispatch({type:"ADD_TODO_ITEM", payload: {itemName,itemDueDate}});
    
    // setTodoItems([...todoItems, { name: itemName, date: itemDueDate }]);
  };

  const  deleteItem = (todoName) => {

    // const deleteItem ={
    //   type: "DELETETODOITEM",
    //   payload: todoName
    // }

    todoItemsDispatch({type:"DELETE_TODO_ITEM", payload:{itemName: todoName} })

    // const newTodoItems = todoItems.filter((item) => item.name !== todoName);

    // setTodoItems(newTodoItems);
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
