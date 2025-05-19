function ToDoItem2() {
  let todoName = "Go to College";
  let todoDate = "19/03/2024";
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-sm-6">{todoName}</div>
        <div class="col-sm-4">{todoDate}</div>
        <div class="col-sm-2">
          <button type="button" class="btn btn-danger buttons">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem2;
