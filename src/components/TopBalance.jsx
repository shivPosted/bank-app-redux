import { connect } from "react-redux";

function currencyFormatter(currency) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "INR",
  }).format(currency);
}

function TopBalanceBar({ balance }) {
  // const balance = useSelector((state) => state.account.balance);
  console.log(balance);
  return <div className="top-balance-bar">{currencyFormatter(balance)}</div>;
}

function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}

export default connect(mapStateToProps)(TopBalanceBar);
