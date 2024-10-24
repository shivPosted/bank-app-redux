import { createSlice } from "@reduxjs/toolkit";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: null,
  isConverting: false,
};

export default function reducerAccount(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        isConverting: false,
      };
    case "account/withdraw":
      if (action.payload > state.balance) return state;
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
        loan: action.payload.amount,
      };
    case "account/closeLoan":
      return {
        ...state,
        loan: 0,
        balance: state.balance - state.loan,
        loanPurpose: null,
      };
    case "account/convertingRates":
      return {
        ...state,
        isConverting: true,
      };
    default:
      return state;
  }
}

function deposit(amount, currency) {
  if (currency === "INR")
    return {
      type: "account/deposit",
      payload: amount,
    };

  return async function (dispatch, getState) {
    dispatch({ type: "account/convertingRates" });

    const res = await fetch(
      `https://api.frankfurter.app/latest?base=${currency}&symbols=INR`,
    );

    const data = await res.json();
    const convertedRate = data.rates.INR;
    const finalAmount = amount * convertedRate;
    dispatch({ type: "account/deposit", payload: finalAmount });
  };
}

function withdraw(amount) {
  return {
    type: "account/withdraw",
    payload: amount,
  };
}
function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}
function closeLoan() {
  return {
    type: "account/closeLoan",
  };
}
export { deposit, withdraw, requestLoan, closeLoan };
