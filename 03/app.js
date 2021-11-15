import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './components/MenuItem';

const menuContact = {
    text: 'Kontakt',
    url: '/contact'
}

ReactDOM.render(
    <MenuItem {...menuContact}/>,
    document.querySelector('#root')
);