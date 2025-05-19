import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";


function AddToDo({onNewItem}) {

  const [todoName, setTodoName] = useState("");
  const [dueTodoDate, setDueTodoDate] = useState("")

  const handleTodoItmeChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDueDate = (event) => {
    setDueTodoDate(event.target.value);
  };

  const handleAddButtonClicked = () =>{
    onNewItem(todoName, dueTodoDate);
    setTodoName("");
    setDueTodoDate("");
  }



  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            name=""
            id=""
            value={todoName}
            placeholder="Enter Todo here"
            onChange={handleTodoItmeChange}
          />
        </div>
        <div className="col-4">
          <input type="date" name="" value={dueTodoDate} id="" onChange={handleDueDate} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success buttons" onClick={handleAddButtonClicked}>
          <BiMessageAdd/> Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
