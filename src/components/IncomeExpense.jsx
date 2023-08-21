import React, { useEffect } from 'react'

function IncomeExpense(props) {




  useEffect(() => {
    document.title = "IncomeExpense";
  }, []);



  return (
    <div className="row  d-flex justify-content-center shadow-sm ">
    <div className=" col-10 col-md-3 col-sm-3 mt-3 mb-3  income rounded shadow p-3">
      <div className="">
        <h5 className="card-title text-center size-em">
          <span className="i-e-b fw-bold">Income</span>
        </h5>
        <hr />
        <h5 className="text-center fw-bold i-e-b">${props.income}</h5>
      </div>
    </div>
    <div className="col-10 col-md-3 col-sm-3  mt-3 mb-3 expense rounded shadow p-3">
      <div className="">
        <h5 className="card-title text-center size-em">
          <span className="expense1 fw-bold">Expense</span>
        </h5>
        <hr />
        <h5 className="text-center fw-bold expense1">${props.expenses}</h5>
      </div>
    </div>
    <div className="col-10 col-md-3 col-sm-3  mt-3 mb-3 balance rounded shadow p-3">
      <div className="">
        <h5 className="card-title text-center size-em">
          <span className="i-e-b fw-bold">Balance</span>
        </h5>
        <hr />
        <h5 className="text-center fw-bold i-e-b">${props.balance}</h5>
      </div>
    </div>
  </div>
  )
}

export default IncomeExpense