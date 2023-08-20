import React from "react";
import { FiEdit } from "react-icons/fi";
import { TiDelete } from "react-icons/ti";

function TodoList(props) {
  // const { date, type, category, amount, note } = props;

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this transaction?")) {
      // console.log(`Deleting transaction with ID ${id}`);
      deleteTransaction(id);
    }
  };

  return (
    <>
      {/* <div className="row text-center mt-5">
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
      </div> */}

      <form>
        <fieldset>
          <div className="form-group">
            <table className=" table">
              <tbody>
                {/* {transactions.map((transaction) => ( */}
                <tr>
                  <div className="d-flex flex-wrap">
                    <span className="note-catergory-0">{props.date}</span>
                    <span className="ms-4 note-catergory-1 ">{props.type}</span>
                    <span className="mx-5 note-catergory-2 ">
                      {props.category}
                    </span>
                    <span className="mx-4 note-catergory-3 ">
                      {props.amount}
                    </span>
                    <span className="mx-5 note-catergory-4 ">{props.note}</span>
                    <span className="mx-4 note-catergory-5 ">
                      <FiEdit />
                    </span>
                    <span>
                      <TiDelete />
                    </span>
                  </div>
                </tr>
                {/* ))} */}
              </tbody>
            </table>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default TodoList;
