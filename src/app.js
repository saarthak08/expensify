import { hot } from "react-hot-loader/root";
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'; 
import 'normalize.css/normalize.css';
import '../styles/app.css';
import configureStore from "./stores/configureStore";


const store = configureStore();

console.log(store.getState());

const render = (Component) =>
    ReactDOM.render(<AppRouter/>, document.getElementById('app'));
    
render(hot(AppRouter));