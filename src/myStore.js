import reducerAccount from "./features/accounts/accountSlice";
import { configureStore } from "@reduxjs/toolkit";
import reducerCustomer from "./features/customers/customerSlice-v1";

const store = configureStore({
  reducer: {
    account: reducerAccount,
    customer: reducerCustomer,
  },
});

export default store;
