import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  // Make one function to receive data from child component.
  const receiveEnterData = (ExpenseData) => {
    const receiveDataObj = {
      ...ExpenseData,
      id: Math.random().toString(),
    };

    props.expensedata(receiveDataObj);
    // Passing data from child component to parent component(App.js).

    setIsEditing(false);
  };

  // For rendder Input Box.
  const [isEditing, setIsEditing] = useState(false);
  const renderInputBox = () => {
    setIsEditing(true);
  };

  // on click on cancel Button
  const stopEditing=()=>{
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={renderInputBox}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={receiveEnterData} cancel={stopEditing} />}
    </div>
  );
};

export default NewExpense;
