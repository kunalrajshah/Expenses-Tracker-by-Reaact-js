import React, { useState } from "react";
import Expenseitem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // For Display Filter Expenses
  const filterExpenses = props.items.filter((exp) => {
    return exp.date.getFullYear().toString() === filteredYear;
  });

  // We can use HTML element inside the variable in JSX code.
  let noExpenseMsg=<p>No Expense Found !!</p>
  let oneExpenseMsg=<p>Only single Expense here. Please add more...</p>

  if(filterExpenses.length > 0){
    noExpenseMsg=filterExpenses.map((expense) => (
      // When we rander list always add unique ID.
      <Expenseitem
        key={expense.id}
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      />
    ))
  }
  
  return (
    <Card className="Expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* use Ternary Opeator to rander filterExpense. Bcz, inside{} we can't use if or for loop*/}
      {/* We can also return by && property of js */}
      {/* {filterExpenses.length === 0 && <p>No Expense Found.</p>} */}
      {/* it check if first condition is true then it return second element */}
    
      {/* {filterExpenses.length === 0 ? (
        <p>No Expense Found.</p>
      ) : (
        filterExpenses.map((expense) => (
          // When we rander list always add unique ID.
          <Expenseitem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        ))
      )} */}

      {noExpenseMsg}
      {filterExpenses.length ===1 && oneExpenseMsg}

    </Card>
  );
};

export default Expenses;
