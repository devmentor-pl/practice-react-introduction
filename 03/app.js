console.log('zad 3')

import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './MenuItem';

const App = () => {
    return (
        <>
            <MenuItem text='Kontakt' url='/contact' />
        </>
    )
}

ReactDOM.render(
    <div>
        <App />
    </div>,
    document.querySelector('#root')
)