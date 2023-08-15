import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { TbCurrencyPeso } from "react-icons/tb";

function TransactionItem(props) {
  const { date, category, amount, note } = props;
  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div>{date}</div>
        {category}
        <div>
          <span className="bg-primary">
            <TbCurrencyPeso size={20} />
            {amount}
          </span>
          <AiFillDelete size={20} />
          {note}
        </div>
      </li>
    </>
  );
}

export default TransactionItem;
