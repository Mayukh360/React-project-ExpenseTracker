import React, { useState } from "react";
import "./newExpenseForm.css";

const NewExpenseForm = (props) => {
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredAmount, setenteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");


  const TitleChangeHandler = (event) => {
    setenteredTitle(event.target.value);
    
  };

  const AmountChangeHandler = (event) => {
    setenteredAmount(event.target.value);
   
  };
  const DateChangeHandler = (event) => {
    setenteredDate(event.target.value);
    
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
   props.onSaveExpenseData(expenseData);
    //Clearing input fields
    setenteredTitle('');
    setenteredAmount('');
    setenteredDate('');
    
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={TitleChangeHandler} />
        </div>

        <div className="new-expense__controls">
          <label>Amount</label>
          <input type="number" value={enteredAmount} onChange={AmountChangeHandler} />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input 
            type="date" value={enteredDate}
            onChange={DateChangeHandler}
            min="2019-01-01"
            max="2025-05-01"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
