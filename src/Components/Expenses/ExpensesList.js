import React  from "react";
import ExpenseItem from './ExpenseItem';

const ExpenseList=(props)=>{
    let expensesContent= <h2>No expenses found for the selected year.</h2>;
  
    if(props.items.length>0){
     expensesContent= props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
      ))
    }
}
export default ExpenseList;