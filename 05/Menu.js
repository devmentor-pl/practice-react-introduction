import React from "react";
import MenuItem from "../03/MenuItem";

export const Menu = () => {
    return <ul>
        <MenuItem text="home" url="/"/>
        <MenuItem text="contact" url="/contact"/>
    </ul>
}

export default Menu