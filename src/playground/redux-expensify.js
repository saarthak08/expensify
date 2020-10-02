import {createStore,combineReducers} from 'redux';
import {v4 as uuid} from 'uuid';

//Add Expense Action Generator
const addExpense = ({
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
const editExpense = (id,updates) => ({
    type: 'EDIT_EXPENSE',
    updates 
});


//Remove Expense Action Generator
const removeExpense = ({id}= {}) => ({
    type:'REMOVE_EXPENSE',
    id
});

//Set text filter generator
const setTextFilter = ({text=''}={}) => ({
    type:'SET_TEXT_FILTER',
    text
});

const sortByDate = () => ({
    type:'SORT_BY_DATE'
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const setStartDate = ({startDate}={}) => ({
    type:'SET_START_DATE',
    startDate
});

const setEndDate = ({endDate}={}) => ({
    type:'SET_END_DATE',
    endDate
});

const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate}) => {
    return expenses.filter((expense)=> {
        const startDateMatch=typeof startDate !=='number' || expense.createdAt >= startDate;
        const endDateMatch=typeof endDate !=='number' || expense.createdAt<=endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
       
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortBy === 'date' ) {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount<b.amount ? 1 : -1;
        }
    });
}; 

const expensesReducerDefaultState = [];

//Expense Reducer
const expenseReducer  = (state = expensesReducerDefaultState , action) => {
    switch(action.type) {
        case 'ADD_EXPENSE': {
            return[
                ...state,
                action.expense
            ]
        }
        case 'REMOVE_EXPENSE': {
            return state.filter(({id}) => {
                return id!==action.id
            });
        }
        case 'EDIT_EXPENSE': {
            return state.map((expense)=> {
                if(expense.id===action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })
        }
        default:
            return state;
    }
};

const filtersReducerDefaultState = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
};

//Filter Reducer
const filterReducer  = (state = filtersReducerDefaultState , action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER': {
            return {
                ...state,
                text:action.text,
            }
        }
        case 'SORT_BY_AMOUNT': {
            return {
                ...state,
                sortBy:'amount'
            }
        }
        case 'SORT_BY_DATE': {
            return {
                ...state,
                sortBy:'date'
            }
        }
        case 'SET_START_DATE': {
            return {
                ...state,
                startDate:action.startDate
            }
        }
        case 'SET_END_DATE' : {
            return {
                ...state,
                endDate:action.endDate
            }
        }
        default:
            return state;
    }
};


const store = createStore(
    combineReducers({
        expenses:expenseReducer,
        filters:filterReducer
    })
);

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
});


store.dispatch(addExpense({description:'Rent',amount:100,createdAt:1000}));
const expenseTwo = store.dispatch(addExpense({description:'Coffee',amount:300,createdAt:-2000}));

store.dispatch(setStartDate({startDate:1000}));
store.dispatch(setTextFilter({text:'rent'}));
/* 
store.dispatch(editExpense(expenseTwo.expense.id,{amount:300}));

store.dispatch(setTextFilter({text:'hello'}));
store.dispatch(setTextFilter());

store.dispatch(setTextFilter({text:'rent'}));

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate({startDate:123}));
store.dispatch(setStartDate());
store.dispatch(setEndDate({endDate:234})); 
*/



const demoState = {
    expenses:[{
        id:'abcd',
        description:'January Rent',
        note: 'This was final payment of that address.',
        amount: 54500,
        createdAt:0
    },],
    filters: {
        text:'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
};

