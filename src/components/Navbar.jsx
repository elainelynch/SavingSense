import React from "react";
import "../style/navbar.scss";
import savingsense from "/savingsense.png";



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
          <div className="collapse navbar-collapse me-5" id="navbarToggler">
            <ul className=" navbar-nav d-flex justify-content-center me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="me-5 search-btn">
          <form className="d-flex mt-1" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="bg-gerwin  " type="submit">Search</button>
          </form>
        </div>
      </nav>
    </>
  )
}

export default Navbar