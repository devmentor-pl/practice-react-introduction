import React from "react";
import MenuItem from "../../03/components/MenuItem";

class Menu extends React.Component {
    render() {
        return (
            <ul>
                <MenuItem text = 'Home' url = '/'/>
                <MenuItem text = 'Kontakty' url = '/contact'/>                                
            </ul>
        )
    }
}

export default Menu;