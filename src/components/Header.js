import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePageLink = () => (
    <NavLink to='/' activeClassName='is-active' exact={true}>Go to Dashboard/Home</NavLink>
);

const AddExpensePageLink = () => (
    <NavLink to='/create' activeClassName='is-active'>Go to Add Expense Page</NavLink>
);

const EditExpensePageLink = () => (
    <NavLink to='/edit/:id' activeClassName='is-active'>Go to Edit Expense Page</NavLink>
);

const HelpPageLink = () => (
    <NavLink to='/help' activeClassName='is-active'>Go to Help Page</NavLink>
);

const Header = () => (
    <div>
        <header>
            <h1>Expensify</h1>
            <AddExpensePageLink /><br />
            <EditExpensePageLink /><br />
            <HelpPageLink /><br />
            <HomePageLink /><br /><br />
        </header>
    </div>

);

export default Header;