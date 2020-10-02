import {v4 as uuid} from 'uuid';



//Add Expense Action Generator
export const addExpense = ({
    description='',
    note='',
    amount = 0,
    createdAt=0
} = {}) => ({
    type:'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});


//Edit Expense Action Generator
export const editExpense = (id,updates) => ({
    type: 'EDIT_EXPENSE',
    updates 
});


//Remove Expense Action Generator
export const removeExpense = ({id}= {}) => ({
    type:'REMOVE_EXPENSE',
    id
});
