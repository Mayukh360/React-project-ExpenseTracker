import React, { useState } from "react";
import ExpenseDetails from "./ExpenseDetails.js";
import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";
import "./Expenses.css";
import card from "./card.js"


const ExpenseItem=(props)=> {
  const [isDeleted, setIsDeleted] = useState(false);

  const deleteExpense = () => {
    setIsDeleted(true);
  };

  if (isDeleted) {
    return null;
  }
  return (
    <card className="expense-item expenses">
     <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
      <ExpenseDetails title={props.title} location={props.location} amount={props.amount}/>
      </div>
      <button onClick={deleteExpense}>Delete Expense</button>
    </card>
  );
}

export default ExpenseItem;
