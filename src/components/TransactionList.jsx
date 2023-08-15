import React, { useContext } from "react";
import TransactionItem from "./TransactionItem";
import { AppContext } from "../context/AppContext";

function TransactionList() {
  // const { transactions } = useContext(AppContext);

  const transactions = [
    {
      id: 1,
      type: "expense",
      category: "Electric bill",
      amount: 1500,
      date: "2023-08-12",
      user_id: 1,
    },

    {
      id: 2,
      type: "Income",
      category: "Salary",
      amount: 15000,
      date: "2023-08-12",
      user_id: 1,
    },
  ];
  return (
    <>
      <ul className="list-group">
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            type={transaction.type}
            category={transaction.category}
            amount={transaction.amount}
            date={transaction.date}
            note={transaction.note}
          />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
