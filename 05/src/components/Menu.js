import React from 'react';
import MenuItem from '../components/MenuItem';

const Menu = () => (
    <ul>
        <MenuItem text="home" url="/" />
        <MenuItem text="kontakt" url="/contact" />
    </ul>

);

export default Menu;