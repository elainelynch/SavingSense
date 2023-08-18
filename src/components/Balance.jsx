import React, { useContext } from "react";
import { TbCurrencyPeso } from "react-icons/tb";
import { AppContext } from "../context/AppContext";
import Income from "./Income";

function Balance() {
  const { expenses, income } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.amount);
  }, 0);

  return (
    <div>
      <span>
        Balance : <TbCurrencyPeso size={30} /> {income - totalExpenses}
      </span>
      {Balance}
    </div>
  );
}

export default Balance;
