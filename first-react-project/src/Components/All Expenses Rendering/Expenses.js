import Expenseitem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  {
    return (
      <Card className="Expenses">
        {props.items.map((expense) => (
          <Expenseitem
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        ))}
      </Card>
    );
  }
};

export default Expenses;
