import { useContext } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { todoItemContext } from "../store/todo-item-store";

function ToDoItem({ todoName, todoDate }) {

  const {handleDeleteItem} = useContext(todoItemContext);

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger buttons" onClick = {() => handleDeleteItem(todoName)}>
          <AiTwotoneDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
