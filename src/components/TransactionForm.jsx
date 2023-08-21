import React from "react";
import "../style/dashboard.scss";
import { GrTransaction } from "react-icons/gr";
import { BsCalendarDate } from "react-icons/bs";
import { GiExpense } from "react-icons/gi";
import { BiNotepad } from "react-icons/bi";
import { GiWallet } from "react-icons/gi";
import { BiCategoryAlt } from "react-icons/bi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Toast } from "bootstrap";
import { useState } from "react";
import axios from "axios";

function TransactionForm(addTransaction) {
  const typeIncome = [
    {
      value: "Income",
      label: "Income",
    },
  ];

  const typeExpense = [
    {
      value: "Expense",
      label: "Expense",
    },
  ];

  const categoryIncome = [
    // ... list of category options ...
    { value: "1", label: "Salary" },
    { value: "2", label: "Business" },
    { value: "3", label: "Allowance" },
    { value: "4", label: "Pension" },
    { value: "5", label: "Savings" },
  ];

  const categoryExpense = [
    { value: "6", label: "Food and Drink" },
    { value: "7", label: "Electric Bill" },
    { value: "8", label: " Water Bill" },
    { value: "9", label: "Transportation" },
    { value: "10", label: "Beauty" },
    { value: "11", label: "Health" },
    { value: "12", label: "Entertainment" },
    { value: "13", label: "Debt Payments" },
    { value: "14", label: "Personal Care" },
    { value: "15", label: "Gifts and Donations" },
    { value: "16", label: "Insurance" },
    { value: "17", label: "Miscellaneous" },
    { value: "18", label: "Utilities" },
    { value: "19", label: "Pets" },
    { value: "20", label: "Subscriptions" },
    { value: "21", label: "Home" },
    { value: "22", label: "Improvement" },
    { value: "23", label: "Vacation and Travel" },
    { value: "24", label: "Clothing" },
    { value: "25", label: "Electronics and Gadgets" },
    { value: "26", label: "Study" },
  ];

  const formik = useFormik({
    initialValues: {
      date: "",
      type: "",
      category: "",
      amount: "",
      note: "",
    },

    validationSchema: Yup.object({
      date: Yup.string().required("Date is required"),
      type: Yup.string().required("Type of Transaction is required"),
      category: Yup.string().required("Category is required"),
      amount: Yup.string().required("Amount is required"),
      note: Yup.string().required("Note is required"),
    }),

    onSubmit: async (value, onSubmitProps) => {
      // console.log("form data", value);
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
      try {
        const res = await axios.post(
          "http://localhost:8000/api/v1/transactions",
          {
            date: value.date,
            type: value.type,
            category: value.category,
            amount: value.amount,
            note: value.note,
            userId: 1,
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        // console.log(res);
        if (res.status === 201) {
          new Toast(document.getElementById("liveToast")).show();
        }
      } catch (err) {
        // console.log("Something went wrong");
        new Toast(document.getElementById("liveToast_1")).show();
      }
    },
  });


  return (
    <>
      <div className="container transaction-center row ms-1 mt-5">
        <div className="card-new-trans transaction-margin col-10 col-md-3 rounded">
          <h5
            className="list text-center  mt-2 p-2"
            data-bs-toggle="collapse"
            href="#multiCollapseExample2"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapseExample2"
          >
            <GrTransaction size={20} />
            <span className="list-text fw-bold fs-5">Transaction</span>
          </h5>
        </div>
      </div>
      <div className="container-fluid">
        <div className="col-12 col-md-12">
          <div
            className=" collapse multi-collapse ms-2"
            id="multiCollapseExample2"
          >
            <div className="bg-center">
              <div className=" transaction-form col-11 col-md-10  bg-form mt-5">
                <div className="col-11 col-md-11 col-sm-8 mt-4">
                  <form
                    onSubmit={formik.handleSubmit}
                    className="w-100"
                    width="100px"
                  >
                    <fieldset>
                      <div className="input-group mt-2" width="100px">
                        <span className="input-group-text" id="date">
                          <BsCalendarDate size={20} />
                          <span className="l1">Date</span>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="date"
                          id="date"
                          value={formik.values.date}
                          onChange={formik.handleChange}
                        />
                      </div>
                      {formik.errors.date && (
                        <span className="error-text fs-bold">
                          {formik.errors.date}
                        </span>
                      )}

                      <div className="input-group mt-2">
                        <label className="input-group-text" htmlFor="type">
                          <span className="incometext">
                            <GiExpense size={20} />
                            <span className="l1">Type of Transaction</span>
                          </span>
                        </label>

                        <select
                          className="form-select"
                          id="type"
                          value={formik.values.type}
                          onChange={formik.handleChange}
                        >
                          <option defaultValue>Type...</option>

                          {typeIncome.map((option) => (
                            <option
                              defaultValue="1"
                              className="color-income"
                              key={option.value}
                              value={option.value}
                            >
                              {option.label}
                            </option>
                          ))}

                          {typeExpense.map((option) => (
                            <option
                              defaultValue="1"
                              className="color-expense"
                              key={option.value}
                              value={option.value}
                            >
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      {formik.errors.type && (
                        <span className="error-text fs-bold">
                          {formik.errors.type}
                        </span>
                      )}

                      <div className="input-group mt-2">
                        <label className="input-group-text" htmlFor="category">
                          <span className="incometext">
                            <BiCategoryAlt size={20} />{" "}
                            <span className="l1">Category</span>
                          </span>
                        </label>

                        <select
                          className="form-select"
                          id="category"
                          value={formik.values.category}
                          onChange={formik.handleChange}
                        >
                          <option defaultValue>Choose...</option>

                          {categoryIncome.map((option) => (
                            <option
                              defaultValue="1"
                              className="color-income"
                              key={option.value}
                              value={option.value}
                            >
                              {option.label}
                            </option>
                          ))}

                          {categoryExpense.map((option) => (
                            <option
                              defaultValue="2"
                              className="color-expense"
                              key={option.value}
                              value={option.value}
                            >
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      {formik.errors.category && (
                        <span className="error-text fs-bold">
                          {formik.errors.category}
                        </span>
                      )}

                      <div className="input-group mt-2">
                        <span className="input-group-text" id="amount">
                          <span className="incometext">
                            <GiWallet size={20} />{" "}
                            <span className="l1">Amount</span>
                          </span>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="amount"
                          id="amount"
                          value={formik.values.amount}
                          onChange={formik.handleChange}
                        />
                      </div>
                      {formik.errors.amount && (
                        <span className="error-text fs-bold">
                          {formik.errors.amount}
                        </span>
                      )}

                      <div className="mt-2">
                        <span htmlFor="note" className="form-label">
                          <span className="incometext">
                            <BiNotepad size={20} />{" "}
                            <span className="l1 note-text-color">Note</span>
                          </span>
                        </span>
                        <textarea
                          className="form-control"
                          rows="3"
                          id="note"
                          value={formik.values.note}
                          onChange={formik.handleChange}
                        ></textarea>
                      </div>
                      {formik.errors.note && (
                        <span className="error-text fs-bold">
                          {formik.errors.note}
                        </span>
                      )}

                      <div className="col-12 save mb-4">
                        <button
                          type="submit"
                          className="col-3 save1 new-trans text-center rounded mt-4"
                          id="save"
                        >
                          <span className="list-text fw-bold fs-5 p-1">
                            Submit
                          </span>
                        </button>
                      </div>
                    </fieldset>
                  </form>

                  <div className="toast-container position-fixed top-0 end-0 p-3">
                    <div
                      id="liveToast"
                      className="toast align-items-center text-bg-success border-0"
                      role="alert"
                      aria-live="assertive"
                      aria-atomic="true"
                    >
                      <div className="d-flex">
                        <div className="toast-body">
                          Successfully added New Transaction!
                        </div>
                        <button
                          type="button"
                          className="btn-close btn-close-white me-2 m-auto"
                          data-bs-dismiss="toast"
                          aria-label="Close"
                        ></button>
                      </div>
                    </div>
                  </div>

                  <div className="toast-container position-fixed top-0 end-0 p-3">
                    <div
                      id="liveToast_1"
                      className="toast align-items-center text-bg-danger border-0"
                      role="alert"
                      aria-live="assertive"
                      aria-atomic="true"
                    >
                      <div className="d-flex">
                        <div className="toast-body">Something went wrong!</div>
                        <button
                          type="button"
                          className="btn-close btn-close-white me-2 m-auto"
                          data-bs-dismiss="toast"
                          aria-label="Close"
                        ></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransactionForm;
