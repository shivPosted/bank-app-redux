const accountState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export default function accountReducer(state = accountState, action) {
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

export function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
export function loanRequest(amount, purpose) {
  return {
    type: "account/loanRequest",
    payload: { amount, purpose },
  };
}
export function loanPay() {
  return { type: "account/loanPay" };
}
