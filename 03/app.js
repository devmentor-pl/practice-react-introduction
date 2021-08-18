import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './MenuItem';

const App = () => <MenuItem text="kontakt" url="/contact/"/>

ReactDOM.render(
    <ul>
        <App/>
    </ul>,
    document.querySelector('#root')
);