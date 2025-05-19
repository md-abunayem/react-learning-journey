import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItem1 from "./components/ToDoItem-1";
import ToDoItem2 from "./components/ToDoItem2";
import "./App.css";


function App() {
  return (
    <center class="todo-container">
      <AppName></AppName>
      <div className="items-container">
      <AddToDo></AddToDo>
      <ToDoItem1></ToDoItem1>
      <ToDoItem2></ToDoItem2>
      </div>
      
    </center>
  );
}

export default App;
