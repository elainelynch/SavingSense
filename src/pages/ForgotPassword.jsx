import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/forgotpassword.scss";
import savingsense from "/savingsense.png";
import { IoAlertCircle } from "react-icons/io5";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Toaster, toast } from "react-hot-toast";

function ForgotPassword() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
    }),

    onSubmit: (value) => {
      console.log(value);
    },
  });

  const showAlert = () => {
    toast.success("Email has been sent!");
  };

  useEffect(() => {
    document.title = "Forgot Password";
  }, []);

  return (
    <>
      <div className="login d-flex justify-content-center align-items-center vh-100 bg-login">
        <div className="form_container">
          <form
            onSubmit={formik.handleSubmit}
            className="container bg-log-in p-5 rounded"
          >
            <div className="logo-center">
              <img
                src={savingsense}
                alt="Savingsense logo"
                width="300"
                className="savingsense-logo  mb-5 rounded"
              />
            </div>
            <div className="react-icon mb-3">
              <IoAlertCircle size={70} />
            </div>

            <h3 className="start-end mb-3 text-center">Forgot Password</h3>
            <p className="mb-2 text-center">
              Enter your email and we'll send you a <br /> link to reset your
              password.
            </p>

            <div className="mb-2 fw-semibold mt-4">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="text"
                placeholder=" totooba@gmail.com"
                className="form-control rounded border-input shadow-sm p-1 mt-1"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error-text fs-bold">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="d-flex justify-content-center mt-4">
              {/* <Link to="/"> */}
              <button
                type="submit"
                onClick={showAlert}
                className="rounded-pill p-2 bg-wanda"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <span className="submit">Submit </span>
                <Toaster />
              </button>
              {/* </Link> */}
            </div>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              {/* <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Thank you!
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    We have sent a link on your email to reset your password and
                    you should receive it shortly.
                  </div>
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
              </div> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
