import { combineReducers, createStore } from "redux";

console.log("start of myStore.js");

const accountState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};
const customerState = {
  fullName: "",
  nationalID: null,
  createdAt: null,
};

function accountReducer(state = accountState, action) {
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

function customerReducer(state = customerState, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateCustomer":
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  //NOTE: combining reducers with this function
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

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
function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

function updateCustomer(name) {
  return { type: "customer/updateCustomer", payload: name };
}

store.dispatch(deposit(500));
store.dispatch(withdraw(300));
store.dispatch(loanRequest(20000, "Buy a Bike"));
console.log(store.getState());
store.dispatch(loanPay());

store.dispatch(createCustomer("Shiv Pratap Singh", 1234567890123));
console.log(store.getState());

console.log("start of myStore.js");
