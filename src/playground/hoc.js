//HIGHER ORDER COMPONENT: A component that renders another component.

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is : {props.info}</p>
    </div>
);

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ?
            <WrappedComponent {...props}/> :
            <p>Please login to continue!</p>}
        </div>
    );
};


const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info='These are details'></AuthInfo>,document.getElementById('app'));