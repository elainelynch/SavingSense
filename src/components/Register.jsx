import "../style/register.scss"


function Register() {
  return(
    <>
     <div className="signup register d-flex justify-content-center align-items-center vh-100 bg-white">
      <div className="form_container rounder">
        <form className="conteiner bg-register p-5">
          <h3 className="text-center mb-5">Create an account</h3>
          <div className="mb-2">
            <label htmlFor="fname">Full Name</label>
            <input type="text" placeholder="Full Name" className="form-control" />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="email" className="form-control" />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" className="form-control" />
          </div>
          <div className="mb-2">
            <label htmlFor="rpassword">Repeat Password</label>
            <input type="password" placeholder="Repeat Password" className="form-control" />
          </div>
          <div className="d-grid justify-content-center btn-register">
            <button className="btn w-100">Register</button>
          </div>
        </form>
      </div>

     </div>
    </>
  )
}

export default Register