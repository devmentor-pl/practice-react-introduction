import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './components/MenuItem';

const App = () => {
    return (
        <ul>
            <MenuItem text="kontakt" url="/contact"/>
        </ul>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));