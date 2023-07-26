import "./ExpenseDetails.css";
import React,{useState} from "react";

const ExpenseDetails= (props) => {
  // Here props consist title,location,amount as an object.
  const [title,setTitle]=useState(props.title);
  // usestate return Array which consist two variable one is variable and other is function.
  // Use Array Destructuring
  const clickHandler=()=>{
    setTitle(prompt('Enter New title'));
  }

  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <h3 className="location">{props.location}</h3>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
      <button>Delete</button>
    </div>
  );
}

export default ExpenseDetails;
