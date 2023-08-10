import { useEffect } from "react"
import savingsense from "/savingsense.png";
import "../style/dashboard.scss"
import Navbar from "./Navbar.jsx";
import { Link } from "react-router-dom";
import savingsense1 from "/savingsense1.png";





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
          <ul className="row ul-margin">
            <Link className="text-dec"><h2 className="side-bar">Date</h2></Link>
            <Link className="text-dec"><h2 className="side-bar">Note</h2></Link>
            <Link className="text-dec"><h2 className="side-bar">Expense Category</h2></Link>
          </ul>
        </div>
        <div className="child2">
          <h2>body</h2>
        </div>
      </div>


    </>
  )
}

export default Dashboard