import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectedExpenses from '../selectors/expenses';


const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {
            props.expenses.map((expense,index) => {
                return <ExpenseListItem key={expense.id} {...expense} index={index} />
            })
        }
    </div>
);

export default connect((state) => {
    return {
        expenses: selectedExpenses(state.expenses,state.filters),
    };
})(ExpenseList);

