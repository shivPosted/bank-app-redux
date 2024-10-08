import { useSelector } from "react-redux";
import Header from "./components/Header";
import "./style.css";
import NewCustomer from "./features/customers/NewCustomer";
import AccountOps from "./features/accounts/AccountOps";
import Greetings from "./components/Greetings";

function App() {
  const fullName = useSelector((state) => state.customer.fullName); //NOTE: accessing state using useSelector hook provided by redux

  return (
    <>
      <Header />
      {!fullName && <NewCustomer />}
      <Greetings />
      <AccountOps />
    </>
  );
}

export default App;
