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
  },
});

const { reducer: reducerAccount } = accountSlice;
export default reducerAccount;
export const { deposit, withdraw, requestLoan, closeLoan } =
  accountSlice.actions;
