import { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewCustomer } from "./customerSlice";

export default function NewCustomer() {
  const [fullName, setFullName] = useState("");
  const [nationalID, setNationalID] = useState("");
  const dispatch = useDispatch();

  function handleClick() {
    if (fullName && nationalID)
      dispatch(createNewCustomer(fullName, nationalID));
  }

  return (
    <section className="new-customer-create">
      <h2>Create new Customer</h2>
      <label htmlFor="full-name">Customer Full Name</label>
      <input
        type="text"
        id="full-name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <label htmlFor="NID">National ID</label>
      <input
        type="text"
        id="NID"
        value={nationalID}
        onChange={(e) => setNationalID(e.target.value)}
      />
      <button onClick={handleClick}>create new customer</button>
    </section>
  );
}
