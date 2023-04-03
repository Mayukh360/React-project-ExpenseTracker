import React from 'react';
import ExpenseItem from "./Components/Expenses/ExpenseItem";
import NewExpense from './Components/newExpense/NewExpense'


function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 90,
      date: new Date(2022, 7, 14),
      location: "Shop",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 37999,
      date: new Date(2021, 9, 12),
      location: "Shopping Mall",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 800,
      date: new Date(2022, 2, 28),
      location: "Garage",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 1450,
      date: new Date(2022, 5, 12),
      location: "Carpenter",
    },
  ];
  return (
    <div >
      <NewExpense/>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
      ))}
    </div>
  );
}

export default App;
