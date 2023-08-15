import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { TbCurrencyPeso } from "react-icons/tb";

function Income() {
  const { income } = useContext(AppContext);

  return (
    <div>
      <TbCurrencyPeso size={30} />
      {income}
    </div>
  );
}

export default Income;
