import reducerCustomer from "./features/customers/customerSlice";
import reducerAccount from "./features/accounts/accountSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    account: reducerAccount,
    customer: reducerCustomer,
  },
});

export default store;
