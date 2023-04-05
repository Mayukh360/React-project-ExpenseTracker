import React from 'react';
import './NewExpense.css';
import ExpenseForm from './newExpenseForm';

const NewExpense=(props)=>{
    const saveExpenseDataChangeHandler=(EnteredExpenseData)=>{
        const expenseData={
            ...EnteredExpenseData,
            id: Math.random().toString()
        };
        props.onaddExpense(expenseData);
    }

    return(
        <div className='new-expense'> 
           <ExpenseForm onSaveExpenseData={saveExpenseDataChangeHandler}/>
        </div>
    );
};

export default NewExpense;