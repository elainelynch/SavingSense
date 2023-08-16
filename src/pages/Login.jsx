import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/login.scss";
import savingsense from "/savingsense.png";
import { useFormik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      password: Yup.string().required("Password is required"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    document.title = "Login";
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
            <div className="mb-2">
              <h3 className="start-end mb-3 text-center">Login</h3>
              <label htmlFor="email"></label>
              <input
                name="email"
                type="text"
                placeholder="Email"
                className="form-control rounded-pill border-input shadow-sm p-2 text-center"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="mb-2">
              <label htmlFor="password"></label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="form-control rounded-pill shadow-sm p-2 text-center"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="d-flex justify-content-center mt-3">
              <p className="mt-3 fw-semi bold">
                <Link to="/forgotpassword">Forgot Password?</Link>
              </p>
            </div>
            <div className="d-flex justify-content-center mt-3">
              {/* <Link to="/dashboard"> */}
              <button type="submit" className="rounded-pill bg-gerwin">
                Login
              </button>
              {/* </Link> */}
            </div>
            <div className="d-flex justify-content-center mt-3">
              <p className="mt-3">
                Don't have an account yet? <Link to="/register">Sign-up</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
