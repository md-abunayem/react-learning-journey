import { useState, useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddToDo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [dueTodoDate, setDueTodoDate] = useState("");

  const todoNameElement = useRef("");
  const todoDueDateElement = useRef("");

  // const handleTodoItmeChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current+=1;
  // };

  // const handleDueDate = (event) => {
  //   setDueTodoDate(event.target.value);
  //   console.log("Updates:", noOfUpdates.current)

  // };

  const handleAddButtonClicked = (event) => {
    // console.log(event)
    event.preventDefault();
    /*event.preventDefault() is used to prevent the default action of an event from being triggered. For example, in the case of form submissions, the default behavior is to reload the page, but using event.preventDefault() inside the event handler will stop this.*/

    const todoName = todoNameElement.current.value;
    console.log(todoNameElement.current)
    const dueTodoDate = todoDueDateElement.current.value;
    todoNameElement.current.value = "";
    todoDueDateElement.current.value = "";
    onNewItem(todoName, dueTodoDate);
    // setTodoName("");
    // setDueTodoDate("");
  };

  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            name=""
            id=""
            // value={todoName}
            ref={todoNameElement}
            placeholder="Enter Todo here"
            // onChange={handleTodoItmeChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            name=""
            // value={dueTodoDate}
            id=""
            ref={todoDueDateElement}
            // onChange={handleDueDate}
          />
        </div>
        <div className="col-2">
          <button
            type="submit"
            /*type="button" */ className="btn btn-success buttons" /*onClick={handleAddButtonClicked}*/
          >
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddToDo;
