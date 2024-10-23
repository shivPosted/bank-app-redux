import Header from "./components/Header";
import "./style.css";
import Greetings from "./components/Greetings";
import AccountOps from "./features/accounts/AccountOps";
import NewCustomer from "./features/customers/NewCustomer";
import { useSelector } from "react-redux";

function App() {
  const firstName = useSelector((store) => store.customer.firstName);
  return (
    <>
      <Header />
      {firstName ? (
        <>
          <Greetings />
          <AccountOps />
        </>
      ) : (
        <NewCustomer />
      )}
    </>
  );
}

export default App;
