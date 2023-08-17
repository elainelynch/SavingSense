import { useEffect, useState } from "react";
import "../style/dashboard.scss";
import Navbar from "./Navbar.jsx";
import { Link } from "react-router-dom";
import savingsense1 from "/savingsense1.png";
import savingsense from "/savingsense.png";
import gacempow from "/gacempow.jpg";
import { BsCalendarDate } from "react-icons/bs";
import { BiNotepad } from "react-icons/bi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiTwotoneHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { useFormik } from "formik";
import { Value } from "sass";
import * as Yup from "yup";
import TransactionForm from "./TransactionForm";
import TodoList from "./TodoList";
import { FcList } from "react-icons/fc";


function Dashboard(props) {
  const [ transactionList, setTransactionList ] = useState([
    {
      id: 1,
      date: '17/08/2023',
      type: 'Income',
      category: 'business',
      amount: '2000',
      note: 'hello World',
    },
   
  ]);

  const todoList = transactionList.map(
    transaction => <TodoList 
    key={transaction.id} 
    date={transaction.date} 
    type={transaction.type} 
    category={transaction.category} 
    amount={transaction.amount} 
    note={transaction.note}/>
  )

  function addTask(date, type, category, amount, note) {
   const taskObj = {
    id: transactionList.length + 1,
    date, 
    type, 
    category,
    amount, 
    note,

   }

   setTransactionList([...transactionList, taskObj])

  }


  useEffect(() => {
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
            <Link className="text-dec mt-2" to="/">
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
            <p className="text-center Profile-name1">Profile-name</p>
          </div>
          <h2 className="text-center p-2 shadow-sm p-3 fw-bold dashboard-fweight">
            <span className="">Dashboard</span>
          </h2>
          <div className="row  d-flex justify-content-center">
            <div className=" col-10 col-md-3 col-sm-3 mt-3  income rounded shadow-sm p-3">
              <div className="">
                <h5 className="card-title text-center size-em">
                  <span className="i-e-b fw-bold">Income</span>
                </h5>
                <hr />
                <h5 className="text-center fw-bold i-e-b"></h5>
              </div>
            </div>
            <div className="col-10 col-md-3 col-sm-3  mt-3  expense rounded shadow-sm p-3">
              <div className="">
                <h5 className="card-title text-center size-em">
                  <span className="expense1 fw-bold">Expense</span>
                </h5>
                <hr />
                <h5 className="text-center fw-bold expense1">$0</h5>
              </div>
            </div>
            <div className="col-10 col-md-3 col-sm-3  mt-3 balance rounded shadow-sm p-3">
              <div className="">
                <h5 className="card-title text-center size-em">
                  <span className="i-e-b fw-bold">Balance</span>
                </h5>
                <hr />
                <h5 className="text-center fw-bold i-e-b">$0</h5>
              </div>
            </div>
          </div>

          <div className="container list-center ms-2 row mt-5">
            <div className="card-list-s text-center col-4 col-md-2 rounded">
              <h5 className="list text-center mt-2 p-2 rounded">
                <FcList size={20} />{" "}
                <span className="list-text fw-bold fs-5">List</span>
              </h5>
            </div>
          </div>

          <div className="container list-container overflow-auto mt-3">
            <div className="row text-center mt-5">
              <div className="col-3">
                <p className="fw-bold">Date</p>
              </div>   
              <div className="col-3">
                <p className="fw-bold">Type</p>
              </div>
              <div className="col-3">
                <p className="fw-bold">Category</p>
              </div>
              <div className="col-3">
                <p className="fw-bold">Amount</p>
              </div>
              <div className="">
                <p className="fw-bold mt-4">Note</p>
              </div>
              {todoList}

            </div>
          </div>

          <TransactionForm addTask={addTask}/>


        </div>
      </div>
    </>
  );
}

export default Dashboard;
