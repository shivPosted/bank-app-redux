import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import store from "./myStore.js";
import { Provider } from "react-redux";
import "./features/customers/customerSlice.js";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {" "}
      {/* NOTE: broadcasting  redux store to the whole app*/}
      <App />
    </Provider>
  </StrictMode>,
);
