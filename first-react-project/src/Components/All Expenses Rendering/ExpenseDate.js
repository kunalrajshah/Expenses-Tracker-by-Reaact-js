import "./ExpenseDate.css";
const ExpenseDate= (props) =>{
  // Here props consist single object date_obj.
  const month = props.date_obj.toLocaleString("en-us", { month: "long" });
  const year = props.date_obj.getFullYear();
  const day = props.date_obj.toLocaleString("en-us", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
