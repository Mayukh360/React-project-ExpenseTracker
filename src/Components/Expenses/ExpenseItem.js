import ExpenseDetails from "./ExpenseDetails.js";
import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";
import "./Expenses.css";


const ExpenseItem=(props)=> {

  return (
    <div className="expense-item expenses">
     <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
      <ExpenseDetails title={props.title} location={props.location} amount={props.amount}/>
      </div>
    </div>
  );
}

export default ExpenseItem;
