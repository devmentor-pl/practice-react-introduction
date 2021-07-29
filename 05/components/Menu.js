import React from 'react';
import MenuItem from './MenuItem';

class Menu extends React.Component {
    render() {
        return (
            <ul>
                <MenuItem text="strona główna" url="/" />
                <MenuItem text="www" url="/www" />
            </ul>
        )
    }
}

export default Menu;