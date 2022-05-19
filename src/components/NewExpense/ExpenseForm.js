import "./ExpenseForm.css";

import React, { useState } from "react"; // React Import not needed but JSX uses this under the hood

const ExpenseForm = (props) => {

  console.log(props);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    // console.log(event); // Event object generated on change
    // console.log(event.target.value); // value within the input that changes on change
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    // console.log(event); // Event object generated on change
    // console.log(event.target.value); // value within the input that changes on change
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    // console.log(event); // Event object generated on change
    // console.log(event.target.value); // value within the input that changes on change
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {

    // console.log(event);
    
    event.preventDefault(); // Method Built in to vanilla JS to stop reloading page on submission.

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseDate(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
        
          <label>Amount</label>
          <input
            type="Number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
