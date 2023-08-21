import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { TiDelete } from "react-icons/ti";
import axios from "axios";

function TodoList({
  id,
  date,
  type,
  category,
  amount,
  note,
}) {
  
  const [setTransactions] = useState([]);

  const fetchTransactions = async () => { 
    try {
      const res = await axios.get("http://localhost:8000/api/v1/transactions");
      setTransactions(res.data.data);
    } catch (error) {
    }
  };

  

  const handleDelete = async (id) => {
    console.log("Deleting transaction with ID:", id);
  
    try {
      await axios.delete(`http://localhost:8000/api/v1/transactions/${id}`);
      // fetchTransactions(); // Fetch updated transactions after deletion
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };


  

  return (

    
          
    <div className="container" style={{ width: "100%"}}>
      <table className="table table-hover">


        <tbody>
          <tr>
            <th scope="row">{date}</th>
            <td scope="col">{type}</td>
            <td scope="col">{category}</td>
            <td scope="col">{amount}</td>
            <td><FiEdit /> <button onClick={() => handleDelete(id)}><TiDelete /></button> </td>
          </tr>
        </tbody>
      </table>
      <p>Note: {note}</p>
    </div>

      
  )


}

export default TodoList;

