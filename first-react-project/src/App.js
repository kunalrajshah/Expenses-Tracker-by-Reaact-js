import Expenses from "./Components/All Expenses Rendering/Expenses";
import React from "react";

const App = () => {
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
      date: new Date(2022, 5, 12),
      title: "Room Service",
      location: "Delhi",
      amount: 243.49,
    },
    {
      id: "e3",
      date: new Date(2021, 7, 20),
      title: "Car Insurance",
      location: "Bangalore",
      amount: 312.49,
    },
    {
      id: "e4",
      date: new Date(2020, 3, 10),
      title: "Food",
      location: "Pune",
      amount: 114.49,
    },
  ];
  return (
    // return React.createElement(
    //   'div',
    //   {},
    //   React.createElement('h2', {}, "Let's get started"),
    //   React.createElement(Expenses, { items: expenses })
    // );
    <div>
      <h2>Let's get started</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
