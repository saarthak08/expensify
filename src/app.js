import { hot } from "react-hot-loader/root";
import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'; 
import 'normalize.css/normalize.css';
import '../styles/app.css';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import configureStore from "./stores/configureStore";


const store = configureStore();
store.dispatch(addExpense({description:'Rent',amount:100,createdAt:1000}));
store.dispatch(addExpense({description:'Coffee',amount:300,createdAt:-2000}));
store.dispatch(addExpense({description:'Water Bill',amount:50,createdAt:0}));
store.dispatch(addExpense({description:'Gas Bill',amount:500,createdAt:2000}));


console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);


const render = (Component) =>
    ReactDOM.render(jsx, document.getElementById('app'));
    
render(hot(AppRouter));