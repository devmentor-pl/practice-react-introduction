console.log('zad 4')

import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './MenuItem';

const Menu = () => (
    <ul>
        <MenuItem text="home" url="/" />
        <MenuItem text="kontakt" url="/contact" />
    </ul>
)
const Nav = () => (
    <Menu />
)

ReactDOM.render(
    <div>
        <Nav />
    </div>,
    document.querySelector('#root')
)