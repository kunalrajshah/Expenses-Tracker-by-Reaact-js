import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      {/* pass {props.date} to ExpenseDate component with name date_obj. so that we can use that date_obj in ExpenseDate */}
      <ExpenseDate date_obj={props.date} />
      <ExpenseDetails
        title={props.title}
        location={props.location}
        amount={props.amount}
      />
    </div>
  );
}

export default ExpenseItem;
