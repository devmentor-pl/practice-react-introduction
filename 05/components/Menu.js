import React from "react";
import MenuItem from "../../03/MenuItem";


export default class Menu extends React.Component {
    render() {
        const arr = (this.props.items).map((item)=> {
            return <MenuItem {...item} />
        }) 
        const jsx = <ul>{ arr }</ul>;
        return (
            <ul>{jsx}</ul>
        )
    }
}

