import React from "react";
import { useEffect } from "react"
import { Link } from "react-router-dom"
import "../style/login.scss"
import savingsense from "/savingsense.png";



function Login() {

  useEffect(() => {
    document.title = 'Login'
  }, [])

  return(
    <>
      <div className="login d-flex justify-content-center align-items-center vh-100 bg-login">
        <div className="form_container">
          <form className="container bg-log-in p-5 rounded">
            <img src={savingsense} alt="Savingsense logo"  width="300" className="savingsense-logo  mb-5 rounded"/>
            <div className="mb-2">
              <h3 className="start-end mb-3 text-center">Login</h3>
              <label htmlFor="email"></label>
              <input type="text" placeholder="Email" className="form-control rounded-pill border-input shadow-sm p-2 text-center" required/>
            </div>
            <div className="mb-2">
              <label htmlFor="password"></label>
              <input type="password" placeholder="Password" className="form-control rounded-pill shadow-sm p-2 text-center" required/>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <p className="mt-3 fw-semi bold"><Link to="/forgotpassword">Forgot Password?</Link></p>
            </div>
            <div className="d-flex justify-content-center mt-3">
             <Link to="/dashboard"><button className="rounded-pill bg-gerwin">Login</button></Link>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <p className="mt-3 fw-semi bold">Don't have an account yet? <Link to="/register">Sign-up</Link></p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login