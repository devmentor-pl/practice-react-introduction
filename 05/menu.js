import React from 'react';
import MenuItem from './menu_item';

const styleUl = {
    fontSize: '3vw',
    backgroundColor: 'green'
}

class Menu extends React.Component {
    render() {
        return (
            <ul style = {styleUl}>
                <MenuItem text = "strona główna" url = "/" />
                <MenuItem text = "www" url = "/www" />
            </ul>
        )
    }
}

export default Menu