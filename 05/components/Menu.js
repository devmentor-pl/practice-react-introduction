import React from 'react';
import MenuItem from './MenuItem'

const Menu = () => {
    return (
        <ul>
            <MenuItem text="Home" url="/"/>
            <MenuItem text="Kontakt" url="/contact"/>
        </ul>
    )
}

export default Menu;