import { useEffect } from "react"
import "../style/forgotpassword.scss"
import savingsense from "/savingsense.png";

function ForgotPassword() {
    useEffect(() => {
        document.title = 'Forgot Password'
      }, [])

    return (
        <>
          <div className="forgotpassword d-flex justify-content-center align-items-center vh-100 bg-forgotpassword">
            <div className="form_container">
                <form className="container bg-fp p-5 rounded">
                  <img src={savingsense} alt="Savingsense logo"  width="300" className="savingsense-logo mb-5 rounded"/>
                  <div className="mb-2 bg-fpw">
                      <h3 className="start-end mb-3 text-center">Forgot Password</h3>
                      <p className="start-end mb-2 text-center">Enter your email and we'll send you a link to reset your password.</p>
                      <label htmlFor="email"></label>
                      <input type="text" placeholder="Email" className="form-control rounded-pill border-input shadow-sm p-2 text-center" required/>
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                      <button className="rounded-pill btn-primary">Submit</button>
                  </div>
                  
                </form>
            </div>
          </div>
        </>
    )
}

export default ForgotPassword