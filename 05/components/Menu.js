import React from 'react';
import MenuItem from './MenuItem';

const Menu = (props) => {
    const {items} = props;
    
    return (
        <ul>
            <MenuItem text='Home' url='https://www.prezydent.pl/'/>
            <MenuItem text='Andrzej Duda' url='https://www.prezydent.pl/kontakt'/>
            {items.map((item) => {
                return <MenuItem {...item}/>
            })}
        </ul>
    )
}

export default Menu;