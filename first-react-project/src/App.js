import Expenseitem from "./Components/ExpenseItem";
function App() {
  let expenses = [
    {
      id: "e1",
      date: new Date(2023, 7, 26),
      title: "Rent",
      location: "Bangalore",
      amount: 500.49,
    },
    {
      id: "e2",
      date: new Date(2023, 7, 26),
      title: "Room Service",
      location: "Delhi",
      amount: 243.49,
    },
    {
      id: "e3",
      date: new Date(2023, 7, 26),
      title: "Car Insurance",
      location: "Bangalore",
      amount: 312.49,
    },
    {
      id: "e4",
      date: new Date(2023, 7, 26),
      title: "Food",
      location: "Pune",
      amount: 114.49,
    },
  ];
  return (
    <div>
      <h2>Let's get started</h2>
      {/* Used the components always like this when we import */}
      <Expenseitem
        date={expenses[0].date}
        title={expenses[0].title}
        location={expenses[0].location}
        amount={expenses[0].amount}
      ></Expenseitem>
      <Expenseitem
        date={expenses[1].date}
        title={expenses[1].title}
        location={expenses[1].location}
        amount={expenses[1].amount}
      ></Expenseitem>
      <Expenseitem
        date={expenses[2].date}
        title={expenses[2].title}
        location={expenses[2].location}
        amount={expenses[2].amount}
      ></Expenseitem>
      <Expenseitem
        date={expenses[3].date}
        title={expenses[3].title}
        location={expenses[3].location}
        amount={expenses[3].amount}
      ></Expenseitem>
    </div>
  );
}

export default App;
