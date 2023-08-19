import React from "react";

function TodoList(props) {
  const { id, amount, category, date, type, note, deleteTransaction } = props;

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this transaction?")) {
      // console.log(`Deleting transaction with ID ${id}`);
      deleteTransaction(id);
    }
  };

  return (
    <>
      <div className="row text-center mt-5">
        <div className="col-3">
          <p className="mt-3">{date}</p>
        </div>
        <div className="col-3">
          <p className="mt-3">{type}</p>
        </div>
        <div className="col-3">
          <p className="mt-3">{category}</p>
        </div>
        <div className="col-3">
          <p className="mt-3">{amount}</p>
        </div>
        <div className="row">
          <div className="col-9 mt-3">
            <p className="fw-bold mt-4">Note</p>
            <p className="mt-3">{note}</p>
          </div>
          <div className="col-3 mt-5">
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoList;