import React, { useState } from "react";
import "./newExpenseForm.css";

const NewExpenseForm = () => {
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

  return (
    <form>
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
