import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './src/components/MenuItem';

ReactDOM.render(
    <ul>
        <MenuItem text='kontakt' url='/contact' />
    </ul>, document.querySelector('#root')
);