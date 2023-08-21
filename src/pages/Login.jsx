import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Toaster, toast } from "react-hot-toast";
import "../style/login.scss";
import savingsense from "/savingsense.png";

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
      // Replace this with your actual authentication logic
      if (values.email === "user@example.com" && values.password === "password") {
        toast.success("Successfully Logged In!");
      } else {
        toast.error("Invalid email or password");
      }
    },
  });

  return (
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

          <h3 className="start-end mb-3 text-center">Login</h3>

          <div className="mb-2 fw-semibold">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              placeholder="totooba@gmail.com"
              className="form-control rounded border-input shadow-sm p-1 mt-1"
              required
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error-text fs-bold">{formik.errors.email}</div>
            )}
          </div>

          <div className="mb-2 fw-semibold">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="********"
              className="form-control rounded shadow-sm p-1 mt-1"
              required
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="error-text fs-bold">
                {formik.errors.password}
              </div>
            )}
          </div>

          <div className="d-flex justify-content-center mt-3">
            <p className="mt-3 fw-semi bold">
              <Link to="/forgotpassword">Forgot Password?</Link>
            </p>
          </div>

          <div className="d-flex justify-content-center mt-3">
            <button
              type="submit"
              className="rounded-pill p-2 bg-gerwin"
            >
              Login
            </button>
          </div>

          <div className="d-flex justify-content-center mt-3">
            <p className="mt-3">
              Don't have an account yet? <Link to="/register">Sign-up</Link>
            </p>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
}

export default Login;















// import React, { useState } from "react";
// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import "../style/login.scss";
// import savingsense from "/savingsense.png";
// import { useFormik } from "formik";
// import * as EmailValidator from "email-validator";
// import * as Yup from "yup";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Toast } from "bootstrap";
// import { Toaster, toast } from "react-hot-toast";

// function Login() {
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },

//     validationSchema: Yup.object({
//       email: Yup.string()
//         .email("Invalid email address")
//         .required("Email address is required"),
//       password: Yup.string().required("Password is required"),
//     }),

//     onSubmit: (value) => {
//       // console.log(value);
//       showAlert();
//     },
//   });

//   const showAlert = () => {
//     toast.success("Successfully Logged In!");
//   };

//   useEffect(() => {
//     document.title = "Login";
//   }, []);

//   return (
//     <>
//       <div className="login d-flex justify-content-center align-items-center vh-100 bg-login">
//         <div className="form_container">
//           <form
//             onSubmit={formik.handleSubmit}
//             className="container bg-log-in p-5 rounded"
//           >
//             <div className="logo-center">
//               <img
//                 src={savingsense}
//                 alt="Savingsense logo"
//                 width="300"
//                 className="savingsense-logo  mb-5 rounded"
//               />
//             </div>

//             <h3 className="start-end mb-3 text-center">Login</h3>

//             <div className="mb-2 fw-semibold">
//               <label htmlFor="email">Email</label>
//               <input
//                 id="email"
//                 type="text"
//                 placeholder=" totooba@gmail.com"
//                 className="form-control rounded border-input shadow-sm p-1 mt-1"
//                 required
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.email}
//               />
//               {formik.touched.email && formik.errors.email ? (
//                 <div className="error-text fs-bold">{formik.errors.email}</div>
//               ) : null}
//             </div>

//             <div className="mb-2 fw-semibold">
//               <label htmlFor="password">Password</label>
//               <input
//                 id="password"
//                 type="password"
//                 placeholder=" ********"
//                 className="form-control rounded shadow-sm p-1 mt-1"
//                 required
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.password}
//               />
//               {formik.touched.password && formik.errors.password ? (
//                 <div className="error-text fs-bold">
//                   {formik.errors.password}
//                 </div>
//               ) : null}
//             </div>

//             <div className="d-flex justify-content-center mt-3">
//               <p className="mt-3 fw-semi bold">
//                 <Link to="/forgotpassword">Forgot Password?</Link>
//               </p>
//             </div>
//             {/* <Link to="/dashboard"> */}
//             <div className="d-flex justify-content-center mt-3">
//               <button
//                 onClick={showAlert}
//                 type="submit"
//                 className="rounded-pill p-2 bg-gerwin"
//               >
//                 Login
//                 <Toaster />
//               </button>
//             </div>
//             {/* </Link> */}

//             <div className="d-flex justify-content-center mt-3">
//               <p className="mt-3">
//                 Don't have an account yet? <Link to="/register">Sign-up</Link>
//               </p>
//             </div>
//           </form>

//           <div
//             aria-live="polite"
//             aria-atomic="true"
//             className="bg-dark position-relative bd-example-toasts"
//           >
//             <div id="login" className="toast-container position-absolute p-3">
//               <div className="toast">
//                 <div className="toast-header">
//                   <small>just now</small>
//                 </div>
//                 <div className="toast-body">
//                   Hello, world! This is a toast message.
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;
