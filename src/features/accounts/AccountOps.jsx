import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deposit, loanPay, loanRequest, withdraw } from "./accountSlice";

export default function AccountOps() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("INR");

  const dispatch = useDispatch();

  function handleDeposit() {
    dispatch(deposit(+depositAmount));
    setDepositAmount("");
  }

  function handleWithdraw() {
    dispatch(withdraw(+withdrawAmount));
    setWithdrawAmount("");
  }
  function handleLoanRequest() {
    dispatch(loanRequest(+loanAmount, loanPurpose));
  }
  function handleLoanClose() {
    dispatch(loanPay());
  }
  return (
    <section className="account-ops-section">
      <h2>Your Account Operations</h2>
      <div className="deposit-section">
        <label htmlFor="deposit">Deposit</label>
        <input
          type="text"
          id="deposit"
          value={depositAmount}
          onChange={(e) => setDepositAmount(e.target.value)}
        />
        <select
          name="currency-selector"
          id="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="USD">US-Dollar</option>
          <option value="INR">INR-Ruppee</option>
          <option value="EUR">Euro</option>
        </select>
        <button onClick={handleDeposit} disabled={!depositAmount}>
          Deposit {depositAmount}
        </button>
      </div>
      <div className="withdraw-section">
        <label htmlFor="withdraw">Withdraw</label>
        <input
          type="text"
          id="withdraw"
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(e.target.value)}
        />
        <button onClick={handleWithdraw} disabled={!withdrawAmount}>
          Withdraw {withdrawAmount}
        </button>
      </div>
      <div className="requestloan-section">
        <input
          type="text"
          placeholder="loan amount"
          id="loanAmount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="loan purpose"
          id="loanPurpose"
          value={loanPurpose}
          onChange={(e) => setLoanPurpose(e.target.value)}
        />
        <button
          onClick={handleLoanRequest}
          disabled={!loanAmount || !loanPurpose}
        >
          Request Loan {loanAmount}
        </button>
      </div>
      <div className="payloan-section">
        <p>
          Pay back: <span>{loanAmount}</span>
        </p>
        <button onClick={handleLoanClose}>Pay Back</button>
      </div>
    </section>
  );
}
