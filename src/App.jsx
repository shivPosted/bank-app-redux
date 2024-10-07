import { useSelector } from "react-redux";

function App() {
  const customer = useSelector((store) => store.customer);
  return <div>Hello {customer.fullName}</div>;
}

export default App;
