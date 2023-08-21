import "../style/register.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import savingsense from "/savingsense.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Toaster, toast } from "react-hot-toast";

function Register() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      fullName: Yup.string().required("Full Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      password: Yup.string().required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), ""], "Password must match.")
        .required("Password is required"),
    }),

    onSubmit: (value) => {
      console.log(value);
      showAlert();
    },
  });

  const showAlert = () => {
    toast.success("Successfully Registered!");
  };

  useEffect(() => {
    document.title = "Register";
  }, []);



  return (
    <>
      <div className="signup register d-flex justify-content-center align-items-center vh-100 bg-signup">
        <div className="form_container">
          <form
            onSubmit={formik.handleSubmit}
            className="container bg-register p-5 rounded"
          >
            <div className="logo-center">
              <img
                src={savingsense}
                alt="Savingsense logo"
                width="300"
                className="savingsense-logo mb-4"
              />
            </div>
            <h3 className="text-center mb-4 mt-2 text-lowercase">
              <span className="text-uppercase">C</span>reate an{" "}
              <span className="text-uppercase">A</span>ccount
            </h3>

            <div className="mb-2 mt-3 fw-semibold">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                id="fullName"
                placeholder=" Ang Gwapo Nya"
                className="form-control rounded border-input shadow-sm p-1 mt-1"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
              />
            </div>
            {formik.errors.fullName && (
              <span className="error-text fs-bold">
                {formik.errors.fullName}
              </span>
            )}

            <div className="mb-2 fw-semibold">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder=" totooba@gmail.com"
                className="form-control rounded shadow-sm p-1 mt-1"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </div>
            {formik.errors.email && (
              <span className="error-text fs-bold">{formik.errors.email}</span>
            )}

            <div className="mb-2 fw-semibold">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder=" ********"
                className="form-control rounded shadow-sm p-1 mt-1"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
            </div>
            {formik.errors.password && (
              <span className="error-text fs-bold">
                {formik.errors.password}
              </span>
            )}

            <div className="mb-2 fw-semibold">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder=" ********"
                className="form-control rounded shadow-sm p-1 mt-1"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
            </div>
            {formik.errors.confirmPassword && (
              <span className="error-text fs-bold">
                {formik.errors.confirmPassword}
              </span>
            )}

            {/* <Link to="/"> */}
            <div className="d-flex justify-content-center mt-3">
              <button
                onClick={showAlert}
                type="submit"
                className="rounded-pill p-2 bg-gerwin"
              >
                Register
                <Toaster />
              </button>
            </div>
            {/* </Link> */}
            <p className="mt-3 text-center">
              Already have an account? <Link to="/">Sign-in</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
