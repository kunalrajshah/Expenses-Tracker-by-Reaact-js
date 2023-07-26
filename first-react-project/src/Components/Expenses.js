import Expenseitem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";

function Expenses(props) {
  {
    return (
      <Card className="Expenses">
        <Expenseitem
          date={props.items[0].date}
          title={props.items[0].title}
          location={props.items[0].location}
          amount={props.items[0].amount}
        />
        <Expenseitem
          date={props.items[1].date}
          title={props.items[1].title}
          location={props.items[1].location}
          amount={props.items[1].amount}
        />
        <Expenseitem
          date={props.items[2].date}
          title={props.items[2].title}
          location={props.items[2].location}
          amount={props.items[2].amount}
        />
        <Expenseitem
          date={props.items[3].date}
          title={props.items[3].title}
          location={props.items[3].location}
          amount={props.items[3].amount}
        />
      </Card>
    );
  }
}

export default Expenses;
