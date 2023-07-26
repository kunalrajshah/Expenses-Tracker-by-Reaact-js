import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem= (props) =>{
  return (
    <Card className="expense-item">
      {/* pass {props.date} to ExpenseDate component with name date_obj. so that we can use that date_obj in ExpenseDate */}
      <ExpenseDate date_obj={props.date} />
      <ExpenseDetails
        title={props.title}
        location={props.location}
        amount={props.amount}
      />
    </Card>
  );
}

export default ExpenseItem;
