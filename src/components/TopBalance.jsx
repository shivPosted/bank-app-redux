import { connect } from "react-redux";

function currencyFormatter(currency) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "INR",
  }).format(currency);
}

function TopBalanceBar({ balance, isConverting }) {
  // const balance = useSelector((state) => state.account.balance);
  console.log(balance);
  return (
    <div className="top-balance-bar">
      {isConverting ? "Converting..." : currencyFormatter(balance)}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    balance: state.account.balance,
    isConverting: state.account.isConverting,
  };
}

export default connect(mapStateToProps)(TopBalanceBar);
