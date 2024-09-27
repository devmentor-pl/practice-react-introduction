import React from 'react';
import MenuItem from './menuitem';

class Menu extends React.Component {
    render() {
        return (
            <ul>
                <MenuItem text='kontakt' url='contact'/>
                <MenuItem text='o nas' url='/aboutus'/>
                <MenuItem text='pomoc' url='/help'/>
            </ul>
        )
    }
}

export default Menu;