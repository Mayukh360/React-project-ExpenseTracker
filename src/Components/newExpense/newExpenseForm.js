import React, { useState } from "react";
import "./newExpenseForm.css";

const NewExpenseForm = () => {
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredAmount, setenteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");
  // const[userInput, setUserInput]=useState({
  //   enteredTitle:"",
  //   enteredAmount:"",
  //   enteredDate:"",
  // });

  const TitleChangeHandler = (event) => {
    setenteredTitle(event.target.value);
    // setUserInput(()=>{
    //   return{...userInput, enteredTitle :event.target.value, };
    // })
  };

  const AmountChangeHandler = (event) => {
    setenteredAmount(event.target.value);
    // setUserInput(()=>{
    //   return{...userInput, enteredAmount :event.target.value, };
    // })
  };
  const DateChangeHandler = (event) => {
    setenteredDate(event.target.value);
    // setUserInput(()=>{
    //   return{...userInput, enteredDate :event.target.value };
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" onChange={TitleChangeHandler} />
        </div>

        <div className="new-expense__controls">
          <label>Amount</label>
          <input type="number" onChange={AmountChangeHandler} />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
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
