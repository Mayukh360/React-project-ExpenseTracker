import React, { useState } from "react";
import ExpenseDetails from "./ExpenseDetails.js";
import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";
import "./Expenses.css";
// import Card from "./card.js"



const ExpenseItem=(props)=> {
  const [isDeleted, setIsDeleted] = useState(false);
  const[changeExpense, setchangeExpense]=useState(props.amount);
  

 

  const deleteExpense = () => {
    setIsDeleted(true);
    console.log('Deleted');
  };

  if (isDeleted) {
    return null;
  }
  const clickHandler=()=>{
    setchangeExpense('100$')
    console.log(changeExpense);
  }
  return (<div>
    <div className="expense-item expenses">
     
     <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
      <ExpenseDetails title={props.title} location={props.location} amount={changeExpense}/>
      </div>
      <button onClick={deleteExpense}>Delete Expense</button>
      <button onClick={clickHandler}>Change Amount</button>
    </div>
    </div>
  );
}

export default ExpenseItem;
