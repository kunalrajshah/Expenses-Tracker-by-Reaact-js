import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
const NewExpense = (props) => {
  
  // Make one function to receive data from child component.
  const receiveEnterData=(ExpenseData)=>{
        const receiveDataObj={
          ...ExpenseData,
          id:Math.random().toString()
        }

        props.expensedata(receiveDataObj);
        // Passing data from child component to parent component(App.js).

  }
  return (
    <div className="new-expense">
      <ExpenseForm 
      onSaveExpenseData={receiveEnterData}
      />
    </div>
  );
};

export default NewExpense;
