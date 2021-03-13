import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './components/MenuItem';

const App = () => (
    <>
        <MenuItem text="main" url="/main" />
        <MenuItem text="kontakt" url="/contact" />

    </>
);

ReactDOM.render(
    <App />,

    document.querySelector('#root')
);