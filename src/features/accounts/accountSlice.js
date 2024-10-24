import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: null,
  isConverting: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isConverting = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },
      reducer(state, action) {
        if (state.loan > 0) return;
        state.loanPurpose = action.payload.purpose;
        state.balance += action.payload.amount;
        state.loan = action.payload.amount;
      },
    },
    closeLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = null;
    },
    convertingRates(state) {
      state.isConverting = true;
    },
  },
});

export function deposit(amount, currency) {
  // NOTE: using deposit as custom function instead of RTK automated action creator deposit because we are using thunks as middleware to get data from external api or want to do some task before dispatching actions
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

const { reducer: reducerAccount } = accountSlice;
export default reducerAccount;

export const { withdraw, requestLoan, closeLoan } = accountSlice.actions;
