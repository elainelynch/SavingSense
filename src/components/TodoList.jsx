import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { TiDelete } from "react-icons/ti";
import axios from "axios";
import { Link } from "react-router-dom";
import { Toast } from "bootstrap";

function TodoList(props) {
  const { id, date, type, category, amount, note } = props;
  const [setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/v1/transactions");
      setTransactions(res.data.data);
    } catch (error) {}
  };

  // const handleEdit = async (value) => {
  //   console.log("Editing transaction with ID:", id);

  //   try {
  //     const res = await axios.patch(
  //       `http://localhost:8000/api/v1/transactions/${id}`,
  //       {
  //         date: value.date,
  //         type: value.type,
  //         category: value.category,
  //         amount: value.amount,
  //         note: value.note,
  //         userId: 1,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/x-www-form-urlencoded",
  //         },
  //       }
  //     );
  //     // fetchTransactions(); // Fetch updated transactions after deletion
  //     // setTransactions(res.data.data);

  //     // setFormData(res.data);
  //   } catch (error) {
  //     // console.error("Error deleting transaction:", error);
  //     console.error("Registration failed: ", error);
  //   }
  // };

  const handleDelete = async (id) => {
    console.log("Deleting transaction with ID:", id);

    try {
      await axios.delete(`http://localhost:8000/api/v1/transactions/${id}`);
      fetchTransactions(); // Fetch updated transactions after deletion
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };

  return (
    <div className="container" style={{ width: "100%" }}>
      <table className="table table-hover">
        <tbody>
          <tr>
            <th scope="row">{props.date}</th>
            <td scope="col">{type}</td>
            <td scope="col">{category}</td>
            <td scope="col">{amount}</td>
            <td>
              <Link to="transactionform">
                <button className="bg-warning" onClick={() => handleEdit(id)}>
                  <FiEdit />
                </button>
              </Link>
            </td>
            <td>
              <button className="bg-danger" onClick={() => handleDelete(id)}>
                <TiDelete />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <p>Note: {note}</p>
      <div className="toast-container position-fixed top-0 end-0 p-3">
        <div
          id="liveToast_3"
          className="toast align-items-center text-bg-success border-0"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">Transaction has been deleted!</div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
