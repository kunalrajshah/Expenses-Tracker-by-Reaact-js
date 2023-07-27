import React,{useState} from "react";
import Expenseitem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from './ExpensesFilter';

const Expenses = (props) => {

    const [filteredYear,setFilteredYear]=useState('2020');
    const filterChangeHandler=(selectedYear)=>{
      setFilteredYear(selectedYear);
    }

    return (
      <Card className="Expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {props.items.map((expense) => (
          // When we rander list always add unique ID.
          <Expenseitem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        ))}
      </Card>
    );
};

export default Expenses;
