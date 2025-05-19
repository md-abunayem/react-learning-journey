import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItems from "./components/TodoItems";

import "./App.css";

function App() {

  const todoItems =[ {
    name : "Buy Milk",
    date : "19/03/2024"
  },
  {
    name : "Go to College",
    date : "19/03/2024"
  },
]
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddToDo></AddToDo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
