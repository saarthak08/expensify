import { hot } from "react-hot-loader/root";
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'; 
import 'normalize.css/normalize.css';
import '../styles/app.css';



const render = (Component) =>
    ReactDOM.render(<AppRouter/>, document.getElementById('app'));

render(hot(AppRouter));