import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import store from "./myStore.js";

store.dispatch({ type: "account/deposit", payload: 5000 });
console.log(store.getState());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
