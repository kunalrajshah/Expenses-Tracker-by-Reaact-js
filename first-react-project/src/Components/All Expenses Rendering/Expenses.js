import Expenseitem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses= (props) =>{
  {
    return (
      <Card className="Expenses">
        <Expenseitem
          date={props.items[0].date}
          title={props.items[0].title}
          amount={props.items[0].amount}
        />
        <Expenseitem
          date={props.items[1].date}
          title={props.items[1].title}
          amount={props.items[1].amount}
        />
        <Expenseitem
          date={props.items[2].date}
          title={props.items[2].title}
          amount={props.items[2].amount}
        />
        <Expenseitem
          date={props.items[3].date}
          title={props.items[3].title}
          amount={props.items[3].amount}
        />
      </Card>
    );
  }
}

export default Expenses;
