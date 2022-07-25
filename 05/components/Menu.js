import React from "react";
import MenuItem from './MenuItem';

class Menu extends React.Component {
    render() {
        const list = this.props.items.map((item) => <MenuItem {...item}/>)
        return (
            <ul>       
                { list }
            </ul>
        )
    }
}

export default Menu;