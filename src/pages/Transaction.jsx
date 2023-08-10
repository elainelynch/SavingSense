import { useEffect } from "react";
import { GiNotebook } from "react-icons/gi";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { GrAddCircle } from "react-icons/gr";
import { BiSolidCategory } from "react-icons/bi";
import { TbCurrencyPeso } from "react-icons/tb";
import "../style/transaction.scss";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Transaction() {
  useEffect(() => {
    document.title = "Transaction";
  }, []);

  return (
    <>
      <div className="bg-savingsense">
        <Navbar />
      </div>
      <div></div>
      <div className="main-container">
        <div className="child1">
          <ul className="row ul-margin">
            <Link className="text-dec">
              <h2 className="side-bar">Date</h2>
            </Link>
            <Link className="text-dec">
              <h2 className="side-bar">Note</h2>
            </Link>
            <Link className="text-dec">
              <h2 className="side-bar">Expense Category</h2>
            </Link>
          </ul>
        </div>
        <div className="child2">
          <div>
            <div className="bg-transaction">
              <h3 className="transaction text-center fs-2">New Transaction</h3>
              <hr />
              <div class="icon-transaction text-center">
                <TbCurrencyPeso size={80} />
              </div>
              <div className="card-transaction d-flex flex-row justify-content-center p-3">
                <div className="form-check fs-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="type"
                    id="income"
                    checked
                  />
                  <label className="form-check-label fw-bold" for="income">
                    INCOME
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="type"
                    id="expense"
                  />
                  <label
                    className="form-check-label fw-bold fs-5"
                    for="expense"
                  >
                    EXPENSE
                  </label>
                </div>
              </div>
              <div className="bg-category">
                <div className="card-transactions text-center">
                  <div className="card-body1 fs-4">
                    <BiSolidCategory size={30} />
                    Category
                  </div>
                  <div className="card-body2 fs-4">
                    <GiNotebook size={25} />
                    Note
                  </div>
                  <div className="card-body3 fs-4">
                    <BsFillCalendarDateFill size={25} />
                    Date
                  </div>
                </div>
              </div>
              <div className="card-footers text-muted text-center p-3">
                <a
                  href="#"
                  className="bg-trans text-decoration-none fw-bold fs-4"
                >
                  <GrAddCircle size={25} /> Add New Transaction
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transaction;
