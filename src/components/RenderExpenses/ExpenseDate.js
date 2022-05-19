import "./ExpenseDate.css";

import React from 'react';// React Import not needed but JSX uses this under the hood

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-GB", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-GB", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className = "expense-date__month">{month}</div>
      <div className = "expense-date__year">{year}</div>
      <div className = "expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
