import "./ExpenseDetails.css";
import React,{useState} from "react";

const ExpenseDetails= (props) => {
  // Here props consist title,location,amount as an object.
  // usestate return Array which consist two element one is variable and other is function.And that function use to changing things.
  // Use Array Destructuring
  const [title,setTitle]=useState(props.title);
  const [amount,setAmount]=useState(props.amount);
  
  const clickHandler=()=>{
    setTitle(prompt('Enter New title'));
  }

  const addhandler=()=>{
    setAmount('100');
  }

  

  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <h3 className="location">{props.location}</h3>
      <div className="expense-item__price">${amount}</div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={addhandler}>Add Amount</button>
    </div>
  );
}

export default ExpenseDetails;
