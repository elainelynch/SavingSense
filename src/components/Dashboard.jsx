import { useEffect, useState } from "react";
import "../style/dashboard.scss";
import Navbar from "./Navbar.jsx";
import { Link } from "react-router-dom";
import gacempow from "/gacempow.jpg";
import { BsCalendarDate } from "react-icons/bs";
import { BiNotepad } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { FcList } from "react-icons/fc";
import axios from "axios";
import TodoList from "./TodoList";
import TransactionForm from "./TransactionForm";
import IncomeExpense from "./IncomeExpense";

function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  }; //this will trigger to recalculate of income, expense and balance.


  const fetchTransactions = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/v1/transactions");
      setTransactions(res.data.data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };



  useEffect(() => {
    fetchTransactions();
    document.title = "Dashboard";
  }, []);

  return (
    <>
      <div className="bg-color fixed-top">
        <Navbar />
      </div>
      <div className="main-container">
        <div className="child1">
          <div className="profile-pict">
            <img
              src={gacempow}
              alt="Empow car"
              width="100"
              height="100"
              className="text-center rounded-circle profile-picture"
            />
          </div>
          <p className="text-center Profile-name">Profile Name</p>
          <div className="bg-warning">
            <hr />
          </div>
          <ul className="row ul-margin ">
            <Link className="text-dec mt-2">
              <p className="side-bar">
                <span className="income-text">
                  <BsCalendarDate size={20} /> Date
                </span>
              </p>
            </Link>
            <Link className="text-dec mt-2">
              <p className="side-bar">
                <span className="income-text">
                  <BiNotepad size={20} /> Note
                </span>
              </p>
            </Link>
            <Link className="text-dec mt-2" to="/logout">
              <p className="side-bar">
                <span className="income-text">
                  <BiLogOut size={20} /> Logout
                </span>
              </p>
            </Link>
          </ul>
        </div>
        <div className="child2">
          <div className="bg-profile-name-image">
            <Link className="nav-link fw-bold text-end me-5 sign-out" to="/">
              <span className="sign-out-color">Sign-out</span>
            </Link>
            <div className="profile-pict1">
              <img
                src={gacempow}
                alt="Empow car"
                width="90"
                height="90"
                className="text-center rounded-circle profile-picture1"
              />
            </div>
            <p className="text-center Profile-name1 ">
              <span className="mt-3">Profile-name</span>
            </p>
          </div>

          <h2 className="text-center p-2 shadow-sm p-3 fw-bold dashboard-fweight">
            <span className="">Dashboard</span>
          </h2>

          {/* <div className="row  d-flex justify-content-center shadow-sm ">
            <div className=" col-10 col-md-3 col-sm-3 mt-3 mb-3  income rounded shadow p-3">
              <div className="">
                <h5 className="card-title text-center size-em">
                  <span className="i-e-b fw-bold">Income</span>
                </h5>
                <hr />
                <h5 className="text-center fw-bold i-e-b">${income}</h5>
              </div>
            </div>
            <div className="col-10 col-md-3 col-sm-3  mt-3 mb-3 expense rounded shadow p-3">
              <div className="">
                <h5 className="card-title text-center size-em">
                  <span className="expense1 fw-bold">Expense</span>
                </h5>
                <hr />
                <h5 className="text-center fw-bold expense1">${expenses}</h5>
              </div>
            </div>
            <div className="col-10 col-md-3 col-sm-3  mt-3 mb-3 balance rounded shadow p-3">
              <div className="">
                <h5 className="card-title text-center size-em">
                  <span className="i-e-b fw-bold">Balance</span>
                </h5>
                <hr />
                <h5 className="text-center fw-bold i-e-b">${balance}</h5>
              </div>
            </div>
          </div> */}

          <IncomeExpense income={'500'}  expenses={'100'} balance={'400'}/>


          <div className="container list-center ms-2 row mt-5">
            <div className="card-list-s text-center col-4 col-md-2 rounded">
              <h5 className="list text-center mt-2 p-2 rounded">
                <FcList size={20} />{" "}
                <span className="list-text fw-bold fs-5">List</span>
              </h5>
            </div>
          </div>
          
          <div className="container-fluid list-container overflow-auto mt-3">

            {transactions.map((transaction) => (
              <TodoList
                key={transaction.id}
                id={transaction.id}
                date={transaction.date}
                type={transaction.type}
                category={transaction.category}
                amount={transaction.amount}
                note={transaction.note}
              />
            ))}
          </div>
          <TransactionForm
            transaction={transactions}
            addTransaction={addTransaction}
          />
        </div>
      </div>

    </>
  );
}

export default Dashboard;
