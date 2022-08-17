import React from 'react';
import MenuItem from '../../../03/src/components/menuItem';


const Menu = () => {
    return (
        <ul>
            <MenuItem text={'home'} url={'/'}/>
            <MenuItem text={'kontakt'} url={'/contact'}/>
        </ul>
    );
}

export default Menu;