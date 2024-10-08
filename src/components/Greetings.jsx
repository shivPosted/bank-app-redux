import React from "react";
import { useSelector } from "react-redux";

export default function Greetings() {
  const name = useSelector((store) => store.customer.fullName);

  return <div className="greetings">👋 Welcome {name}</div>;
}
