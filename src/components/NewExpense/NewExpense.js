import "./NewExpense.css";

import React from 'react'; // React Import not needed but JSX uses this under the hood
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
    };

    return (
        <Card className="new-expense">
            <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} />
        </Card>
    );

};

export default NewExpense;