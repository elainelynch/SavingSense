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
      <div className="signup register d-flex justify-content-center align-items-center vh-100 bg-signup">
        <div className="form_container">
          <form className="conteiner bg-register p-5 rounded">
            <img src={savingsense} alt="Savingsense logo"  width="300" className="savingsense-logo mb-5 rounded"/>
            <div className="mb-2">
              <h3 className="start-end mb-3">Login</h3>
              <label htmlFor="email"></label>
              <input type="text" placeholder="Email" className="form-control rounded-pill border-input shadow-sm p-2 text-center" required/>
            </div>
            <div className="mb-2">
              <label htmlFor="password"></label>
              <input type="password" placeholder="Password" className="form-control rounded-pill shadow-sm p-2 text-center" required/>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <p className="mt-3 fw-semi bold"><Link to="/">Forgot Password?</Link></p>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <button className="rounded-pill bg-gerwin">Login</button>
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