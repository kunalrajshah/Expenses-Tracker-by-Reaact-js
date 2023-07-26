import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  const changetitleHandler = (event) => {
    setInputTitle(event.target.value);
  };
  const changeamountHandler = (event) => {
    setInputAmount(event.target.value);
  };
  const changedatehandler = (event) => {
    setInputDate(event.target.value);
  };

  const showdata = () => {
    console.log(inputTitle);
    console.log(inputAmount);
    console.log(inputDate);
  };

  return (
    <form>
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
            onChange={changedatehandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={showdata}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
