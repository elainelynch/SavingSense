import React from "react";
import { useEffect } from "react"
import { Link } from "react-router-dom";
import "../style/forgotpassword.scss"
import savingsense from "/savingsense.png";
import {IoAlertCircle} from 'react-icons/io5';


function ForgotPassword() {
    useEffect(() => {
        document.title = 'Forgot Password'
      }, [])

    return (
        <>
            <div className="forgotpassword d-flex justify-content-center align-items-center vh-100 bg-forgotpassword">
                <div className="form_container bg-fotgotpassword">
                    <form className="container bg-fp p-5 rounded">
                       <div className="savingsense-logo1">
                           <img src={savingsense} alt="Savingsense logo"  width="300" className="savingsense-logo mb-5 rounded"/>
                       </div>
                       <div className="react-icon mb-3">
                           <IoAlertCircle size={70} />
                       </div>
                       <div className="mb-2 bg-fpw">
                          <h3 className="start-end mb-3 text-center">Forgot Password</h3>
                          <p className="start-end mb-2 text-center">Enter your email and we'll send you a link to reset your password.</p>
                          <label htmlFor="email"></label>
                          <input type="text" placeholder="Email" className="form-control rounded-pill border-input shadow-sm p-2 text-center" required/>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                          <Link to="/">
                          <button type="submit" className="rounded-pill bg-wanda" data-bs-toggle="modal" data-bs-target="#exampleModal">Submit</button>
                          </Link>
                        </div>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                       <h1 className="modal-title fs-5" id="exampleModalLabel">Thank you!</h1>
                                       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">We have sent a link on your email to reset your password and you should receive it shortly.</div>
                                    <div className="modal-footer">
                                        <Link to="/">
                                            <div className="bg-wanda-modal rounded-pill text-center">
                                                <button type="submit" className="btn rounded-pill">
                                                   <span className="modal-close">Close</span>
                                               </button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword