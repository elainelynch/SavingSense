import React, { useState } from "react";

function NewTransaction() {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  return <div>NewTransaction</div>;
}

export default NewTransaction;
