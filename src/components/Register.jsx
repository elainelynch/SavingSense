import { Link } from "react-router-dom";
import "../style/register.scss";
import { useEffect } from "react";


function Register() {

  useEffect(() => {
    document.title = 'Register';
  }, [])
  return(

    <>
     <div className="signup register d-flex justify-content-center align-items-center vh-100 bg-signup">
      <div className="form_container">
        <form className="conteiner bg-register p-5 rounded">
          <h3 className="text-center mb-3 text-lowercase"><span className="text-uppercase">C</span>reate an account</h3>
          <div className="mb-2">
            <label htmlFor="fname"></label>
            <input type="text" placeholder="Full Name" className="form-control rounded-pill border-input shadow-sm p-2 text-center" required/>
          </div>
          <div className="mb-2">
            <label htmlFor="email"></label>
            <input type="email" placeholder="email" className="form-control rounded-pill shadow-sm p-2 text-center" required/>
          </div>
          <div className="mb-2">
            <label htmlFor="password"></label>
            <input type="password" placeholder="Password" className="form-control rounded-pill shadow-sm p-2 text-center" required/>
          </div>
          <div className="mb-2">
            <label htmlFor="rpassword"></label>
            <input type="password" placeholder="Repeat Password" className="form-control rounded-pill shadow-sm p-2 text-center" required/>
          </div>
          <div className="d-flex justify-content-center mt-3">
          <button className="rounded-pill btn-primary">Register</button>
          </div>
          <p className="mt-3 fw-semi bold">Already have an account? <Link to="/">Sign-in</Link></p>
        </form>
      </div>

     </div>
    </>
  )
}

export default Register