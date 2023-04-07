import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./newExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setisEditing] = useState(false);

  const saveExpenseDataChangeHandler = (EnteredExpenseData) => {
    const expenseData = {
      ...EnteredExpenseData,
      id: Math.random().toString(),
    };
    props.onaddExpense(expenseData);
    setisEditing(false);
  };

  const startEditingHandler = () => {
    setisEditing(true);
  };

  const stopEditingHandler = () => {
    setisEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataChangeHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
