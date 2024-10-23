import { applyMiddleware, combineReducers, createStore } from "redux";
import reducerCustomer from "./features/customers/customerSlice";
import reducerAccount from "./features/accounts/accountSlice";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootReducer = combineReducers({
  account: reducerAccount,
  customer: reducerCustomer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
