import "./ExpenseDetails.css";

function ExpenseDetails(props){
  // Here props consist title,location,amount as an object.
  return(
    <div className="expense-item__description">
    <h2>{props.title}</h2>
    <h3 className="location">{props.location}</h3>
    <div className="expense-item__price">${props.amount}</div>
  </div>
  );
}

export default ExpenseDetails;