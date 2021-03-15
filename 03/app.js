import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './components/MenuItem';

const App = () => (
    <ul>
        <MenuItem text="main" url="/main" />
        <MenuItem text="kontakt" url="/contact" />

    </ul>
);

ReactDOM.render(
    <App />,

    document.querySelector('#root')
);