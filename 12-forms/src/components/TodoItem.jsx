import { AiTwotoneDelete } from "react-icons/ai";

function ToDoItem({ todoName, todoDate, onDeleteItem }) {


  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger buttons" onClick = {() => onDeleteItem(todoName)}>
          <AiTwotoneDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
