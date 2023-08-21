import React from "react";
import { FiEdit } from "react-icons/fi";
import { TiDelete } from "react-icons/ti";

function TodoList({
  date,
  type,
  category,
  amount,
  note,
  deleteTransaction,
}) {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this transaction?")) {
      // Call the deleteTransaction function from the Dashboard component
      deleteTransaction(id);
    }
  };

  return (

    
          
    <div className="container" style={{ width: "100%"}}>
      <table className="table">


        <tbody>
          <tr>
            <th scope="row">{date}</th>
            <td scope="col">{type}</td>
            <td scope="col">{category}</td>
            <td scope="col">{amount}</td>
            <td><FiEdit />   <TiDelete /></td>
          </tr>
        </tbody>
      </table>
      <p>Note: {note}</p>
    </div>

      
  )


}

export default TodoList;

