import React from "react";

export default function AccountOps() {
  return (
    <section className="account-ops-section">
      <h2>Your Account Operations</h2>
      <div className="deposit-section">
        <label htmlFor="deposit">Deposit</label>
        <input type="text" id="deposit" />
        <select name="currency-selector" id="">
          <option value="us-dollar">dollar</option>
          <option value="us-dollar">dollar</option>
          <option value="us-dollar">dollar</option>
          <option value="us-dollar">dollar</option>
        </select>
        <button>Deposit</button>
      </div>
      <div className="withdraw-section">
        <label htmlFor="withdraw">Withdraw</label>
        <input type="text" id="withdraw" />
        <button>Withdraw</button>
      </div>
      <div className="payloan-section">
        <input type="text" placeholder="loan amount" />
        <input type="text" placeholder="loan purpose" />
        <button>Request Loan</button>
      </div>
      <div className="requestloan-section">
        <p>
          Pay back: <span>2000</span>
        </p>
        <button>Pay Back</button>
      </div>
    </section>
  );
}
