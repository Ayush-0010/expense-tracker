import "./ExpenseCart.css";
const ExpenseCart = (props) => {
  const month = [
    "JAN",
    "FEB",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  return (
    <div className="container-fluid">
      <div className="row mb-3">
        <div className="col expense-display-cart-css">
          <div className="expense-display-cart-date-css">
            <p className="expense-display-cart-date-p-tag-css">{props.date.getFullYear()}</p>
            <p className="expense-display-cart-date-p-tag-css">{month[props.date.getMonth()]}</p>
            <p className="expense-display-cart-date-p-tag-css">{props.date.getDate()}</p>
          </div>
          <div className="expense-display-cart-title-div-css">
            <p className="expense-display-cart-title-css">{props.title}</p>
          </div>
          <div className="expense-display-cart-amount-div-css">
            <p className="expense-display-cart-amount-css">RS.{props.amount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCart;
