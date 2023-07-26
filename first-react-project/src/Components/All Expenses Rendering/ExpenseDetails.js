import "./ExpenseDetails.css";
import React,{useState} from "react";
const ExpenseDetails= (props) => {
  // Here props consist title,location,amount as an object.
  // usestate return Array which consist two element one is variable and other is function.And that function use to changing things.
  
  // // Use Array Destructuring
  // const [title,setTitle]=useState(props.title);
  // const [newTitle,setNewTitle]=useState("");
  
  // const clickHandler=()=>{
  //   setTitle(newTitle);
  // }

  // const changeHandler=(event)=>{
  //   setNewTitle(event.target.value);
  // }

  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
      {/* <input type="text" value={newTitle} onChange={changeHandler}/>
      <button onClick={clickHandler}>Change Title</button> */}
    </div>
  );
}

export default ExpenseDetails;
