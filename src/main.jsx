import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import store from "./myStore.js";
import { Provider } from "react-redux";
import { createCustomer } from "./features/customers/customerSlice.js";

store.dispatch({ type: "account/deposit", payload: 5000 });
console.log(store.getState());
store.dispatch(createCustomer("Shiv Pratatp Singh", 125364));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
