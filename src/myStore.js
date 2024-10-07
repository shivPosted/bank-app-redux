import { createStore } from "redux";

console.log("start of myStor.js");

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/loanRequest":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/loanPay":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
function loanRequest(amount, purpose) {
  return {
    type: "account/loanRequest",
    payload: { amount, purpose },
  };
}
function loanPay() {
  return { type: "account/loanPay" };
}

store.dispatch(deposit(500));
store.dispatch(withdraw(300));
store.dispatch(loanRequest(20000, "Buy a Bike"));
console.log(store.getState());
store.dispatch(loanPay());
console.log(store.getState());
console.log("start of myStor.js");
