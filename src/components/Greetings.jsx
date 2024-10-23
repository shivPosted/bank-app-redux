import { useSelector } from "react-redux";

export default function Greetings() {
  const name = useSelector((store) => store.customer.firstName);

  return <div className="greetings">👋 Welcome {name}</div>;
}
