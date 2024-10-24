import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeLoan, deposit, requestLoan, withdraw } from "./accountSlice";

export default function AccountOps() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("INR");
  const dispatch = useDispatch();
  const {
    loan: currentLoan,
    loanPurpose: purpose,
    isConverting,
  } = useSelector((store) => store.account);

  function handleDeposit() {
    dispatch(deposit(+depositAmount));
    setDepositAmount("");
    setCurrency("INR");
  }
  function handleWithdraw() {
    dispatch(withdraw(+withdrawAmount));
    setWithdrawAmount("");
  }
  function handleRequestLoan() {
    if (!loanAmount || !loanPurpose) return;
    dispatch(requestLoan(+loanAmount, loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
  }
  function handleCloseLoan() {
    dispatch(closeLoan());
  }
  return (
    <section className="account-ops-section">
      <h2>Your Account Operations</h2>
      <div className="deposit-section">
        <label htmlFor="deposit">Deposit</label>
        <input
          type="number"
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
          {isConverting
            ? "converting..."
            : `
Deposit ${depositAmount}
`}
        </button>
      </div>
      <div className="withdraw-section">
        <label htmlFor="withdraw">Withdraw</label>
        <input
          type="number"
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
          type="number"
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
        <button onClick={handleRequestLoan}>Request Loan {loanAmount}</button>
      </div>
      <div className="payloan-section">
        <p>
          Pay back Loan:{" "}
          <span>
            {currentLoan}({purpose})
          </span>
        </p>
        <button onClick={handleCloseLoan} disabled={!currentLoan}>
          Pay Back
        </button>
      </div>
    </section>
  );
}
