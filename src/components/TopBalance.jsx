import React from "react";
import { useSelector } from "react-redux";

export default function TopBalanceBar() {
  const balance = useSelector((state) => state.account.balance);
  return <div className="top-balance-bar">&#8377;{balance}</div>;
}
