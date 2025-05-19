function AddToDo() {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" name="" id="" placeholder="Enter Todo here" />
        </div>
        <div className="col-4">
          <input type="date" name="" id="" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success buttons">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
