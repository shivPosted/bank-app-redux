import React from "react";

function currencyFormatter(currency) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "INR",
  }).format(currency);
}
import { connect, useSelector } from "react-redux";

function TopBalanceBar({ balance }) {
  // const balance = useSelector((state) => state.account.balance);
  return <div className="top-balance-bar">{currencyFormatter(balance)}</div>;
}

function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}

export default connect(mapStateToProps)(TopBalanceBar);
