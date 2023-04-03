import React from "react";
import "./newExpenseForm.css";

const newExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense__controls">
          <label>Location of Expense</label>
          <input type="text" />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input type="number" />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2025-05-01" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default newExpenseForm;
