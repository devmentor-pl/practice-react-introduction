import React from "react";
import MenuItem from "../03/MenuItem";

export class Menu extends React.Component {
    render(){
        const list = this.props.items.map(item => {
            return <MenuItem text={item.text} url={item.url}/>
        })
    return (
        <ul>
            {list}
            <MenuItem text="home" url="/"/>
            <MenuItem text="contact" url="/contact"/>
        </ul>
    )}
}

export default Menu