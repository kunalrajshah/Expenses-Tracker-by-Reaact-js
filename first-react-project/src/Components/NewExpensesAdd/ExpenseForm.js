import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  const changetitleHandler = (event) => {
    setInputTitle(event.target.value);
  };
  const changeamountHandler = (event) => {
    setInputAmount(event.target.value);
  };
  const changedateHandler = (event) => {
    setInputDate(event.target.value);
  };


  const submitHandler=(event)=>{
    event.preventDefault(); //used to prevent from default behaviour on submit the form(like reload page).
    // After taking data from input. make an object of that Data.
    const expenseData={
      title:inputTitle,
      amount:inputAmount,
      date:new Date(inputDate)
    }

    props.onSaveExpenseData(expenseData); 
    // Passing data from child component to parent component(newExpense.js).
    
    setInputTitle("");
    setInputAmount("");
    setInputDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={inputTitle} onChange={changetitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputAmount}
            onChange={changeamountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={inputDate}
            onChange={changedateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
