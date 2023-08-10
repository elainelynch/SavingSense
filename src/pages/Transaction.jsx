import { useEffect } from "react";
import savingsense from "/savingsense.png";
import { GiNotebook } from "react-icons/gi";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { GrAddCircle } from "react-icons/gr";
import { BiSolidCategory } from "react-icons/bi";
import { TbCurrencyPeso } from "react-icons/tb";
import "../style/transaction.scss";

function Transaction() {
  useEffect(() => {
    document.title = "Transaction";
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="navbar-brand">
            <img
              src={savingsense}
              alt="Savingsense logo"
              width="300"
              className="savingsense-logo mb-5 rounded"
            />
          </div>

          <button
            className="navbar-toggler bg-info"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon btn btn-sm align-items-end bg-info"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a>Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <div classNameName="trans d-flex justify-content-center bg-trans">
        <div classNameName="transaction border shadow m-3 card text-center bg-transaction">
          <h3 classNameName="bg-ntransaction">New Transaction</h3>
          <div classNameName="card-body bg-transact">
            <h5 classNameName="card-title bg-trans">Income</h5>
            <h5 classNameName="card-title bg-trans1">Expense</h5>
          </div>
          <p classNameName="card-text1">
            <BiSolidCategory size={25} />
            Category
          </p>
          <p classNameName="card-text2">
            <GiNotebook size={25} />
            Note
          </p>
          <p classNameName="card-text3">
            <BsFillCalendarDateFill size={25} />
            Date
          </p>
          <div classNameName="card-footer text-muted text-end">
            <a href="#" classNameName="btn btn-primary">
              <GrAddCircle size={25} /> Add New Transaction
            </a>
          </div>
        </div>
      </div> */}

      <div className="container">
        <div className="bg-transaction">
          <h3 className="transaction text-center fs-2">New Transaction</h3>
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
              <label className="form-check-label" for="income">
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
              <label className="form-check-label fs-5" for="expense">
                EXPENSE
              </label>
            </div>
          </div>
          <div className="catergory">
            <div class="card-transactions text-center">
              <div class="card-body1 fs-4">
                <BiSolidCategory size={30} />
                Category
              </div>
              <div class="card-body2 fs-4">
                <GiNotebook size={25} />
                Note
              </div>
              <div class="card-body3 fs-4">
                <BsFillCalendarDateFill size={25} />
                Date
              </div>
            </div>
          </div>
          <div className="card-footer text-muted text-center">
            <a href="#" className="btn btn-primary">
              <GrAddCircle size={25} /> Add New Transaction
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transaction;
