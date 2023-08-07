import "../style/register.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import savingsense from "/savingsense.png";

function Register() {
  

  useEffect(() => {
    document.title = 'Register';
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data here

    // Show the modal
    const myModal = new Register.Modal(document.getElementById("exampleModal"));
    myModal.show();
  };

  return (
    <>
      <div className="signup register d-flex justify-content-center align-items-center vh-100 bg-signup">
        <div className="form_container">
          <form className="conteiner bg-register p-5 rounded">
            <img src={savingsense} alt="Savingsense logo" width="300" className="savingsense-logo mb-5 rounded" />
            <h3 className="text-center mb-3 text-lowercase"><span className="text-uppercase">C</span>reate an <span className="text-uppercase">A</span>ccount</h3>
            <div className="mb-2">
              <label htmlFor="fname">Full Name</label>
              <input type="text" id="fname" placeholder="Full Name" className="form-control rounded-pill border-input shadow-sm p-2 text-center" required />
            </div>
            <div className="mb-2">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder=" Email" className="form-control rounded-pill shadow-sm p-2 text-center" required />
            </div>
            <div className="mb-2">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Password" className="form-control rounded-pill shadow-sm p-2 text-center" required />
            </div>
            <div className="mb-2">
              <label htmlFor="rpassword">Confirm Password</label>
              <input type="password" id="rpassword" placeholder="Confirm Password" className="form-control rounded-pill shadow-sm p-2 text-center" required />
            </div>
            <div className="d-flex justify-content-center mt-3">
              <Link to="/">
                <button type="submit" className="rounded-pill btn-primary" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  Register
                </button>
              </Link>
              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Thank you!
                      </h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">Your details have been successfully submitted. We'll get back to you soon.</div>
                    <div className="modal-footer">
                      <div className="bg-gerwin">
                        <button type="button" className="btn rounded-pill" data-bs-dismiss="modal">
                          Close
                        </button>
                      </div>
                      <div>
                        <Link to="/">
                          <button type="button" className="btn rounded-pill">
                            Save
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-3 fw-semibold">Already have an account? <Link to="/">Sign-in</Link></p>
          </form>
        </div>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Thank you!
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">Your details have been successfully submitted. We'll get back to you soon.</div>
            <div className="modal-footer">
              <div className="bg-gerwin">
                <button type="button" className="btn rounded-pill" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
              <div>
                <Link to="/">
                  <button type="button" className="btn rounded-pill">
                    Save
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;