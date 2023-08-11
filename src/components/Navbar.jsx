import React from "react";
import "../style/navbar.scss";
import savingsense from "/savingsense.png";
import { Link } from "react-router-dom";
import { GiExpense } from "react-icons/gi";
import { BsCalendarDate } from "react-icons/bs";
import { BiNotepad } from "react-icons/bi";
import { TbMoneybag } from "react-icons/tb";
import { AiTwotoneHome } from "react-icons/ai";



function Navbar() {
  return(
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex">
          <div>
           <img src={savingsense} alt="Savingsense logo"  width="250" className="savingsense-logo"/>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse me-3" id="navbarToggler">
            <ul className=" navbar-nav d-flex justify-content-center me-auto mb-2 mb-lg-0">
              <li className="nav-item nav-dash mey-2">
                <Link className="nav-link active nav-home" aria-current="page" to="/dashboard"><span className="nav-home-text fw-bold">Home</span></Link>
                <div className="Nav-hide">
                  <Link className="text-dec mt-2"><p className="side-bar"><span className="income-text"><AiTwotoneHome size={20}/> <span className="home-text1">Home</span></span></p></Link>
                  <Link className="text-dec mt-2"><p className="side-bar"><span className="income-text"><TbMoneybag size={20}/> <span className="home-text1">Income Category</span></span></p></Link>
                  <Link className="text-dec mt-2"><p className="side-bar"><span className="income-text"><GiExpense size={20}/> <span className="home-text1">Expense Category</span></span></p></Link>
                  <Link className="text-dec mt-2"><p className="side-bar"><span className="income-text"><BsCalendarDate size={20}/> <span className="home-text1">Date</span></span></p></Link>
                  <Link className="text-dec mt-2"><p className="side-bar"><span className="income-text"><BiNotepad size={20}/> <span className="home-text1">Note</span></span></p></Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="me-5 search-btn">
          <form className="d-flex mt-1" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="bg-gerwin  rounded" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </>
  )
}

export default Navbar