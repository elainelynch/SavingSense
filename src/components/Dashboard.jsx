import { useEffect } from "react"
import savingsense from "/savingsense.png";
import "../style/dashboard.scss"
import Navbar from "./Navbar.jsx";
import { Link } from "react-router-dom";
import savingsense1 from "/savingsense1.png";
import gacempow from "/gacempow.jpg";






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
           <img src={gacempow} alt="Empow car" width="90" className="text-center rounded"/>
          </div>
          <h6 className="text-center Profile-name">Profile-name</h6>
          <ul className="row ul-margin mt-5">
            <Link className="text-dec mt-3"><h2 className="side-bar">Income Category</h2></Link>
            <Link className="text-dec mt-3"><h2 className="side-bar">Expense Category</h2></Link>
            <Link className="text-dec mt-3"><h2 className="side-bar">Date</h2></Link>
            <Link className="text-dec mt-3"><h2 className="side-bar">Note</h2></Link>
          </ul>
        </div>
        <div className="child2">
          <h2 className="text-center mt-3 p-2">Dashboard</h2>
          <div className="row col-12 d-flex justify-content-center">
            <div className="col-sm-3 mt-3 mb-sm-0 ms-3">
              <div className="card">
                <div className="card-body  income">
                  <h5 className="card-title text-center">Income</h5>
                  <h5 className="text-center">$0</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-3 mt-3 ms-3">
              <div className="card">
                <div className="card-body expense">
                  <h5 className="card-title text-center ">Expense</h5>
                  <h5 className="text-center">$0</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-3 mt-3 ms-3">
              <div className="card">
                <div className="card-body balance">
                  <h5 className="card-title text-center">Balance</h5>
                  <h5 className="text-center">$0</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Dashboard