import React from "react";
import ReactDOM from "react-dom";
import MenuItem from "../03/MenuItem";

const Menu = () => {
    return <ul>
        <MenuItem text="home" url="/"/>
        <MenuItem text="contact" url="/contact"/>
    </ul>
}

const Nav = () => {
    return <nav>
        <Menu/>
    </nav>
}

ReactDOM.render(
    <Nav/>,
    document.querySelector('#root')
)