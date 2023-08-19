import React from 'react';


function TodoList(props) {
  const { amount, category, date, type, note} = props
  return (
    <>
      <div className="row text-center mt-5">
        <div className="col-3">
          <p className="mt-3">{date}</p>
        </div>
        <div className="col-3">
          <p className="mt-3">{type}</p>
        </div>
        <div className="col-3">
          <p className="mt-3">{category}</p>
        </div>
        <div className="col-3">
          <p className="mt-3">{amount}</p>
        </div>
        <div className="row">
          <div className="col-9 mt-3">
            <p className="fw-bold mt-4">Note</p>
            <p className="mt-3">{note}</p>
          </div>
          <div className="col-3 mt-5">
            <button>delete</button>
          </div>
          <div className="mt-2">
            <hr />
          </div>
        </div>
      </div>
    </>
  )
}

export default TodoList