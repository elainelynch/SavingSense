import { useEffect } from "react";
import "../style/dashboard.scss"
import Navbar from "./Navbar.jsx";
import { Link } from "react-router-dom";
import savingsense1 from "/savingsense1.png";
import gacempow from "/gacempow.jpg";
import { GiExpense } from "react-icons/gi";
import { BsCalendarDate } from "react-icons/bs";
import { BiNotepad } from "react-icons/bi";
import { TbMoneybag } from "react-icons/tb";
import { FcList } from "react-icons/fc";
import { IoIosAddCircleOutline } from "react-icons/io";









function Dashboard() {
  useEffect(() => {
    document.title = 'Dashboard'
  }, [])

  
  return(
    <>
      <div className="bg-savingsense">
        <Navbar/>
      </div>
      <div>
      </div>
      <div className="main-container">
        <div className="child1">
          <div className="profile-pict">
           <img src={gacempow} alt="Empow car" width="100" height="100" className="text-center rounded-circle profile-picture"/>
          </div>
          <p className="text-center Profile-name">Profile-name</p>
          <div className="bg-warning">
            <hr />
          </div>
          <ul className="row ul-margin ">
            <Link className="text-dec mt-2"><p className="side-bar"><span className="income-text"><TbMoneybag size={20}/> Income Category</span></p></Link>
            <Link className="text-dec mt-2"><p className="side-bar"><span className="income-text"><GiExpense size={20}/> Expense Category</span></p></Link>
            <Link className="text-dec mt-2"><p className="side-bar"><span className="income-text"><BsCalendarDate size={20}/> Date</span></p></Link>
            <Link className="text-dec mt-2"><p className="side-bar"><span className="income-text"><BiNotepad size={20}/> Note</span></p></Link>
          </ul>
        </div>
        <div className="child2">
          <div className="bg-profile-name-image">
            <Link className="nav-link fw-bold text-end me-5 sign-out" to="/"><span className="sign-out-color">Sign-out</span></Link>
            <div className="profile-pict1">
              <img src={gacempow} alt="Empow car" width="90" height="90" className="text-center rounded-circle profile-picture1"/>
            </div>
            <p className="text-center Profile-name1">Profile-name</p>
          </div>
          <h2 className="text-center p-2 shadow-sm p-3 fw-bold dashboard-fweight"><span className="">Dashboard</span></h2>
          <div className="row  d-flex justify-content-center">
            <div className=" col-10 col-md-3 col-sm-3 mt-3  income rounded shadow-sm p-3">
              <div className="">
                <h5 className="card-title text-center size-em"><span className="i-e-b fw-bold">Income</span></h5>
                <hr />
                <h5 className="text-center fw-bold">$0</h5>
              </div>
            </div>
            <div className="col-10 col-md-3 col-sm-3  mt-3  expense rounded shadow-sm p-3">
              <div className="">
                <h5 className="card-title text-center size-em"><span className="i-e-b fw-bold">Expense</span></h5>
                <hr />
                <h5 className="text-center fw-bold">$0</h5>
              </div>
            </div>
            <div className="col-10 col-md-3 col-sm-3  mt-3 balance rounded shadow-sm p-3">
              <div className="">
                <h5 className="card-title text-center size-em"><span className="i-e-b fw-bold">Balance</span></h5>
                <hr />
                <h5 className="text-center fw-bold">$0</h5>
              </div>
            </div>
            <div className="container list-new-t row mt-5">
              <div className="card-list col-3 col-md-2 mx-1 rounded">
                <h5 className="list text-center mt-2 rounded"><FcList size={20}/> <span className="list-text">List</span></h5>
              </div>
              <div className="card-new-trans col-6 col-md-3 mx-1 rounded">
                <h5 className="list text-center mt-2"><IoIosAddCircleOutline size={20} /><span className="list-text">  New Transaction</span></h5>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Dashboard