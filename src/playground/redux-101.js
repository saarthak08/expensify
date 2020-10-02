import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const reset = () => ({type:'RESET'});

const set = ({value = 1} = {}) => ({
    type: 'SET',
    value
});



//Reducer
// Reducer are pure functions. (Do not rely on variables out of scope)
// Never state change or action
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.value
            }
        default:
            return state;
    }
};

const store = createStore(countReducer);


const unsubscribe = store.subscribe(() => {
    const state=state.getState();
});

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount());

store.dispatch(reset());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 2 }));

store.dispatch(set({value:20}));

unsubscribe();