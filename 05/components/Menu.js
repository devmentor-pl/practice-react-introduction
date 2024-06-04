import React from "react";
import MenuItem from '../../03/MenuItem';

class Menu extends React.Component {
    render() {
        return(
            <>
            <ul className='ulElements'>
                <MenuItem text="home" url="/"/>
                <MenuItem text="contact" url="/contact"/>
            </ul>
            </>
        )
    }
}

export default Menu